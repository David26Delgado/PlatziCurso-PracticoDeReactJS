import React from "react";

class Statefull extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: "Hello World"
    };
  }

  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Statefull;
