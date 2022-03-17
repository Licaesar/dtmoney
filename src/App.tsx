import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // Quando for criar uma função que será ativa com ação do usuário, de preferência em iniciar com handle
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }


  return (
    <>     
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}