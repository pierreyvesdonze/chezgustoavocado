import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const Input = ({ label, register, required }) => (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );

    let navigate = useNavigate();

    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Le mot de passe est requis')
            .min(6, 'Le mot de passe doit faire au moins 6 caractères'),
        confirmPwd: Yup.string()
            .required('Le mot de passe est requis')
            .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    function onSubmit(data) {
        axios({
            method: 'post',
            url: `http://localhost:8000/api/register`,
            data: JSON.stringify(data)
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })

        alert("Votre réservation est enregistrée ! Nous vous remercions !");
        navigate("/");
    }
    return (
        <div>
            <h1>Créer un compte</h1>
            <form
                onSubmit={handleSubmit(onSubmit)} className="registration-form"
            >
                <Input label="Email" register={register} required />
                <br />
                <label>Mot de passe</label>
                <input
                    name="password"
                    type="password"
                    {...register('password')}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
                <br />
                <label>Confirmation du mot de passe</label>
                <input
                    name="confirmPwd"
                    type="password"
                    {...register('confirmPwd')}
                    className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.confirmPwd?.message}</div>


                <button type="submit" className="custom-btn">
                    Créer un compte
                </button>

            </form>
        </div>
    )
}