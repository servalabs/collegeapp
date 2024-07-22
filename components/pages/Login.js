"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import "@/app/page.css";


export default function Login({ ser }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // TODO: Make API call to authenticate user and handle response
        const res = await ser(data);
        console.log(res);
        if (res[0]) {
            // location.replace('/')
        } else {
            alert('Invalid credentials')
        }
        console.log(res)
    }

    return (
        <div className="container">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-header">Sign In</h1>
                <div className="input-container">
                    <div className="input">
                        <label htmlFor="name">Email</label>
                        <input
                            id="name"
                            type="email"
                            placeholder="Enter your email."
                            {...register("email")}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password."
                            {...register("password", {
                                minLength: { value: 6, message: "Maximum six length require." },
                            })}
                            required
                        />
                        {errors.password && (
                            <span className="error">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="button">
                        <button>Submit</button>
                    </div>
                    <Link href="/register" type="button">


                        new user? register

                    </Link>
                </div>
            </form>
        </div>
    );
}