import React, { useState, useEffect } from "react";

// Components
import { Layout, Header, Hero, Partner, Product } from "../../components";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(!navigator.onLine);

  const handleSetStatus = () => {
    setStatus(!navigator.onLine);
  };

  useEffect(() => {
    handleSetStatus();
    window.addEventListener("offline", handleSetStatus);
    window.addEventListener("online", handleSetStatus);

    return () => {
      window.addEventListener("offline", handleSetStatus);
      window.addEventListener("online", handleSetStatus);
    };
  }, [status]);

  return (
    <Layout
      show={showModal}
      handleShowModals={() => setShowModal(false)}
      status={status}
    >
      {/* <Modals /> */}
      <Header />
      <Hero handleShowModals={() => setShowModal(true)} />
      <Partner />
      <Product />
      {/* <h2>Hello from Home</h2> */}
    </Layout>
  );
};

export default Home;
