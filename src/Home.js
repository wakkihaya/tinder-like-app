import React from 'react';
import './Home.scss';


const People = (userIndex) =>{
    const users = require('./user_sample.json');
    const index = userIndex.userIndex;

    return(
        <div className="people">
            <img src={users[index].image} className="people--image" />
            <div className="people--name">
                {users[index].name}
            </div>
            <div className="people--age">
                {users[index].age}
            </div>
        </div>
    )
}

const Home = () =>{

    const[index, setIndex] = React.useState(0);

    React.useEffect(() =>{
        console.log(index, "番目")
    })

    return (
            <div id="app">
                <People
                    userIndex={index}>
                </People>
                <div id="control">
                    <div className="button no"  onClick={()=>setIndex( index + 1)}>
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button info">
                        <a href="#" className="trigger"></a>
                    </div>
                    <div className="button yes" onClick={() =>setIndex(index + 1)}>
                        <a href="#" className="trigger"></a>
                    </div>
                </div>
            </div>
    );
}

export default Home;
