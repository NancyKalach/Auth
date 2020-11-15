import React from 'react';

class TopsIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllTops();
    }
    
    render(){
        const {tops} = this.props;

        return(
            <ul className="items-index">
                { tops.map(top => <li key={top.id}> 
                    <img src={top.photo_url}  /> 
                    {detail}
                    </li>)   
                }
            </ul>
        )
    }
}

export default TopsIndex;