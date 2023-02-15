import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Navbar from "./components/navbar.js";
import Courses from "./courses.js";
import CoursePage from "./coursePage.js";

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/courses" element={<Courses />} />

                    <Route exact path="/courses/:id" element={<CoursePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
