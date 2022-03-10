import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import nprogress from "nprogress";
import React from "react";
import ImageViewer from "./ImageViewer";

function Sidebar({ handleSidebar }) {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    async function fetchImage() {
      nprogress.start();
      try {
        const response = await axios.get("/api/convert");
        setImages(response.data.file);
        nprogress.done();
      } catch (error) {
        nprogress.done();
        throw new Error(error);
      }
    }
    fetchImage();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-content">
          <h5 className="sidebar-title">
            <small> Files to be converted </small>
          </h5>
          <div className="sidebar-divider"></div>
          <div className="row" id="image-holder">
            {images.length === 0 ? (
              <h3>No task yet! Add Task.</h3>
            ) : (
              <ImageViewer images={images} />
            )}
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Sidebar;
