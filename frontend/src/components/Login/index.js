import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const formSchema = Yup.object().shape({
        password: Yup.string()
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    const onSubmit = data => {
        alert(JSON.stringify(data))
        axios({
            method: 'post',
            url: `http://localhost:8000/api/login`,
            data: JSON.stringify(data)
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })

        navigate("/");
    }
    return (
        <>
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <label>Email</label>
                <input {...register("username")} />

                <br />
                <label>Mot de passe</label>
                <input type="password" {...register("password", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="custom-btn" />
            </form>
        </>
    );
}