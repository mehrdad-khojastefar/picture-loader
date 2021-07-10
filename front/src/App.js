import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { images: "", url: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  async handleSubmit(event) {
    // console.log("submit: " + this.state.url);
    this.setState({ images: this.state.url });
    // console.log("state: " + this.state.url);

    await fetch("localhost:9000/testApi/" + this.state.url
    , { method: "GET" });
  }

  render() {
    return (
      <div className="App">
        <div className="card" style={{ width: "80%", marginTop: "2%" }}>
          <div className="card-body">
            <h5 className="card-title">Picture Loader</h5>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                className="rounded rounded-3 border border-info"
                style={{ width: "60%", height: "3rem" }}
                type="text"
                placeholder="Enter Your picture's URL"
                onChange={(e) => this.handleChange(e)}
              />
              <input
                type="submit"
                value="Add Image"
                className="btn btn-primary"
                style={{
                  marginBottom: ".2rem",
                  marginLeft: "1rem",
                  height: "3.2rem",
                }}
              />
            </form>
            <p className="fw-bolder">
              Enter your picture's link and see the magic :)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
