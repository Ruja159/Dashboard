import React from 'react';
import './App.css';
import CustomRoutes from "./routes/CustomRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <CustomRoutes />
    </div>
  );
}

export default App;
