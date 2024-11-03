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
      <div className="overflow-hidden">
        <CustomCursorMain />
        <CustomCursor />

        {/* Routes with NavBar */}
        <Routes>
          <Route
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
            path="/React-Career-Path/"
          />
          <Route
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
            path="/"
          />
          <Route
            element={
              <>
                <NavBar />
                <About />
              </>
            }
            path="/about"
          />
          <Route
            element={
              <>
                <NavBar />
                <Services />
              </>
            }
            path="/services"
          />
          <Route
            element={
              <>
                <NavBar />
                <Contact />
              </>
            }
            path="/contact"
          />
          <Route
            element={
              <>
                <NavBar />
                <Faq />
              </>
            }
            path="/faq"
          />
          <Route
            element={
              <>
                <NavBar />
                <Blog />
              </>
            }
            path="/blog"
          />

          {/* Routes without NavBar */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </div>
    </CursorProvider>
  );
};

export default App;
