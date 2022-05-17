import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Homepage.scss";

const Homepage = () => {
    const initialValues = {
        email: "",
        password: "",
        confirmpass: "",
        username: "",
        number: "",
    };

    const [formValues, setFormValues] = useState(initialValues);

    const [formErrors, setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors, formValues, isSubmit]);

    //-----------------Validation----------------

    const navigate = useNavigate();
    const validate = (values) => {
        const errors = {};
        //  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const regex1 = new RegExp(
            "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
        );

        let success = true;

        if (!values.username) {
            errors.username = "Fullname is required";
            success = false;
        }
        if (!values.email) {
            errors.email = "It should be a valid email address!";
            success = false;
        } else if (!regex1.test(values.email)) {
            errors.email = "Entered valid email";
            success = false;
        }

        if (!values.password) {
            errors.password = "Enter your password";
            success = false;
        }
        if (!values.confirmpass) {
            errors.confirmpass = "confirm your password";
            success = false;
        }
        if (values.password !== values.confirmpass) {
            errors.confirmpass = "passwords don't match ";
            success = false;
        }

        if (!values.number) {
            errors.number = "number is required";
            success = false;
        }

        if (success) {
            navigate("/chart");
        }

        // if (
        //     values.username === "" ||
        //     values.email === "" ||
        //     values.password === "" ||
        //     values.number === ""
        // ) {
        //     alert("fields are required");
        // } else {
        //     navigate("/chart");
        // }
        return errors;
    };

    return (
        <div>
            <div className="row">
                <div className="left">
                    <img src="/unnamed.png" alt="" />
                </div>
                <div className="container">
                    <form>
                        <div className="form-input">
                            <h1>Create an account</h1>
                            <div className="field">
                                <label htmlFor="">Your Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <p> {formErrors.email}</p>
                            <div className="field">
                                <label htmlFor="">Your Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.password}</p>
                            <div className="field">
                                <label htmlFor="">Confirm Your Password</label>
                                <input
                                    type="password"
                                    name="confirmpass"
                                    value={formValues.confirmpass}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.confirmpass}</p>
                            <div className="field">
                                <label htmlFor="">Your Fullname</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.username}</p>
                            <div className="field">
                                <label htmlFor="">Your Phone Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    pattern="[7-9]{1}[0-9]{9}"
                                    value={formValues.number}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.number}</p>
                            <div className="checkbox">
                                <input type="checkbox" id="square" />
                                <label htmlFor="square">
                                    I read and agree Terms and Conditions
                                </label>
                            </div>

                            {
                                <button onClick={handleSubmit}>
                                    Create account
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
