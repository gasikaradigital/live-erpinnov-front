import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';



function DetailsMethodForm({selectedRadio, padStyleXlLgMdSmExternalInput, 
    padStyleXsExternal, badgeBlue, textColor, onSubmit, date, setDate, openCalendar, flatCalRef}){
    return(
        <div className='w-100 container-form-payment-method'>
            {
                selectedRadio === "orange_money" &&(
                    <div className='d-flex gap-2 form-method-1' style={{flexDirection: 'column'}}>
                        <h5 className='fw-bold' style={{textAlign: 'left'}}>Détails Orange money</h5>
                        <Form onSubmit={onSubmit} className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
                            <input
                                type='text'
                                placeholder='Numéro de téléphone orange'
                                className={`customize-input form-control-style py-2 ${textColor}`}
                                required
                            />
                            <input
                                type='text'
                                placeholder='Nom du titulaire du numéro'
                                className={`customize-input form-control-style py-2 ${textColor}`}
                                required
                            />
                            <Button type='submit' className='mt-3 fw-bold p-2 btn-form-submit'>
                                Payer
                            </Button>
                        </Form>
                        <div>
                            <p className='small mt-3'>
                                En procédant au paiement, vous acceptez nos{' '}
                                <a href="#" className="text-decoration-none">conditions générales</a> et notre{' '}
                                <a href="#" className="text-decoration-none">politique de confidentialité</a>.
                            </p>
                        </div>
                    </div>
                )
            }

            {
                selectedRadio === "virement_bancaire" &&(
                <div className='d-flex gap-2 form-method-2' style={{flexDirection: 'column'}}>
                        <h5 className='fw-bold' style={{textAlign: 'left'}}>Informations de virement</h5>
                        <Form onSubmit={onSubmit} className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
                            <div className='d-flex w-100' style={{flexDirection: 'column'}}>
                                <label className='mb-2' style={{textAlign: 'left'}}>Compte à créditer</label>
                                <div
                                    style={{border: '2px solid '+badgeBlue, textAlign: 'left', textIndent: '5px', backgroundColor: 'grey', color: 'white', fontWeight: 'bold'}}
                                    className='py-2 text-center rounded'
                                >
                                    <span>FR76 3000 6000 0112 3456 7890 189</span>
                                </div>
                            </div>
                            <input
                                type='text'
                                placeholder='Nom de la banque du virement | eg: BOA'
                                className={`customize-input py-2 form-control-style ${textColor}`}
                                required
                            />
                            <input
                                type='text'
                                placeholder='Référence du virement'
                                className={`customize-input py-2 form-control-style ${textColor}`}
                                required
                            />
                            <Button type='submit' className='mt-3 fw-bold p-2 btn-form-submit'>
                                Enregistrer le paiement
                            </Button>
                        </Form>
                        <div>
                            <p className='small mt-3'>
                                En procédant au paiement, vous acceptez nos{' '}
                                <a href="#" className="text-decoration-none">conditions générales</a> et notre{' '}
                                <a href="#" className="text-decoration-none">politique de confidentialité</a>.
                            </p>
                        </div>
                </div>
                )
            }

            {
                selectedRadio === "paiement_place" &&(
                <div className='d-flex gap-2 form-method-3' style={{flexDirection: 'column'}}>
                        <h5 className='fw-bold' style={{textAlign: 'left'}}>Détails pour paiement sur place</h5>
                        <Form onSubmit={onSubmit} className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
                            <div className='d-flex w-100' style={{flexDirection: 'column'}}>
                                <label className='mb-2' style={{textAlign: 'left'}}>Prise de rendez-vous (RDV)</label>
                                <div className='d-flex flex-row align-items-center rounded container-date-input'>
                                    <span className='px-3 py-2 span-container-calendar' onClick={openCalendar}>
                                        <i className='bi bi-calendar-event' onClick={openCalendar}></i>
                                    </span>
                                    <Flatpickr
                                    ref={flatCalRef}
                                    value={date}
                                    onChange={([selectedDate]) => setDate(selectedDate)}
                                    options={{
                                    enableTime: true,
                                    dateFormat: "d/m/Y H:i",
                                    locale: "fr"
                                    }}
                                    placeholder="JJ/MM/AAAA HH:MM"
                                    className={`form-control customize-input-date ${textColor}`}
                                    />
                                </div>
                            </div>
                            <div className='d-flex w-100' style={{flexDirection: 'column'}}>
                                <label className='mb-2' style={{textAlign: 'left'}}>Lieu de notre société</label>
                                <div
                                    style={{border: '1px solid rgb(176, 173, 173)'}}
                                    className='p-2 text-center rounded'
                                >
                                    <span style={{color: textColor}}>Espace Gasikakara, 1er étage, Rue georges V , Majunga Be, 401 Mahajanga , Madagascar</span>
                                </div>
                            </div>
                            <Button type='submit' className='mt-3 fw-bold p-2 btn-form-submit'>
                                Envoyer
                            </Button>
                        </Form>
                        <div>
                            <p className='small mt-3'>
                                En procédant au paiement, vous acceptez nos{' '}
                                <a href="#" className="text-decoration-none">conditions générales</a> et notre{' '}
                                <a href="#" className="text-decoration-none">politique de confidentialité</a>.
                            </p>
                        </div>
                </div>
                )
            }
        </div>
    )
}

export default DetailsMethodForm;