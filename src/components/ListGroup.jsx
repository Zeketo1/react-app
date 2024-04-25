import { useState } from "react";
import "../styles/ListGroup.css";
import { useNavigate } from "react-router-dom";

const ListGroup = ({ list, title }) => {
    // Hooks -useState
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const navigate = useNavigate();

    const handleClick = (index, id) => {
        setSelectedIndex(index);
        navigate(`/students/${id}`);
    };

    return (
        <div className="listgroup-container">
            <h2>{title} List</h2>
            {list.length === 0 && <p>No student Data</p>}
            <ul className="list">
                {list.map((student, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(index, student.id)}
                        className={selectedIndex === index ? "active" : null}
                    >
                        {student.firstName} {student.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGroup;
