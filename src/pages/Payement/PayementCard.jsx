import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from '../../components/common/navbar/AppNavbar';
import './PayementCard.css';

function PayementCard(){

    const { theme } = useTheme();
    const darkMode = theme === 'dark';
    
      // Couleurs personnalisées
    const bgColor = darkMode ? '#222' : 'rgb(244, 239, 239)';         // gris foncé
    const textColor = darkMode ? '#eee' : '#222';       // clair ou sombre
    const cardBg = darkMode ? '#222' : '#f8f9fa';    // gris moyen ou gris clair
    const badgeBlue = '#0d6efd';                         // bleu vif

    // Payment Methods
    const paymentMethod = [
        {id: "orangeMoney", value: "orange_money", label: "Orange Money", imgSrc: "src/assets/logo_cartes/orange_money.jpeg"},
        {id: "vmBancaire", value: "virement_bancaire", label: "Virement Bancaire", imgSrc: "src/assets/logo_cartes/bank_transfer.jpg"},
        {id: "pmPlace", value: "paiement_place", label: "Paiement sur place", imgSrc: "src/assets/logo_cartes/pm_place.jpeg"}
    ]
    
    const [showBillingForm, setShowBillingForm] = useState(true);

    // Styles répétitives
    const formControlStyle = {border: '1px solid rgb(176, 173, 173)', textAlign: 'left', textIndent: '5px'};

    // Variable de contrôle responsive, catégorie : xl, lg, md, sm
    const padStyleXlLgMdSmExternal = ' p-xl-5 p-lg-5 p-md-4 p-sm-3';
    const padStyleXlLgMdSmInternal = ' px-3 py-4';
    const padStyleXlLgMdSmControlCheck = ' px-xl-5 px-lg-5 px-md-5 px-sm-5 py-xl-3 py-lg-3 py-md-3 py-sm-3';


    
    // Variable de contrôle responsive, catégorie : xs (Android)
    const padStyleXsExternal = ' p-1 p-sm-0';
    const padStyleXsControlCheck = ' px-4 px-sm-0 py-2 py-sm-0';

    return(
        // style={{backgroundColor: 'red'}}
        // style={{backgroundColor: 'green'}}
        <div className='d-flex align-items-center gap-1 container-payement-card' style={{flexDirection: 'column', backgroundColor: bgColor, textColor: textColor, minHeight: '100vh', overflow: 'hidden', width: '100vw'}}>
            <AppNavbar />
            <div className='fake-bar' style={{height: '85px', width: '100vw'}}></div>
            <Container className={padStyleXlLgMdSmExternal+padStyleXsExternal}>
                <Card className={'border-0'+padStyleXlLgMdSmExternal+padStyleXsExternal} style={{backgroundColor: bgColor}}>
                    <Row className='m-0 rounded' style={{  boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.2)', backgroundColor: '#fff'}}>
                        <Col xs={12} md={12} lg={6} className={'d-flex align-items-start card-body border-end'+padStyleXlLgMdSmInternal}>
                            <h5 className='fw-bold' style={{fontSize: '18px'}}>Paiement</h5>
                            <p className='mt-1' style={{textAlign: 'left', fontSize: '13px'}}>
                                Paiement sécurisé 🔒
                                <br />
                                Sélectionnez un mode de paiement qui vous convient.
                            </p>            
                            <div className='d-flex gap-3 mt-2 w-100' style={{flexDirection: 'column'}}>
                                {paymentMethod.map((method) => {
                                    return(
                                        <Form.Check
                                        type='radio'
                                        key={method.id}
                                        id={method.id}
                                        name='paymentMethod'
                                        value={method.value}
                                        label={
                                            <>
                                                <span style={{fontSize: '14px'}}>{method.label}</span>
                                                <img src={method.imgSrc} alt={method.label} className='img-fluid' style={{width: '50px', height: '50px', objectFit: 'cover'}}/>
                                            </>
                                        }
                                        className={'border m-0 rounded custom-options'+padStyleXsControlCheck+padStyleXlLgMdSmControlCheck}
                                        style={{boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)', cursor: 'pointer'}}
                                        />
                                    )
                                })}
                                        
                            </div>

                            <div className='m-0 px-2 py-3 rounded w-100 mt-3' style={{boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)', cursor: 'pointer', border: '1px solid', borderColor: badgeBlue}}>
                                <div className='d-flex flex-row align-items-center m-0'>
                                    <button className='p-0 border-none' style={{width: 'auto', backgroundColor: 'transparent'}}
                                    onClick={() => setShowBillingForm(!showBillingForm)}>
                                        {
                                            showBillingForm ? <i class="bi bi-chevron-down text-dark"></i> : <i class="bi bi-chevron-right text-dark"></i> 
                                        }
                                    </button>
                                    <h6 className='fw-bold mt-2' style={{marginLeft: '8px', fontSize: '14px'}}>Informations de facturation</h6>

                                </div>
                                {/* Formulaire des informations de facturation */}
                                {
                                    showBillingForm && (

                                        <Form className='w-100 p-4 d-flex' style={{flexDirection: 'column', gap: '15px'}}>
                                            <Form.Control
                                                type='text'
                                                placeholder='Nom complet | eg : John Doe'
                                                style={formControlStyle}
                                                className='py-2'
                                            />
                                            <Form.Control
                                                type='email'
                                                placeholder='Email | eg : johndoe@gmail.com'
                                                style={formControlStyle}
                                                className='py-2'
                                            />
                                            <Form.Control
                                                type='text'
                                                placeholder='Pays'
                                                style={formControlStyle}
                                                className='py-2'
                                                
                                            />
                                            <Form.Control
                                                type='text'
                                                placeholder='Adresse | eg : Lot7B Majunga Be'
                                                style={formControlStyle}
                                                className='py-2'
                                                
                                            />
                                        </Form>
                                    )
                                }
                            </div>
                        </Col>

                        {/* Section Résumé de commande */}
                        <Col xs={12} md={12} lg={6} className={'card-body d-flex align-items-start card-body border-start'+padStyleXlLgMdSmInternal}>
                            <div className='w-100 d-flex align-items-start' style={{flexDirection: 'column'}}>
                                <h5 className='fw-bold' style={{fontSize: '16px'}}>Résumé de commande</h5>
                                <div className='w-100 card-price-info rounded p-2 mt-2 d-flex gap-2' style={{backgroundColor: 'rgb(218, 215, 215)', flexDirection: 'column'}}>
                                    <span className='py-1 px-4 rounded text-light title-com' style={{backgroundColor: 'green', width: '60%', fontSize: '12px'}}>Paiement d'abonnement</span>
                                    <div className='w-100 p-4'>
                                        <span className='fs-4 fw-bold'>167 755 Ar</span>
                                    </div>
                                    <Row>
                                        <Col>
                                            <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            className="paymentSwitch"
                                            name='sw'
                                            style={{transform: 'scale(0.5'}}
                                            />
                                            <label style={{fontSize: '12px'}}>Payer annuellement</label>
                                        </Col>

                                        <Col>
                                            <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            className="paymentSwitch"
                                            name='sw'
                                            style={{transform: 'scale(0.5'}}
                                            />
                                            <label style={{fontSize: '12px'}}>Payer mensuellement</label>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='d-flex gap-2 w-100 py-2' style={{flexDirection: 'column'}}>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label style={{fontSize: '14px'}}>Offre</label>
                                        <span className='py-1 px-4 rounded text-light fw-bold' style={{backgroundColor: 'orange', fontSize: '14px'}}>Solo-Basic</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label style={{fontSize: '14px'}}>Frais</label>
                                        <span style={{fontSize: '14px'}}>0 Ar</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label style={{fontSize: '14px'}}>Total à payer</label>
                                        <span className='py-1 px-4 rounded text-light fw-bold' style={{backgroundColor: 'red', fontSize: '14px'}}>167 755 Ar</span>
                                    </div>
                                </div>
                                <hr className='w-100' style={{height: '2px', backgroundColor: 'black', border: 'none'}} />
                                <div className='w-100'>
                                    <div className='d-flex gap-2' style={{flexDirection: 'column'}}>
                                        <h5 className='fw-bold' style={{fontSize: '16px', textAlign: 'left'}}>Détails Orange money</h5>
                                        <Form className='d-flex px-4' style={{flexDirection: 'column', gap: '15px'}}>
                                            <Form.Control
                                                type='text'
                                                placeholder='Numéro de téléphone orange'
                                                style={formControlStyle}
                                                className='py-2'
                                            />
                                            <Form.Control
                                                type='email'
                                                placeholder='Nom du titulaire du numéro'
                                                style={formControlStyle}
                                                className='py-2'
                                            />
                                            <Button type='submit' className='mt-3 fw-bold p-2'>
                                                Payer
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default PayementCard;