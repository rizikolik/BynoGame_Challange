import React from "react";

class ApiData extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }

  componentDidMount() {
  fetch(
      'https://api.nasa.gov/planetary/apod?api_key=7gTfQoM9v41twf39OxS7sgAZf8ILQ8np5c9eKa66')
      .then((res)=>res.json())
      .then((data)=>
      {
       this.setState({
         data
       })
    });
   
  }
  render() {
    return <div className="head">
{this.state.data.title}
    </div>;
  }
}
export default ApiData;
