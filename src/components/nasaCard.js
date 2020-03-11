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
			console.log(data.photos)
             this.setState({
             data :data.photos
             })
          });
        
         
        }
    render(){
       const items=this.state.data.map((ele)=>{
		   return (
		   <div className="card">
			   <div></div>
				     <div>{ele.camera.full_name}</div>
				    <img  src={ele.img_src} />
				    
				   
			   </div>
		   )
	   })
    

        return(
<div className="cardHolder">
{items}
</div>
        )
    }
}
export default (Card);