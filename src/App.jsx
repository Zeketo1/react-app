import ListGroup from "./components/ListGroup";
import StudentData from "./components/StudentData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Playground from "./components/Playground";
import { students } from "./data";
import PrivateRoute from "./routes/PrivateRoute";
import Registration from "./components/Registration";
import Users from "./components/Users";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/students"
                    element={<ListGroup list={students} title="Student" />}
                />
                <Route path="/students/:id" element={<StudentData />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/users" element={<Users />} />

                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route index element={<Dashboard />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
