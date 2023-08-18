import React from 'react'
import { observer } from 'mobx-react-lite';
import Login from '../users/Login';
import Guide from '../../components/Guide';
import Properties from '../../components/Properties';
import GetStarted from '../../components/GetStarted';
import Hero from '../../components/Hero';
import Companies from '../../components/Companies';
import Details from '../../components/Details';
import Footer from '../../components/Footer';

export default observer (function HomePage(){
    return(
        <>
        <Hero />
        <Companies />
        <Guide />
        <Properties />
        <Details />
        <GetStarted />
        <Footer />
        {/* <Login /> */}
        </>
    )
})


