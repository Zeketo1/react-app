import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Users.css";

const Users = () => {
    const [users, setUsers] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => setUsers(res.data))
    //         .catch((err) => setError(err.message));
    // }, []);

    // ------------ASYNC
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUsers(res.data);
                setIsLoading(false);
            };
            fetchData();
        } catch (err) {
            setError(err.message);
        }
    });

    return (
        <>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Full-Nmae</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Users;
