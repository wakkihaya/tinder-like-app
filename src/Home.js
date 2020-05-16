import React from 'react';
import './Home.scss';
import Cards, { Card } from "react-swipe-card";




const People = ({userIndex, isYesPushed, isNoPushed}) =>{
    const users = require('./user_sample.json');
    const numOfUsers = users.length;

    return(
        <div className="container">
            <div className={'people' + ' ' + (isYesPushed ? 'rotate-right': '') + (isNoPushed ? 'rotate-left': '')}>
                {userIndex  < numOfUsers && (
                    <>
                    <img src={users[userIndex].image} className="people--image" />
                    <div className="people--info">
                        <div className="people--info-name">
                            {users[userIndex].name}
                        </div>
                        <div className="people--info-age">
                            {users[userIndex].age}
                        </div>
                    </div>
                    </>
                )}
                {userIndex >= numOfUsers && (
                    <div className="people--none">
                        No more users
                    </div>
                )}
            </div>
        </div>
    )
};

const Home = () =>{

    const[index, setIndex] = React.useState(0);
    const[isYesPushed, setIsYesPushed] = React.useState(false);
    const[isNoPushed, setIsNoPushed] = React.useState(false);

    const cardToRight = () =>{
        setIsYesPushed(true);
        setTimeout(()=> {
            setIsYesPushed(false);
            setIndex(index + 1);}
            ,400);
    };

    const cardToLeft = () =>{
        setIsNoPushed(true);
        setTimeout(()=> {
                setIsNoPushed(false);
                setIndex(index + 1);}
            ,400);
    };

    return (
            <div id="app">
                <div className="header">
                    Pokemonder
                </div>
                        <People
                            userIndex={index}
                            isYesPushed={isYesPushed}
                            isNoPushed={isNoPushed}
                        >
                        </People>
                <div id="control">
                    <div className="button">
                        <div className="button--no"  onClick={()=>cardToLeft()}>
                            <a href="#" className="trigger"></a>
                        </div>
                        <div className="button--yes" onClick={() =>cardToRight()}>
                            <a href="#" className="trigger"></a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Home;
