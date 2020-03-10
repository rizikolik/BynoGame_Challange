import React from "react";


class Card extends React.Component{
    constructor(props){
    super(props);
    this.state={
        data:[]
    }
    }
    componentDidMount() {
        fetch(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=7gTfQoM9v41twf39OxS7sgAZf8ILQ8np5c9eKa66')
            .then((res)=>res.json())
            .then((data)=>
            {
             this.setState({
               data
             })
          });
        
         
        }
    render(){
       
        const items = this.state.data.photos
        console.log(typeof items)

        return(
<div className="cardHolder">
<ul>

</ul>
</div>
        )
    }
}
export default (Card);