import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

const TIMEOUT = 500;

class App extends React.Component {
  state = { show: false };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <div className="Example">
          <CSSTransition
            in={this.state.show}
            timeout={TIMEOUT}
            classNames="fade"
            mountOnEnter
            unmountOnExit
          >
            {state => (
              <div className="Container">
                <div className="List">
                  <div className="ListContent">123</div>
                </div>
                <div className="ListFooter" />
              </div>
            )}
          </CSSTransition>
        </div>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
