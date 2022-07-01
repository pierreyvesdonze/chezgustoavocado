import React from 'react';
import BasicButton from './BasicButton';

const Specialities = () => {

    return (
        <div className='specialities'>
            <div className='flex'>
                <div className='left'>
                    <h1>
                        Notre spécialité ? L'avocat !
                    </h1>
                </div>
                <div className='right'></div>
            </div>
            <BasicButton />
        </div>
    )
}

export default Specialities;