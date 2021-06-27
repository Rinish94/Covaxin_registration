import "./App.css";
import { Link, Route } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import Feedback from "feeder-react-feedback";
import Help from "./Components/Help";
import City from "./Components/City";

function App() {
  return (
    <div className="App">
      <div className="Top">
        <div>
          <img
            src="https://prod-cdn.preprod.co-vin.in/assets/images/covid19logo.jpg"
            alt="logo"
            height="55px"
            width="25%"
          />

          <h4 className="rino">
            {" "}
            <a target="_target" href="https://github.com/Rinish94/">
              {" "}
              <ReactTypingEffect text={["Created By - Rinish Ojha"]} />
            </a>
          </h4>
        </div>
        <img
          src="https://www.cowin.gov.in/assets/images/largest-vaccine-banner.jpg"
          alt="banner"
          height="50%"
          width="100%"
        />
        <h3>
          {" "}
          <span style={{ fontWeight: "bolder" }}>LUCKNOW</span> <br />
          Check your nearest vaccination center and slots availability.
        </h3>
        <Link to="/">
          <button
            style={{
              borderRadius: "15px",
              border: "none",
              padding: "8px",
              marginRight: "9px",
            }}
          >
            Home
          </button>
        </Link>
        <Link to="/help">
          <button
            style={{
              borderRadius: "15px",
              border: "none",
              padding: "8px",
              marginRight: "9px",
            }}
          >
            Covid Helpline
          </button>
        </Link>

        <div>
          <a target="_blank" href="https://selfregistration.cowin.gov.in/">
            Click For Registration
          </a>{" "}
          <br />
        </div>
        <p>
          कृपया प्रतिक्रिया दें इस पृष्ठ के नीचे दाईं ओर काले बटन पर क्लिक करके
        </p>

        <hr />
        <div style={{ marginTop: "30px" }}></div>
      </div>
      <Route path="/" exact component={City} />
      <Route path="/help"  exact component={Help}/>
     <Feedback/>
    </div>
  );
}

export default App;
