import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyImage from './assets/images/icons8-loading-100.png';

// Lazy load the Homeparent component
const Homeparent = lazy(() => import("./Components/Home-Page/Home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <img src={LazyImage} alt="Loading..." />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homeparent />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
