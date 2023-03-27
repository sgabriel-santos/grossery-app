import { GlobalStyle } from './global/styles';
import { SearchProvider } from './hooks/useSearch';
import { ThemeModeProvider } from './hooks/useThemeMode';
import { SystemRoutes } from './routes';

function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <SearchProvider>
        <SystemRoutes />
      </SearchProvider>
    </ThemeModeProvider>
  );
}

export default App;
