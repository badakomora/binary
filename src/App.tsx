import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import { AppWrap,  PageContainer } from './App.Elements';
import GameCon from './components/GameCon';
import theme from './theme';

const thm= {...createTheme(), theme}

function App() {
  return (
    <ThemeProvider theme={thm}>
    <PageContainer>
        <AppWrap>
            <GameCon/>
        </AppWrap>
    </PageContainer>
    </ThemeProvider>
  
  );
}

export default App;
