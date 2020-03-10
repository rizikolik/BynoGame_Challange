import React from "react";


class Card extends React.Component{
    constructor(props){
    super(props);
    this.state={
        data:[]
    }
    }
    render(){
        return(
<div className="cardHolder">
<div className="card-header">
    <h2>{this.state.data.title}</h2>
</div>
</div>
        )
    }
}
export default (Card);