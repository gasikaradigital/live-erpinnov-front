import React from 'react';
import { Form } from 'react-bootstrap';

function BillingInfosSection({billingFormRef, showBillingForm, setShowBillingForm, textColor, iClassColor, padStyleXlLgMdSmExternal, padStyleXsExternalInput}){

    return(
        <div className='m-0 px-2 py-3 rounded w-100 mt-3 billing-infos-container'>
            <div className='d-flex flex-row align-items-center m-0'>
                <button className='p-0 border-none w-auto div-transparent btnBillingInfos'
                onClick={() => setShowBillingForm(!showBillingForm)}>
                    {
                        showBillingForm ? <i className={`bi bi-chevron-down ${iClassColor}`}></i> : <i className={`bi bi-chevron-right ${iClassColor}`}></i> 
                    }
                </button>
                <h6 className='fw-bold mt-1 ms-2'>Informations de facturation</h6>

            </div>
            {/* Formulaire des informations de facturation */}
            {
                showBillingForm && (

                    <Form ref={billingFormRef} className={`w-100 d-flex flex-column gap-3 ${padStyleXlLgMdSmExternal} ${padStyleXsExternalInput}`}>
                        <input
                            type='text'
                            placeholder='Nom complet | eg : John Doe'
                            className= {`customize-input py-2 form-control-style ${textColor}`}
                            required
                        />
                        <input
                            type='email'
                            placeholder='Email | eg : johndoe@gmail.com'
                            className= {`customize-input py-2 form-control-style ${textColor}`}
                            required
                        />
                        <select className={`py-2 px-3 rounded ${textColor} customize-select`} required> 
                            <option value="null">Sélectionnez votre pays...</option>
                            <option value="MG">🇲🇬 Madagascar</option>
                            <option value="FR">🇫🇷 France</option>
                        </select>
                        <input
                            type='text'
                            placeholder='Adresse | eg : Lot7B Majunga Be'
                            className= {`customize-input py-2 form-control-style ${textColor}`}
                            required
                        />
                    </Form>
                )
            }
        </div>
    )
}

export default BillingInfosSection;