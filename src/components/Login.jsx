import React, { useRef, useState } from "react";
import "../styles/Login.css";

const Login = () => {
    const age = useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);

    const [user2, setUser2] = useState({
        firstName: "",
        lastName: "",
        age: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // const user = {
        //     firstname: firstname?.current.value,
        //     lastname: lastname?.current.value,
        //     age: age?.current.value,
        // };
        console.log(user2);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First-Name</label>
                    <input
                        type="text"
                        id="firstname"
                        onChange={(event) =>
                            setUser2({
                                ...user2,
                                firstName: event.target.value,
                            })
                        }
                    />
                </div>

                <br />
                <div>
                    <label htmlFor="lastname">Last-Name</label>
                    <input
                        type="text"
                        id="lastname"
                        onChange={(event) =>
                            setUser2({ ...user2, lastName: event.target.value })
                        }
                    />
                </div>

                <br />
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        id="age"
                        onChange={(event) =>
                            setUser2({ ...user2, age: event.target.value })
                        }
                    />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;
