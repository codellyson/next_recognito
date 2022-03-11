import axios from "axios";
import Image from "next/image";
import nprogress from "nprogress";
import React from "react";
import Snackbar from "node-snackbar";
import { localStorage } from "../functions/localStorage";

function ImageViewer({ images }) {
  const handleConversion = async (id, target) => {
    try {
      if (id === target.getAttribute("data-id")) {
        target.classList.add("spin");
        const response = await axios.post("/api/conversion", { id: id });
        target.classList.remove("spin");
        localStorage(response.data.result, "recognito_result");
        window.location.href = "#modal-2";
        Snackbar.show({
          text: response.data.message + "Click on refresh to see the result",
          duration: 2000,
          pos: "top-center",
        });
      }
    } catch (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
        actionText: "Refresh",
        pos: "top-center",
        onActionClick: function () {
          window.location.reload(false);
        },
      });
    }
  };
  const handleDeletion = async (id) => {
    try {
      nprogress.start();
      const response = await axios.delete(`/api/convert/${id}`);
      nprogress.done();
      Snackbar.show({
        text: response.data.message,
        duration: Snackbar.LENGTH_LONG,
        actionText: "Dismiss",
        pos: "top-center",
        onActionClick: function () {
          window.location.reload(false);
        },
      });
    } catch (error) {
      nprogress.done();
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
        actionText: "Refresh",
        pos: "top-center",
        onActionClick: function () {
          window.location.reload(false);
        },
      });
    }
  };

  return (
    <>
      <div className="sticky-alert"></div>
      {images.length === 0 ? (
        <h3>No task yet! Add Task.</h3>
      ) : (
        images.map((image, index) => (
          <div className="image-container" key={index}>
            <div className="image-container__inner">
              <Image
                src={image?.filePath}
                alt=""
                height={"100%"}
                width={150}
                layout="fixed"
              />
            </div>
            <span className="">
              <i
                className="fa fa-trash remove-btn"
                aria-hidden="true"
                data-id={image._id}
                onClick={(e) =>
                  handleDeletion(e.target.getAttribute("data-id"))
                }
              ></i>
            </span>
            <i
              className={`fas fa-cog  fa-3x fa-fw single-convert-btn`}
              data-id={image._id}
              onClick={(e) =>
                handleConversion(e.target.getAttribute("data-id"), e.target)
              }
            ></i>
          </div>
        ))
      )}
    </>
  );
}

export default ImageViewer;
