import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Add from './pages/Add';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from './Context';



function App() {
  return (
    <>
      <AppContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
        <Toaster position="top-center" reverseOrder={false} />
      </AppContextProvider>
    </>
  );
}

export default App;
