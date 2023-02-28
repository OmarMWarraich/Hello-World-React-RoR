import { Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";
import React from "react";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>
    );
};

export default App;