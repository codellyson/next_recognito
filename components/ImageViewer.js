import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import nprogress from "nprogress";
import React from "react";
import Alert from "./Alert";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { localStorage } from "../functions/localStorage";

function ImageViewer({ images }) {
  const handleConversion = async (id, target) => {
    try {
      if (id === target.getAttribute("data-id")) {
        target.classList.add("spin");
        const response = await axios.post("/api/conversion", { id: id });
        alert(response.data.message);
        target.classList.remove("spin");
        localStorage(response.data.result, "recognito_result");
      }
    } catch (error) {
      alert(error);
      window.location.reload();
    }
  };
  const handleDeletion = async (id) => {
    try {
      nprogress.start();
      const response = await axios.delete(`/api/convert/${id}`);
      nprogress.done();
      window.location.reload();
    } catch (error) {
      nprogress.done();
      alert(error);
      window.location.reload();
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
