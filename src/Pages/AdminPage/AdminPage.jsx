import { Container } from "reactstrap";
import React, { Component } from "react";
import DragAndDropUpload from "../../components/DragAndDropUpload/DragAndDropUpload";
import IntroDataContext from "../../IntroDataContext";

export class AdminPage extends Component {
  renderCsvUploader() {
    return (
      <React.Fragment>
        <IntroDataContext.Consumer>
          {({ updateIntros }) => (
            <DragAndDropUpload
              updateIntros={updateIntros}
              history={this.props.history}
            />
          )}
        </IntroDataContext.Consumer>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Container
        className="mx-auto text-center mt-5"
        style={{ width: "100vw" }}
      >
        <h1 className="text-info font-weight-bolder mb4">Admin Panel</h1>
        {process.env.REACT_APP_FEATURE_TOGGLE_UPLOADER === "true" &&
          this.renderCsvUploader()}
      </Container>
    );
  }
}

export default AdminPage;
