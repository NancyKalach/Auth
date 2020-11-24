import React from 'react';

class Home extends React.Component{

    render(){
        const home = window.home;
        const home2 = window.home2;
        const home3 = window.home3;
        const home4 = window.home4;
        return (
            
            <div>

                <div>
                    <img src={home} className="home"/>
                    <img src={home2} className="home2" />
                    <img src={home3} className="home3" />
                    <img src={home4} className="home4" />
                </div>

            </div>
        )
    }
}

export default Home;