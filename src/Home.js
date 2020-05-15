import React from 'react';
import './Home.scss';



const People = ({userIndex, isYesPushed}) =>{
    const users = require('./user_sample.json');
    const numOfUsers = users.length;

    return(
        <div className={'people' + ' ' + (isYesPushed ? 'rotate-right': '')}>
            {userIndex  < numOfUsers && (
                <>
                <img src={users[userIndex].image} className="people--image" />
                <div className="people--name">
                    {users[userIndex].name}
                </div>
                <div className="people--age">
                    {users[userIndex].age}
                </div>
                </>
            )}
            {userIndex >= numOfUsers && (
                <div className="people--none">
                    No more users
                </div>
            )}
        </div>
    )
};

const Home = () =>{

    const[index, setIndex] = React.useState(0);
    const[isYesPushed, setIsYesPushed] = React.useState(false);

    const cardToRight = () =>{
        setIsYesPushed(true);
        setTimeout(()=> {
            setIsYesPushed(false);
            setIndex(index + 1);}
            ,400);
    };

    return (
            <div id="app">
                <People
                    userIndex={index}
                    isYesPushed={isYesPushed}>
                </People>
                <div id="control">
                    <div className="button no"  onClick={()=>setIndex( index + 1)}>
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button info">
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button yes" onClick={() =>cardToRight()}>
                        <a href="#" className="trigger"></a>
                    </div>
                </div>
            </div>
    );
}

export default Home;
