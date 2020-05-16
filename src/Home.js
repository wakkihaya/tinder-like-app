import React, {useState} from 'react';
import './Home.scss';
import Cards, { Card } from "react-swipe-card";




const People = ({userIndex, isYesPushed, isNoPushed,isActiveDesc,onChangeDescActive, onChangeDescInactive}) =>{
    const users = require('./user_sample.json');
    const numOfUsers = users.length;

    return(
        <div className="container">
            <div className={'people' + ' ' + (isYesPushed ? 'rotate-right': '') + (isNoPushed ? 'rotate-left': '')}>
                {userIndex  < numOfUsers && (
                    <>
                        {!isActiveDesc &&(
                            <img src={users[userIndex].image} className="people--image" />
                        )}
                        {isActiveDesc &&(
                            <div className="people--mask">
                                <img src={users[userIndex].image} className="people--image" />
                                <div className="people--mask-bg">
                                </div>
                                <div className="people--mask-close-button" onClick={onChangeDescInactive}>
                                    ✕
                                </div>
                                <div className="people--mask-desc">
                                    {users[userIndex].description}
                                </div>
                            </div>
                        )}
                    <div className="people--info" onClick={onChangeDescActive}>
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
    const[isActiveDesc, setIsActiveDesc] = useState(false);

    const cardToRight = () =>{
        setIsYesPushed(true);
        setTimeout(()=> {
            setIsYesPushed(false);
            setIndex(index + 1);
            setIsActiveDesc(false)}
            ,400);
    };

    const cardToLeft = () =>{
        setIsNoPushed(true);
        setTimeout(()=> {
                setIsNoPushed(false);
                setIndex(index + 1);
                setIsActiveDesc(false)}
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
                            isActiveDesc={isActiveDesc}
                            onChangeDescActive ={()=>{
                                setIsActiveDesc(true);
                            }}
                            onChangeDescInactive = {()=>{
                                setIsActiveDesc(false);
                            }}
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
