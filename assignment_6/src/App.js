import logo from './logo.svg';
import './App.css';
import Dropdownmenu from './component/dropdown';
import {QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
     <Dropdownmenu/>
    </QueryClientProvider>     
    
  );
}

export default App;
