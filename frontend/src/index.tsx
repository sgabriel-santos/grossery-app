import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactModal from 'react-modal';
import App from './App';

const queryClient = new QueryClient();

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
