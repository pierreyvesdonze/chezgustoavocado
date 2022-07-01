import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </>
));

const Reservation = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: `http://localhost:8000/api/reservation/add`,
            data: JSON.stringify(data),
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
        
        alert("Votre réservation est enregistrée ! Nous vous remercions !");
        navigate("/");
    };

    return (
        <>
            <h1>Réserver</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="reservation-form">
                <Input label="Nom" register={register} required />
                <br />
                <Input label="Téléphone" register={register} required />
                <br />
                <Select label="Nombre de convives" {...register("guests")} />
                <br />
                <Input label="Pour quand ?" register={register} required />  
                <input type="submit" value="Réserver" className="custom-btn"/>
            </form>
        </>
    );
};

export default Reservation;