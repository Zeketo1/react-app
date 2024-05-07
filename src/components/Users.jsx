import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
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
    }, []);

    const handleDelete = (user) => {
        const newUsers = users.filter((userN) => userN.id != user.id);
        setUsers(newUsers);
        // --Deleting data.........currenting not working for an unknown reason
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
    };

    const handleNewUser = () => {
        const newUser = {
            id: users.length + 1,
            name: "John Smith",
            email: "johnsmith24@gmail.com",
            phone: "1-705-123-4047",
        };

        axios
            .post("https://jsonplaceholder.typicode.com/users", newUser)
            .then((res) => {
                console.log(res.data);
                setUsers([newUser, ...users]);
            });
    };

    const handleUpdate = (user) => {
        const newUser = { ...user, name: "Luz Zeketo" };
        const updatedUsers = users.map((newUser) => {
            if (newUser.id == user.id) {
                console.log(newUser);
                return { ...newUser, name: "Donald Wills" };
            } else {
                return newUser;
            }
        });

        setUsers(updatedUsers);

        const newUserData = { ...user, name: "Donald Wills" };

        axios
            .patch(
                `https://jsonplaceholder.typicode.com/users/${user.id}`,
                newUserData
            )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            <button onClick={handleNewUser}>Add user</button>
            {users.length > 0 && (
                <table cellSpacing={0}>
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
                            <tr key={user?.id}>
                                <td>{user?.id}</td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="update-btn"
                                        onClick={() => handleUpdate(user)}
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Users;
