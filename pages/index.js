import React from "react";
import dynamic from "next/dynamic";
import InstructionBoard from "../components/InstructionBoard";
// import Sidebar from "../components/Sidebar";
import UploadForm from "../components/UploadForm";
import Head from "next/head";
import Modal from "../components/Modal";
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("../components/Sidebar"));
export default function Home() {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    const result = window.localStorage.getItem("recognito_result");
    console.log(result);
    setData(JSON.parse(result));
  }, []);
  return (
    <section>
      <Modal content={data} />
      <Head>
        <title>Recognito</title>
      </Head>
      <div className="page-wrapper with-navbar with-sidebar ">
        <div className="sticky-alerts"></div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <div className="d-flex flex-column align-items-center">
            <UploadForm />
            <InstructionBoard />
          </div>
        </div>
      </div>
    </section>
  );
}
