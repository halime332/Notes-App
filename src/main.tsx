import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary:{
      main:"rgba(105,105,105)",
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={"Yükleniyor..."} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
           <App />
        </ThemeProvider>
      </PersistGate>
    </Provider >
  </StrictMode>,
);
