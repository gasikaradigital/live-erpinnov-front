import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './PayementCard.css';

function PayementCard({isOpen, onClose}){
  const [selectedPayment, setSelectedPayment] = useState('');

  const itemsPaymentWithFormInput = [
    {id : "airtel_money", label : "Airtel Money", img : ["/public/assets/img/front-pages/icons/airtel_money.jpeg"]},
    {id : "mvola", label : "Mvola", img : []}
  ];

  const itemsPaymentWithoutFormInput = [
    {id : "orange_money", label : "Orange Money", img : []},
    {id : "carte_credit", label : "Carte de crédit & de débit", img : []}
  ];

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const handlePayment = () => {
    if (selectedPayment) {
      alert(`Paiement sélectionné: ${selectedPayment}`);
      onClose();
    } else {
      alert('Veuillez sélectionner un moyen de paiement');
    }
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        centered
        dialogClassName='custom-modal'
      >
        <Modal.Body className='bg-white p-0'>
          {/* En-tête boite modal de paiement */}
          <div className='modal-header d-flex justify-content-between align-items-center p-2 border-bottom'>
            <h5 className='modal-title-custom fw-bold'>Moyen de paiement</h5>
            <Button 
              variant="link" 
              className='btn-close-custom p-1 bg-danger'
              onClick={onClose}
            >
              <i className="bi bi-x-lg text-white fs-6"></i>
            </Button>
          </div>

          {/* Formulaire de paiement */}
          <Form className='payment-form p-4 flex flex-column gap-3'>

            {itemsPaymentWithFormInput.map((item) => (

              <Form.Group className='payment-option d-flex align-items-center p-2' controlId={item.id} key={item.id}>
                <div className='d-flex flex-row align-items-center'>
                  <Form.Check
                    type="radio"
                    name="paymentMethod"
                    id={item.id}
                    className='me-1'
                    checked={selectedPayment === item.id}
                    onChange={() => handlePaymentSelect(item.id)}
                  />
                  <Form.Label htmlFor={item.id} className='payment-label mb-0 w-100'>
                    <span className='payment-name'>{item.label}</span>
                  </Form.Label>
                </div>
                {/* <div>
                  {item.img.map((value, key) => (
                    <img src={value} key={key}/>
                  ))}
                </div> */}
              </Form.Group>

            ))}

            {itemsPaymentWithoutFormInput.map((item) => (

            <Form.Group className='payment-option d-flex justify-content-between align-items-center p-2' controlId={item.id} key={item.id}>
              <div className='d-flex flex-row align-items-center'>
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  id={item.id}
                  className='me-1'
                  checked={selectedPayment === item.id}
                  onChange={() => handlePaymentSelect(item.id)}
                />
                <Form.Label htmlFor={item.id} className='payment-label mb-0 w-100'>
                  <span className='payment-name'>{item.label}</span>
                </Form.Label>
              </div>
            </Form.Group>

            ))}

            {/* Terms and Conditions */}
            <div className='terms-section text-center mt-3 mb-3'>
              <p className='text-muted small mb-0'>
                J'ai lu et accepté les{' '}
                <a href="#" className='text-primary text-decoration-none'>conditions générales de vente</a>
                {' '}ainsi que la{' '}
                <a href="#" className='text-primary text-decoration-none'>Politique de confidentialité</a>
              </p>
            </div>
          </Form>

          {/* Footer with Payment Button */}
          <div className='modal-footer-custom d-flex justify-content-end p-3 border-top bg-light'>
            <Button 
              variant="primary" 
              className='btn-pay px-4 py-2'
              onClick={handlePayment}
              disabled={!selectedPayment}
            >
              Payer
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PayementCard;