import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function OrderSummarySection({cardOrderSummaryBgColor, switchState, setSwitchState, methodSelected, backToDashboard}){

    return(
        <>
            <h5 className='fw-bold'>Résumé de commande</h5>
            <div className='w-100 rounded p-3 mt-2 d-flex flex-column gap-2 card-price-info' style={{backgroundColor: cardOrderSummaryBgColor}}>
                <span className='w-100 text-start'>💳 Profitez du paiement annuel sans frais.</span>
                <div className='d-flex flex-column w-100 align-items-center p-2 m-0 mt-2 gap-2 price-container' style={{backgroundColor: '#e0e0e3'}}>
                    <div className='d-flex flex-row align-items-center w-100 justify-center rounded gap-2 plan-chooser-container' style={{backgroundColor: cardOrderSummaryBgColor}}>
                       <span className='fw-bold opacity-75'>Annuel</span>
                       <button className='border-0 div-transparent p-0 m-0 btn-change-chooser-sw' onClick={() => setSwitchState(!switchState)}>
                       {
                            switchState ? 

                            <svg viewBox="0 0 24 24" width={'40'} height={'40'} xmlns="http://www.w3.org/2000/svg">
                                <path d="M16,8.5A3.5,3.5,0,1,0,19.5,12,3.5,3.5,0,0,0,16,8.5Zm0,5A1.5,1.5,0,1,1,17.5,12,1.5,1.5,0,0,1,16,13.5ZM16,5H8A7,7,0,0,0,8,19h8A7,7,0,0,0,16,5Zm0,12H8A5,5,0,0,1,8,7h8a5,5,0,0,1,0,10Z" fill="#0d6efd"/>
                            </svg>
                            
                            :

                            <svg viewBox="0 0 24 24" width={'40'} height={'40'} xmlns="http://www.w3.org/2000/svg">
                                <path d="M8,8.5A3.5,3.5,0,1,0,11.5,12,3.5,3.5,0,0,0,8,8.5Zm0,5A1.5,1.5,0,1,1,9.5,12,1.5,1.5,0,0,1,8,13.5ZM16,5H8A7,7,0,0,0,8,19h8A7,7,0,0,0,16,5Zm0,12H8A5,5,0,0,1,8,7h8a5,5,0,0,1,0,10Z" fill="#0d6efd"/>
                            </svg>
                       }
                       </button>
                       <span className='fw-bold opacity-75'>Mensuel</span>
                    </div>
                    <div className='w-100 p-1 d-flex align-items-center justify-center flex-column'>
                        <span className='p-2 fs-2 fw-bold text-dark w-100 text-center price-order'>167 755 <span>Ar/mois</span></span>
                        {
                            switchState &&
                            <span className='p-2 rounded small-font-size fw-bold text-danger w-100 text-center mt-1 fee-infos' style={{backgroundColor: 'rgba(255, 0, 0, 0.1'}}>
                                <i className='bi bi-info-circle me-1'></i> Un frais de 10% s'applique pour le plan mensuel
                            </span>
                        }
                    </div>
                </div>
                <button className='bg-success text-light p-1 rounded mt-2 btn-change-offer' onClick={backToDashboard}>Changer d'offre</button>
            </div>

            <div className='d-flex gap-2 w-100 py-2' style={{flexDirection: 'column'}}>
                <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                    <label>Offre</label>
                    <span className='py-1 px-4 rounded text-light fw-bold offer-name' style={{backgroundColor: '#fc8600', fontSize: '14px'}}>Solo-Basic</span>
                </div>
                {
                    (methodSelected === "orange_money") &&
                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                        <label>Frais orange money</label>
                        <span style={{fontSize: '14px'}}>0 Ar</span>
                    </div>
                }
                <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                    <label>Total à payer</label>
                    <span className='py-1 px-4 rounded text-light fw-bold' style={{backgroundColor: 'red', fontSize: '14px'}}>167 755 Ar</span>
                </div>
            </div>

        </>
    )
}

export default OrderSummarySection;