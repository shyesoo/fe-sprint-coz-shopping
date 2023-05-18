import styled from "styled-components";
import xmark from "../img/xmark.svg"

const Background = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.4);

`

const ModalContainer = styled.div`
    position: relative;
    width: 740px;
    height: 480px;
`

const CloseBtn = styled.img`
    position: absolute;
    font-size: 24px;
    color: white;
    cursor: pointer;
`


const Modal = ({ setIsModalOpen }) => {
    const closeModal = () => {
      setIsModalOpen(false);
    }

    return (
        <Background>
            <ModalContainer>
                <CloseBtn src={xmark} onClick={closeModal}/>
            </ModalContainer>
        </Background>
    )
}

export default Modal;