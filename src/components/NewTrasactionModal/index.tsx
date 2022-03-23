import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeimg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// overlayClassName="react-modal-overlay" className="react-modal-content" é a forma de estilizar a classe do overlay do modal

export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault(); {/* Essa função evita da pagina carregar */}

      const data = {
        title,
        value,
        category,
        type,
      }

      api.post('/transactions', data)
    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

          <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeimg} alt="close" />
          </button>button {
        
      }

        {/* o onSubmit faz a pagina carregar, envidando os dados para X, da para evitar isso */}
        <Container onSubmit={handleCreateNewTransaction}> 
          <h2>Cadastrar transação</h2>

          <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value) }/>

          <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value)) }/>

          <TransactionTypeContainer>
            <RadioBox 
            type="button"
            className={type === 'deposit' ? 'active' : ''}
            onClick={() => { setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
            type="button"
            onClick={() => { setType('withdraw');}}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value) }/>

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    )
}