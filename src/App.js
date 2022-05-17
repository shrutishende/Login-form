import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Homepage from "./components/Homepage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/chart" element={<Chart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
