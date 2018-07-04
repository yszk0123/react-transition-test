import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.css";

class App extends React.Component {
  state = { show: false };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <div className="Example">
          <div className={classNames("Container", { Fade: this.state.show })}>
            <div className="Box">123</div>
          </div>
        </div>
        <button onClick={this.toggle}>Fade</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
