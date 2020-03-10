import React from "react";

class ApiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    console.log("jbjdbfdsbfsb");
    fetch(
      "api.openweathermap.org/data/2.5/weather?q={Istanbul}&appid={8aa3c4ffb40dc9218a7e46d32f2fe2ff}"
    )
      .then(response => {
        response.text();
        console.log(response.body);
      })
      .then(api => {
        console.log(api);
        this.setState = {
          data: api
        };
      });
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}
export default ApiData;
