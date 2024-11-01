/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/Page1/NavBar/NavBar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import CustomCursor from "./components/Cursor/Cursor";
import { CursorProvider } from "./components/Cursor/CursorContext";
import CustomCursorMain from './components/Cursor/CustomCursorMain';

const App = () => {
  return (
    <CursorProvider>
      <div>
        <CustomCursorMain />
        <CustomCursor />
        <NavBar />
        <Routes>
          <Route path="/React-Career-Path/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </div>
    </CursorProvider>
  );
};

export default App;
