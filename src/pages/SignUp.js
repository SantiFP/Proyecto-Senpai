import React from 'react';
import { Header } from '../components/Header';
import { FormSignUp,FormTypeRadio } from '../components/Form';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


export const SignUp = () => {

    return ( 
        <>
            <div>
                <Header text="LOG IN" />
                <div className="mt-12 md:absolute md:top-24 md:w-2/5">
                    <FormSignUp placeHolder="Name" />
                    <FormSignUp placeHolder="Country" />
                    <FormSignUp placeHolder="Password" />
                    <FormSignUp placeHolder="Confirm Password" />
                </div>
                <FormTypeRadio />
                <div className="mb-24"><Link to='./login'><Button text="SIGN UP NOW" /></Link></div>
                <div className="mt-10 mb-5 font-medium text-sm  text-center" ><Footer /></div>
            </div>
        </>
    )
}