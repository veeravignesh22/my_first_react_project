import React from 'react';


class Card extends React.Component {
    render(){
        const {data} = this.props;
        return(
            <div>
            {
                  data.map((item, index) =>(
                  <div className="card" key={index} >
                  <img src={item.src} alt=""/>  
                  <div> 
                  <h4>{item.title}</h4> 
                  </div>                       
                  </div>
                  ))
            }
            </div>
        );
    };
}

export default Card;