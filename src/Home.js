import React from 'react';
import './Home.scss';


const People = () =>{
    const users = require('./user_sample.json');

    return(
        <div className="people">
            <img src={users[0].image} className="people--image" />
            <div className="people--name">
                {users[0].name}
            </div>
            <div className="people--age">
                {users[0].age}
            </div>
        </div>
    )
}

const Home = () =>{


    return (
            <div id="app">
                <People/>
                <div id="control">
                    <div className="button no">
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button info">
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button yes">
                        <a href="#" className="trigger"></a>
                    </div>
                </div>
            </div>
    );
}

export default Home;
