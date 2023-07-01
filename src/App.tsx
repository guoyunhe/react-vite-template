import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress, CssBaseline } from '@mui/material';
import { DualThemeProvider } from 'mui-palette-mode';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import LanguageEffects from './components/language-effects';
import router from './router';
import { darkTheme, lightTheme } from './themes';

export default function App() {
  return (
    <Suspense
      fallback={
        <CircularProgress
          size={48}
          sx={{
            display: 'block',
            position: 'fixed',
            left: '50%',
            top: '50%',
            m: -3,
          }}
        />
      }
    >
      <DualThemeProvider lightTheme={lightTheme} darkTheme={darkTheme} defaultPaletteMode="auto">
        <AuthProvider>
          <CssBaseline />
          <LanguageEffects />
          <RouterProvider router={router} />
        </AuthProvider>
      </DualThemeProvider>
    </Suspense>
  );
}
