import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import ExerciceDetails from "./Pages/ExerciseDetails";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m={"auto"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciceDetails />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
// the other two are going to be pages because they contain a lot of components inside of them
export default App;
