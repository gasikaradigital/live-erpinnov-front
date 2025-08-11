import React, {useState, useRef, useEffect} from 'react';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from '../../components/common/navbar/AppNavbar';
import './PayementCard.css';
import orangeMoneyImg from '../../assets/logo_cartes/orange_money.jpeg';
import bankTransferImg from '../../assets/logo_cartes/bank_transfer.jpg';
import pmPlaceImg from '../../assets/logo_cartes/pm_place.jpeg';
import PaymentMethodSelector from './PaymentMethodSelector'
import BillingInfosSection from './BillingInfosSection';
import OrderSummarySection from './OrderSummarySection';
import DetailsMethodForm from './DetailsMethodForm';


function PayementCard(){

    const { theme } = useTheme();
    const darkMode = theme === 'dark';
    
      // Couleurs personnalisées
    const bgColor = darkMode ? '#222' : 'rgb(244, 239, 239)';  
    const rowBgColor = darkMode ? '#38393a' : '#fff' 
    const textColor = darkMode ? 'text-light' : 'text-dark';   
    const iClassColor = darkMode ? 'text-light' : 'text-dark'; 

    const badgeBlue = '#0d6efd';   
    const borderControlRadioColor = '#e1e3ea'              
    const inputBgColor = darkMode ? 'transparent' : '#fff';
    const placeholderColor = darkMode ? 'rgb(176, 173, 173)' : 'rgb(94, 93, 93)';
    const cardOrderSummaryBgColor = darkMode ? '#4c4d4e' : '#e9eaf0'; 


    // Payment Methods
    const paymentMethod = [
        {id_number: 0, id: "orangeMoney", value: "orange_money", label: "Orange Money", imgSrc: orangeMoneyImg},
        {id_number: 1, id: "vmBancaire", value: "virement_bancaire", label: "Virement Bancaire", imgSrc: bankTransferImg},
        {id_number: 2, id: "pmPlace", value: "paiement_place", label: "Paiement sur place", imgSrc: pmPlaceImg}
    ]
    
    // Constantes de contrôle d'état
    const [selectedRadio, setSelectedRadio] = useState(paymentMethod[0].value);
    const [switchState, setSwitchState] = useState(true);
    const [showBillingForm, setShowBillingForm] = useState(true);
    const [date, setDate] = useState(null);

    // Réference du formulaire dans le fichier BillingInfosSection
    const billingFormRef = useRef();

    const flatCalRef = useRef();

    // Fonction de soumission du formulaire de paiement
    const onSubmitForm = (e) => {
        e.preventDefault();

        const isBillingInfosValid = billingFormRef.current.checkValidity();
        const isMethodFormValid = e.target.checkValidity();

        if(!isBillingInfosValid || !isMethodFormValid){
            billingFormRef.current?.reportValidity();
            e.target.reportValidity();
            return ;
        }

        alert("Tous les champs sont remplis !");

    };

    const openCalendar = () => {
        if(flatCalRef.current?.flatpickr){
            flatCalRef.current.flatpickr.open();
        }
    };


    // Variable de contrôle responsive, catégorie : xl, lg, md, sm
    const padStyleXlLgMdSmExternal = 'p-xl-4 p-lg-4 p-md-3 p-sm-2';
    const padStyleXlLgMdSmExternalInput = 'px-xl-4 px-lg-4 px-md-3 px-sm-2';
    const padStyleXlLgMdSmInternal = 'px-4 py-4';
    const padStyleXlLgMdSmControlCheck = 'px-xl-5 px-lg-5 px-md-5 px-sm-5 py-xl-3 py-lg-3 py-md-3 py-sm-3';

    
    // Variable de contrôle responsive, catégorie : xs (Android)
    const padStyleXsExternal = 'p-1 p-sm-0';
    const padStyleXsExternalInput = 'px-1 py-2 px-sm-0 py-sm-0';
    const padStyleXsControlCheck = 'px-4 px-sm-0 py-2 py-sm-0';

    return(
        <div className= {`d-flex flex-column align-items-center min-vh-100 w-100 overflow-hidden ${textColor} container-payement-card`}>
            <AppNavbar />
            <div className='fade-bar'></div>
            <Container className={`${padStyleXlLgMdSmExternal} ${padStyleXsExternal} div-transparent`}>
                <Card className={`border-0 ${padStyleXlLgMdSmExternal} ${padStyleXsExternal}`}>
                    <Row className='m-0 rounded row-payment' style={{"--row-bg-color": rowBgColor}}>
                        <Col xs={12} md={12} lg={6} className={`d-flex align-items-start border-end card-body ${padStyleXlLgMdSmInternal}`}>
                            {/* Section de sélection des méthodes de paiement : section 1*/}

                            <PaymentMethodSelector
                            methodList={paymentMethod}
                            selectedRadio={selectedRadio}
                            setSelectedRadio={setSelectedRadio}
                            padStyleXs={padStyleXsControlCheck}
                            padStyleXlLgMDSm={padStyleXlLgMdSmControlCheck}
                            />

                            {/* Fin de la section 1 */}

                            {/* Section Informations de facturation : section 2 */}

                            <BillingInfosSection
                            billingFormRef={billingFormRef}
                            showBillingForm={showBillingForm}
                            setShowBillingForm={setShowBillingForm}
                            textColor={textColor}
                            iClassColor={iClassColor}
                            padStyleXlLgMdSmExternal={padStyleXlLgMdSmExternal}
                            padStyleXsExternalInput={padStyleXsExternalInput}
                            />

                            {/* Fin de la section 2 */}
                        </Col>

                        {/* Section Résumé de commande */}
                        <Col xs={12} md={12} lg={6} className={`d-flex align-items-start border-start card-body ${padStyleXlLgMdSmInternal}`}>
                            <div className='w-100 d-flex flex-column align-items-start'>
                                
                                {/* Section Résumé de commande : section 3 */}
                                
                                <OrderSummarySection
                                cardOrderSummaryBgColor={cardOrderSummaryBgColor}
                                switchState={switchState}
                                setSwitchState={setSwitchState}
                                methodSelected={selectedRadio}
                                />

                                {/* Fin de la section 3 */}

                                {/* Ligne séparateur */}
                                <hr style={{height: '4px', width: '100%'}} />
                                {/* Section Formulaire des méthodes de paiement séléctionnés : section 4*/}

                                <DetailsMethodForm
                                selectedRadio={selectedRadio}
                                padStyleXlLgMdSmExternalInput={padStyleXlLgMdSmExternalInput}
                                padStyleXsExternal={padStyleXsExternal}
                                badgeBlue={badgeBlue}
                                textColor={textColor}
                                onSubmit={onSubmitForm}
                                date={date}
                                setDate={setDate}
                                openCalendar={openCalendar}
                                flatCalRef={flatCalRef}
                                />

                                {/* Fin de la section 4 */}
                               
                            </div>
                        </Col>
                    </Row>
                </Card>

                <style>
                    {`
                        .customize-input::placeholder{
                            color: ${placeholderColor} !important;
                            opacity: 1
                        }
                        .customize-input-date::placeholder{
                            color: ${placeholderColor} !important;

                        }
                    `}
                </style>
            </Container>
        </div>
    )
}

export default PayementCard;