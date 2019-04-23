import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Alert from "react-s-alert";
import axios from "axios";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:7890"
  : "https://auto-introspection-api.herokuapp.com";

const alertOpts = {
  effect: "genie",
  position: "top-right",
  timeout: 1500
};
const failedAlertOpts = {
  effect: "genie",
  position: "top-right",
  timeout: "none"
};

class DragAndDropUpload extends Component {
  constructor(props) {
    super(props);
  }

  handleOnDrop = async (acceptedFile, rejectedFiles) => {
    if (rejectedFiles.length > 1) {
      alert("You may only upload one file");
      return;
    }
    if (acceptedFile.length) {
      const formData = new FormData();
      formData.append("file", acceptedFile[0]);
      try {
        const res = await axios({
          method: "POST",
          url: `${getUrl}/upload`,
          data: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        });
        if (res.status !== 201) {
          Alert.error("File upload failed, please try again", failedAlertOpts);
        } else {
          Alert.success("Upload successful", alertOpts);
          window.setTimeout(() => {
            this.props.history.push("/");
          }, 1500);
        }
      } catch (error) {
        Alert.error(
          `File upload failed. ${error.response.data.message}`,
          failedAlertOpts
        );
        console.error(error);
      }
    } else {
      alert("only csv files accepted");
    }
  };

  render() {
    return (
      <div className="mt2">
        <Dropzone onDrop={this.handleOnDrop} accept=".csv" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <span {...getRootProps()}>
                <input {...getInputProps()} />
                <div
                  className="ba b--dashed b--light-silver pv4 center tc bw3 br-pill f4"
                  data-testid="uploader"
                >
                  <i className="fas fa-cloud-upload-alt fa-6x blue" />
                  <p>
                    <span className="fw6 pointer hover-blue">
                      Choose a file
                    </span>{" "}
                    or drag it here.
                  </p>
                </div>
              </span>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default DragAndDropUpload;
