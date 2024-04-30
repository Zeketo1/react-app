import React from "react";
import "../styles/Login.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Registration = () => {
    const schema = yup.object({
        firstname: yup.string().required("Firstname is required"),
        lastname: yup
            .string()
            .required("Lastname is required")
            .min(3, "Must have at least three character "),

        email: yup
            .string()
            .email("Enter a valid Email address")
            .required("Email is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <div>
                        <label htmlFor="email">First-Name</label>
                        <input
                            type="text"
                            id="first-name"
                            {...register("firstname")}
                        />
                    </div>
                    {errors.firstname && (
                        <small>{errors.firstname.message}</small>
                    )}
                </div>

                <div>
                    <div>
                        <label htmlFor="email">Last-Name</label>
                        <input
                            type="text"
                            id="lastname"
                            {...register("lastname")}
                        />
                    </div>
                    {errors.lastname && (
                        <small>{errors.lastname.message}</small>
                    )}
                </div>

                <div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" {...register("email")} />
                    </div>
                    {errors.email && <small>{errors.email.message}</small>}
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Registration;
