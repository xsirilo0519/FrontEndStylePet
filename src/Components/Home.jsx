import React from 'react';
import home from'../assets/home.jpg';

function Home() {
    return (
        <div className="NormalPage">
            <img style={{borderRadius:1000}} src={home} alt="home" />
            <p className="Logo-Letra">Style Pet</p>
        </div>
    );
}

export default Home;