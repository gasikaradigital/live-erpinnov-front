import React from 'react';
import { Form } from 'react-bootstrap';

function PaymentMethodSelector({methodList, selectedRadio, setSelectedRadio, padStyleXs, padStyleXlLgMDSm}){

    return(
        <>
            <h5 className='fw-bold'>Paiement</h5>
            <p className='mt-1 text-start'>
                Paiement sécurisé 🔒
                <br />
                Sélectionnez un mode de paiement qui vous convient.
            </p>

            <div className='d-flex flex-column gap-3 mt-2 w-100'>
                {methodList.map((method) => {
                    return(
                        <Form.Check
                        type='radio'
                        key={method.id_number}
                        id={method.id}
                        name='paymentMethod'
                        value={method.value}
                        label={
                            <>
                                <span>{method.label}</span>
                                <img src={method.imgSrc} alt={method.label} className='img-fluid' style={{width: '50px', height: '50px', objectFit: 'cover'}}/>
                            </>
                        }
                        onChange={() => setSelectedRadio(method.value)}
                        checked={selectedRadio === method.value}
                        className={`m-0 rounded custom-options ${padStyleXs} ${padStyleXlLgMDSm}`}
                        style={{border: selectedRadio === method.value ? '2px solid #0d6efd' : '1px solid #e1e3ea'}}
                        />
                    )
                })}
                        
            </div>
            
        </>
    )
}

export default PaymentMethodSelector;