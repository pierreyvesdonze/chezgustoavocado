import React from 'react';
import ButtonReservation from './ButtonReservation';
import ButtonCommand from './ButtonCommand';

const Home = () => (
    <div className='home'>
        <h1 className='main-title'>Bienvenue chez Gusto Avocado</h1>
        <ButtonReservation />
        <br />
        <ButtonCommand />
    </div>
)

export default Home;