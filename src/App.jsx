import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Post from "./pages/Post/Post";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreatePost from "./pages/CreatePost/CreatePost";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditPost from "./pages/EditPost/EditPost";
import NotFound from "./pages/NotFound/NotFound";

// context
import { AuthProvider } from "./context/AuthContext";


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }




  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
      
          <Navbar />
          <div className="container">
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/post/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/post/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;