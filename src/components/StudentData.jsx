import { useParams } from "react-router-dom";
import { students } from "../data";

const StudentData = () => {
    const { id } = useParams();

    const studentData = students.find((student) => student.id == id);

    return (
        <div
            style={{
                margin: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <p>{studentData.firstName}</p>
            <p>{studentData.lastName}</p>
            <p>{studentData.age}</p>
            <p>{studentData.state}</p>
        </div>
    );
};

export default StudentData;
