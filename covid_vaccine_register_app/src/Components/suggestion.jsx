import React, { Component } from "react";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import "./Suggest.css";
class feedback extends Component {
  render() {
    // See all customizable props below
    return <Feedback projectId="609e22a273982d000468694e" />;
  }
}
Feedback.defaultProps = {
  email: true,
  emailRequired: true,
  emailDefaultValue: "",
  projectName: "",
  subProject: "",
  primaryColor: "red",
  textColor: "white",
  hoverBorderColor: "#000000",
  postSubmitButtonMsg: "Thanks!",
  submitButtonMsg: "Suggestion",
  feedbackTypes: ["general", "Your Support", "idea"],
  zIndex: "100000000",
};

export default feedback;
