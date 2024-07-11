// BrandModal.jsx
import React, {useState, useEffect} from 'react';
import "./BrandModal.css";
import { Icon } from 'semantic-ui-react';


const BrandModal = ({onClose}) => {
    const [modal, setModal] = useState(true);

    const toggleTrueModal = () => {
      setModal(true);
    };
  
    const toggleFalseModal = () => {
      setModal(false);
    };
  
    if(modal) {
      document.body.classList.add('BrandModal__active-modal')
    } else {
      document.body.classList.remove('BrandModal__active-modal')
    }
    
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onClose]);
    
      const handleClose = () => {
        onClose();
        toggleFalseModal();
        
      };
  return (
    <>
        {modal && (
        <div className='BrandModal__overlay'>
            <div className='BrandModal__modal'>
                <header className="BrandModal__header">
                    <button className="BrandModal__back-button" onClick={handleClose}>
                        <i class="arrow left icon"></i>
                    </button>
                    
                    <div className="BrandModal__search-bar">
                    <input type="text" placeholder="Product Search"/>
                
                    </div>
                </header>

            </div>
        </div>
        )}  
    </>
  )
}


export default BrandModal;