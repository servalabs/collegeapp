"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Lottie from "react-lottie";
const Register = ({ ser, animationData }) => {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        //  data.location=position
        data.location = {
            coordinates: [position.latitude, position.longitude]
        }
        if (data.gender == null) {
            data.gender = "M"
        }
        const res = await ser(data);
        console.log(res)
        if (res[0]) {
            window.location.href = "/";
        } else {
            console.log("there was an error")
        }
        console.log(res)
    }


    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="container">
            <div className="lottie">
                <Lottie
                    className="lottie"
                    options={defaultOptions}
                    height={700}
                    width={1500}
                />
            </div>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-header">Sign Up</h1>
                <div className="input-container">
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your username."
                            {...register("name")}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter your email."
                            {...register("email")}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="number">Number</label>
                        <input
                            id="number"
                            type="text"
                            placeholder="Enter your number."
                            {...register("phone", {
                                minLength: {
                                    value: 10,
                                    message: "only 10 digits allowed.",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "only 10 digits allowed.",
                                },
                            })}
                            required
                        />
                        {errors.phone && (
                            <span className="error">{errors.phone.message}</span>
                        )}
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password."
                            {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: "Maximum six length require.",
                                },
                            })}
                            required
                        />
                        {errors.password && (
                            <span className="error">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="button">
                        <div>
                            <input id="male" type="radio" {...register('gender')} value="M" />
                            <label htmlFor="male">Male</label>
                        </div><div>
                            <input id="female" type="radio" {...register('gender')} value="F" />
                            <label htmlFor="female">Female</label>
                        </div>
                        <button>Submit</button>
                    </div>
                    <Link href="/login" type="button">


                        already user? Login

                    </Link>
                </div>
            </form>
        </div>
    );
}


export default Register
