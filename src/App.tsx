import { ThemeProvider } from 'next-themes';
import Home from '@/pages/Home';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Home />
    </ThemeProvider>
  );
}

export default App;
