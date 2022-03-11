import axios from "axios";
import nprogress from "nprogress";
import React from "react";
import Router from "next/router";
import Snackbar from "node-snackbar";
function UploadForm() {
  const [files, setFiles] = React.useState(null);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFiles(files);
  };
  const handleSubmit = async () => {
    try {
      nprogress.start();
      setSubmitting(true);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("imageFile", files[i]);
      }
      const uploadResponse = await axios.post("/api/convert", formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setProgress(Math.floor((loaded * 100) / total));
        },
      });
      Snackbar.show({
        text: uploadResponse.data.message,
        duration: Snackbar.LENGTH_LONG,
        actionText: "Refresh",
        pos: "top-center",
        onActionClick: function () {
          window.location.reload(false);
        },
      });
      nprogress.done();
      setSubmitting(!isSubmitting);
    } catch (error) {
      nprogress.done();
      alert(error);
    }
  };
  return (
    <div className="card w-full w-md-half ">
      <div className="d-flex flex-column align-item-center">
        <div className="custom-file  text-center">
          <input
            type="file"
            id="multi-file-input-1"
            multiple={true}
            accept="image/*"
            name="imageFile"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <label htmlFor="multi-file-input-1" className="w-fullr">
            Choose images
          </label>
        </div>
        <button
          className="btn btn-primary w-full my-5"
          onClick={handleSubmit}
          disabled={!files === null ? true : false}
        >
          Submit
        </button>
        <br />
        {isSubmitting && (
          <div className="progress-group   my-5">
            <div className="progress h-25">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: progress + "%" }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress + "%"}{" "}
              </div>
            </div>
            <span className="progress-group-label">
              {progress === 100 && (
                <i className="fa fa-check-circle text-success font-size-16"></i>
              )}
              <span className="sr-only">Success</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
