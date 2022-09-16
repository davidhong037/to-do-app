import React, {useRef} from 'react'

function Modal({ children, showModal, setShowModal }) {
    const modalRef = useRef()
    
    const closeModal = (event) => {
        if (event.target === modalRef.current) {
            setShowModal(false)
        }
    }
    return (
        showModal &&
        <div className="Modal" ref={modalRef} onClick={closeModal}>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Modal