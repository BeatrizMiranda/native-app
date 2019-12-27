import React from 'react';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import ThemeContextProvider from './Contexts/ThemeContext'
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

        <ThemeContextProvider>

          <NavBar />
          <BookList />
          <ThemeToggle />

        </ThemeContextProvider>

      </AuthContextProvider>
    </div>
  );
}
export default App;
