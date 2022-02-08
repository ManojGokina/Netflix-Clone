import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen/LoginScreen";

function App() {
  // const user = {
  //   name:"manoj"
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
