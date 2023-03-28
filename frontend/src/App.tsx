import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./global/styles";
import { SearchProvider } from "./hooks/useSearch";
import { ThemeModeProvider } from "./hooks/useThemeMode";
import { SystemRoutes } from "./routes";

function App() {
  return (
    <ThemeModeProvider>
      <ToastContainer />
      <GlobalStyle />
      <SearchProvider>
        <SystemRoutes />
      </SearchProvider>
    </ThemeModeProvider>
  );
}

export default App;
