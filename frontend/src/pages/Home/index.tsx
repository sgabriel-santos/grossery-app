import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../../components/Input";
import { LoadingDots } from "../../components/Loading/LoadingDots";
import { useSearch } from "../../hooks/useSearch";

import { Container, InputWrapper } from "./styles";

export const Home: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([""]);
  const inputsRef = useRef<string[]>([""]);
  const { isLoading, onSearchProduct, data, isError } = useSearch();
  const navigate = useNavigate();

  const searchInput = async () => {
    onSearchProduct(inputsRef.current);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    searchInput();
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter" && !isLoading) {
      searchInput();
    }
  };

  useEffect(() => {
    if (data) {
      navigate("/search");
    }
    if (isError) {
      toast.clearWaitingQueue();
      toast("Erro ao fazer a busca", {
        type: "error",
        autoClose: 3000,
        pauseOnHover: false,
      });
    }
  }, [data, isError, navigate]);

  const onChangeInput = (aValue: string, anIndex: number): void => {
    inputsRef.current[anIndex] = aValue;
  };

  const onAddInput = (): void => {
    inputsRef.current.push("");
    setInputs((oldValue) => [...oldValue, ""]);
  };

  const isLastInput = (anIndex: number): boolean => {
    if (inputs.length === anIndex + 1) return true;
    return false;
  };

  return (
    <Container>
      <main>
        <h1>Grocery App</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((value, index) => (
            <InputWrapper key={`${value}${index}`}>
              <div className="buttons" onClick={onAddInput}>
                {isLastInput(index) ? <MdAdd /> : null}
              </div>
              <Input
                placeholder="Digite seu produto aqui"
                onChange={(e) => onChangeInput(e.target.value, index)}
                onKeyDown={handleKeyDown}
                defaultValue={value}
              />
            </InputWrapper>
          ))}
          <button type="submit">
            {isLoading ? <LoadingDots /> : <span>Pesquisar</span>}
          </button>
        </form>
      </main>
    </Container>
  );
};
