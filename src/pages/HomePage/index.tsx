import React from 'react';
import Header from '../../components/Header';


const HomePage = () => (
    <>
        <Header active="map" />
        <form onSubmit={() => {}}>
            <label htmlFor="to">Куда едем? </label>
            <input id="ещ" type="password" name="password" size={28} />
            <button type="submit">Log in</button>
        </form>
    </>
);

export default HomePage;
