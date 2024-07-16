import React from 'react';
import "./ListBlock.css";

const ListBlock = () => {
  return (
    <div className='ListBlock__content'>
        <div id='new products' className='ListBlock__title'>New Products</div>
        <div className='ListBlock__product-block'>
            <img src='https://wg.dialogtab.com/proxy/insecure/q:70/plain/local:///export/422/281077/1.jpg' alt='new product image'/>
        </div>
    </div>
  )
}

export default ListBlock