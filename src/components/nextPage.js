import { Component } from "react";
import "./crosswords.css";

export class NextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>
          Hi Shweta. Congratulations, you have cleared the basic memory test, xD.
        </h1>
        <div style={{
            textAlign: 'center',
            lineHeight: "26px"
        }}>
          Now, to move ahead, download this file here. <br />
          And check your email for next steps.
        </div>

        <button
          style={{
            backgroundColor: this.state.count > 0 ? "#6979F860" : "#6979F8",
            color: "white",
            outline: "none",
            border: "none",
            padding: "10px 12px",
            borderRadius: 4,
            marginTop: 12,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="/File.pdf"
            download
          >
            Download
          </a>
        </button>

        <div style={{
            marginTop: 40
        }}>
            If you didn't receive the email, click <span onClick={this.props.nextPage} style={{color: "#6979F8", cursor: 'pointer'}}>here</span>
        </div>
      </div>
    );
  }
}
