import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

// Como usa typescrip é ideal usar a interface
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

// Entradas de propriedades para fazer a função funcionar
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>

            </Content>
        </Container>
    )
}