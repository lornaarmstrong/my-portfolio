import React, { useState } from "react";

import Header from "./components/common/Header";
import HomeBanner from "./components/Home/HomeBanner";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import ExperienceSection from "./components/Experience/ExperienceSection";
import Footer from "./components/common/Footer";
import Modal from "./components/common/Modal";
import "./App.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <ContentBlock
        id="experience"
        header={"Experience"}
        content={<ExperienceSection onOpenModal={handleOpenModal} />}
      />
      <ContentBlock
        id="projects"
        header={"Projects"}
        content={"⚒️ This section is currently under construction ⚒️"}
      />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default App;
