from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import FileSchema, FileFieldsSchema
from ..controllers import FileController

""""
    @copyright  (c) 2022 - Instituto Ambiental e Tecnologico da Amazonia. ALL RIGHTS RESERVED
    @brief      Factory Human Resources - Smart and Efficient (IHR-SE)

    @details    Responsible for managing the flow to do CRUD on cost center table.

    @author     Iranildo Batalha <iranildo.santos@iatecam.org.br>                                                                
    @since      Aug 30, 2022        
"""

def isEmpty(element):
    """
    Function responsible for validating if the value is empty
    """
    return True if element == None or element == '' else False

def isFilled(element, is_required):
    """
    Function to check if the field is required
    """
    if is_required:
        return True if not isEmpty(element) else False
    return True

def isCorrectType(data, _type):
    """
    Function that validates that the value is of the correct type
    """
    if _type == 'int':
        return str(data).isnumeric()
    return True

def treat_list_data(data, map_column):
    """
    Function that validates spreadsheet data
    """
    error, column_to_values = ([], {})
    for row in data:
        row = dict(row)
        for column in list(map_column.keys()):
            if column not in column_to_values.keys():
                column_to_values[column] = set()
            if not isFilled(row[column], map_column[column]['isRequired']):
                error.append({
                    "row": row,
                    "error": f'Field "{column}" is empty'
                })
            if not isCorrectType(row[column], map_column[column]['type']):
                error.append({
                    "row": row,
                    "error": f'Field "{column}" is incorrect type'
                })
            if not map_column[column]['isDuplicated'] and (row[column] in column_to_values[column]):
                error.append({
                    "row": row,
                    "error": f'Column "{column}": {row[column]} is duplicated'
                })
            else:
                column_to_values[column].add(row[column])
    return error

async def get_file(name: str, db: AsyncSession):
    """
    Function to get general sheet configuration information
    """
    rhevolution_files: list[FileSchema.File] = await FileController.get_files(db)
    rhevolution_file = None
    for file in rhevolution_files:
        if (file.description == name):
            return file
    return rhevolution_file

async def get_file_fields_from(name: str, db: AsyncSession):
    """
    Function to get the information about each field in the worksheet
    """
    file: FileSchema.File = await get_file(name, db)
    return await FileController.get_file_fields(db, file.id)

def replace_position_to_name(list_data, fields: list[FileFieldsSchema.FileFields], line_init=1):
    """
    Function to name the worksheet columns according to their configuration in the database
    """
    list_formatted = []
    line_actual = line_init
    rows = [int(r) for r in list(list_data.keys())]
    while line_actual in rows:
        row = list_data[str(line_actual)]
        line = {}
        for field in fields:
            if (field.file_field_position not in list(row.keys())):
                line[field.table_field_name] = ""
            else:
                line[field.table_field_name] = row[field.file_field_position]
        list_formatted.append(line)
        line_actual += 1
    return list_formatted

def build_set(data_list, _key):
    """
    Function to create a set of non-repeating data in a given column of the worksheet
    """
    set_response = set()
    for data in data_list:
        data = data.__dict__
        set_response.add(data[_key])
    return set_response

def to_list_dict(list_data):
    """
    Function that converts data to a list of dictionaries
    """
    list_response = []
    for data in list_data:
        list_response.append(dict(data))
    return list_response

def build_map_column(fields: list[FileFieldsSchema.FileFields]):
    """
    Function that creates a map to relate the worksheet columns with their properties
    """
    map_column = {}
    for field in fields:
        map_column[field.table_field_name] = {
            'type': field.table_field_type,
            'isDuplicated': field.key == 'N',
            'isRequired': field.is_required
        }
    return map_column

def treat_errors_rhevolution(list_errors):
    """
    Function to build one list errors of Rhevolution
    """
    new_list_errors = []
    for error in list_errors:
        rhe = error['row']
        new_list_errors.append(build_error(rhe, None, error['error']))
    return new_list_errors

def treat_errors_gerp(list_errors):
    """
    Function to build one list errors of Gerp
    """
    new_list_errors = []
    for error in list_errors:
        g = error['row']
        new_list_errors.append(build_error(None, g, error['error']))
    return new_list_errors

def build_error(rhe, gerp, error):
    """
    Function to build a formated error
    """
    return {
        "function": rhe["function"] if rhe and rhe["function"] else "Undefined",
        "employee": rhe["name"] if rhe and rhe["name"] else "Undefined",
        "rhevolution_cc": rhe["cc_new"] if rhe and rhe["cc_new"] else "",
        "gerp_cc": gerp["department_code"] if gerp and gerp["department_code"] else "",
        "error": error
    }

def get_error_formated(errors, isEmpty, sheet):
    """
    Function to build a formated error
    :param errors -> errors list
    :param isEmpty -> if there is empty sheets
    :param sheet -> id sheet that is empty
    """
    return {
        "errors": errors,
        "isEmpty": isEmpty,
        "sheet": sheet
    }

def get_error(rhevolution_data, gerp_data):
    """
    Function to check the importing of sheets
    """
    errors = []
    if (len(rhevolution_data) == 0 and len(gerp_data) == 0):
        return get_error_formated(errors=errors, isEmpty=True, sheet=2)
    elif (len(gerp_data) == 0):
        return get_error_formated(errors=errors, isEmpty=True, sheet=1)
    elif (len(rhevolution_data) == 0):
        return get_error_formated(errors=errors, isEmpty=True, sheet=0)
    return None