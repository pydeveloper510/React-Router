// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/deposit" element={<Deposit/>}></Route>
                    <Route path="/withdraw" element={<Withdraw/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;