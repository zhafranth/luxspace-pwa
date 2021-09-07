import React, { useState } from "react";

// Components
import { Layout, Header, Hero, Partner } from "../../components";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout show={showModal} handleShowModals={() => setShowModal(false)}>
      {/* <Modals /> */}
      <Header />
      <Hero handleShowModals={() => setShowModal(true)} />
      <Partner />
      {/* <h2>Hello from Home</h2> */}
    </Layout>
  );
};

export default Home;
