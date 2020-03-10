import React from "react";

class ApiData extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }

  
  render() {
    return <div className="head">
{this.state.data.title}
    </div>;
  }
}
export default ApiData;
