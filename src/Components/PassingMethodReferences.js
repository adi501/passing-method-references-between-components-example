import React, { Component } from "react";
import Person from "./Person";

class PassingMethodReferences extends Component {
  state = {
    Person: [
      { name: "adi", age: 29 },
      { name: "balu", age: 30 },
      { name: "krishna", age: 28 }
    ],
    otherState: "some other value"
  };
  switchNameHandler = () => {
    this.setState({
      Person: [
        { name: "jc adi", age: 29 },
        { name: "balu", age: 30 },
        { name: "krishna", age: 28 }
      ]
    });
  };
  render() {
    return (
      <div>
        <p>Passing Method References Between Components Example</p>
        <Person
          name={this.state.Person[0].name}
          age={this.state.Person[0].age}
        />
        <Person
          name={this.state.Person[1].name}
          age={this.state.Person[1].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.Person[2].name}
          age={this.state.Person[2].age}
        />
      </div>
    );
  }
}
export default PassingMethodReferences;
