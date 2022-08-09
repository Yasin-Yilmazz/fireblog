import './App.css';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BlogContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BlogContextProvider>
  );
}

export default App;
