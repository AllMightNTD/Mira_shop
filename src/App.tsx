import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './styles/theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/api/react-query';
import { ToastContainer } from 'react-toastify';
import { Login } from './screens/Auth/Login';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <Login />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
