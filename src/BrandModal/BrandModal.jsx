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
                    <h1 className='BrandModal__heading'> New Products </h1>
                </header>
                <div className='BrandModal__image-content'>
                  <img src='https://wg.dialogtab.com/proxy/insecure/q:70/plain/local:///export/881/252159/4.jpg' alt='new product image' className='BrandModal__image' />
                  <button className='BrandModal__add-to-cart-button'> Add to Cart </button>
                </div>

            </div>
        </div>
        )}  
    </>
  )
}


export default BrandModal;