import React, { useRef, useState } from "react";
import "../styles/Login.css";

const Login = () => {
    const age = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [user2, setUser2] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // const user = {
        //     email: email?.current.value,
        //     password: password?.current.value,
        //     age: age?.current.value,
        // };
        console.log(user2);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(event) =>
                            setUser2({
                                ...user2,
                                email: event.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        onChange={(event) =>
                            setUser2({ ...user2, password: event.target.value })
                        }
                    />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;
