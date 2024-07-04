import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const BrandModal = ({ brand, onClose }) => (
  <Modal open={true} onClose={onClose}>
    <Modal.Header>{brand.name}</Modal.Header>
    <Modal.Content>
      {brand.color ? (
        <div style={{ backgroundColor: brand.color, padding: '20px' }}>
          This brand is {brand.name} with color {brand.color}.
        </div>
      ) : (
        <img src={brand.logo} alt={brand.name} style={{ width: '100%' }} />
      )}
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>Close</Button>
    </Modal.Actions>
  </Modal>
);

export default BrandModal;
