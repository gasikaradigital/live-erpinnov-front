import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, Form, Placeholder } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from '../../components/common/navbar/AppNavbar';
import './PayementCard.css';
import orangeMoneyImg from '../../assets/logo_cartes/orange_money.jpeg';
import bankTransferImg from '../../assets/logo_cartes/bank_transfer.jpg';
import pmPlaceImg from '../../assets/logo_cartes/pm_place.jpeg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function PayementCard(){

    
    const { theme } = useTheme();
    const darkMode = theme === 'dark';
    
      // Couleurs personnalisées
    const bgColor = darkMode ? '#222' : 'rgb(244, 239, 239)';  
    const cardBgColor = darkMode ? '#38393a' : '#fff' 
    const textColor = darkMode ? '#eee' : '#222';       // clair ou sombre
    const badgeBlue = '#0d6efd';   
    const borderControlRadioColor = '#e1e3ea'              
    const iClassColor = darkMode ? 'text-light' : 'text-dark'; 
    const inputBgColor = darkMode ? 'transparent' : '#fff';
    const placeholderColor = darkMode ? 'rgb(176, 173, 173)' : 'rgb(94, 93, 93)';
    const cardOrderSummaryBgColor = darkMode ? '#4c4d4e' : '#e9eaf0'; 


    // Payment Methods
    const paymentMethod = [
        {id: "orangeMoney", value: "orange_money", label: "Orange Money", imgSrc: orangeMoneyImg},
        {id: "vmBancaire", value: "virement_bancaire", label: "Virement Bancaire", imgSrc: bankTransferImg},
        {id: "pmPlace", value: "paiement_place", label: "Paiement sur place", imgSrc: pmPlaceImg}
    ]
    
    const [selectedRadio, setSelectedRadio] = useState(paymentMethod[0].value);
    const [selectedSwitch, setSelectedSwitch] = useState('annuel');
    const [showBillingForm, setShowBillingForm] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);

    // Styles répétitives
    const formControlStyle = {border: '1px solid rgb(176, 173, 173)', textAlign: 'left', textIndent: '5px', backgroundColor: inputBgColor, fontWeight: 'normal', color: textColor};

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
        // style={{backgroundColor: 'red'}}
        // style={{backgroundColor: 'green'}}
        <div className='d-flex align-items-center container-payement-card' style={{flexDirection: 'column', backgroundColor: bgColor, textColor: textColor, minHeight: '100vh', overflow: 'hidden', width: '100vw'}}>
            <AppNavbar />
            <div className='fake-bar' style={{height: '85px', width: '100vw'}}></div>
            <Container className={padStyleXlLgMdSmExternal+' '+padStyleXsExternal} style={{backgroundColor: 'transparent'}}>
                <Card className={'border-0'+' '+padStyleXlLgMdSmExternal+' '+padStyleXsExternal} style={{backgroundColor: 'transparent'}}>
                    <Row className='m-0 rounded' style={{  boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.2)', backgroundColor: cardBgColor}}>
                        <Col xs={12} md={12} lg={6} className={'d-flex align-items-start card-body border-end'+' '+padStyleXlLgMdSmInternal} style={{backgroundColor: 'transparent'}}>
                            <h5 className='fw-bold'>Paiement</h5>
                            <p className='mt-1' style={{textAlign: 'left'}}>
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
                                                <span>{method.label}</span>
                                                <img src={method.imgSrc} alt={method.label} className='img-fluid' style={{width: '50px', height: '50px', objectFit: 'cover'}}/>
                                            </>
                                        }
                                        onChange={() => setSelectedRadio(method.value)}
                                        checked={selectedRadio === method.value}
                                        className={'m-0 rounded custom-options'+' '+padStyleXsControlCheck+' '+padStyleXlLgMdSmControlCheck}
                                        style={{boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)', cursor: 'pointer', border: selectedRadio === method.value ? '2px solid '+badgeBlue : '1px solid '+borderControlRadioColor}}
                                        />
                                    )
                                })}
                                        
                            </div>

                            <div className='m-0 px-2 py-3 rounded w-100 mt-3' style={{boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)', cursor: 'pointer', border: '1px solid', borderColor: badgeBlue}}>
                                <div className='d-flex flex-row align-items-center m-0'>
                                    <button className='p-0 border-none btnBillingInfos' style={{width: 'auto', backgroundColor: 'transparent'}}
                                    onClick={() => setShowBillingForm(!showBillingForm)}>
                                        {
                                            showBillingForm ? <i className={`bi bi-chevron-down ${iClassColor}`}></i> : <i className={`bi bi-chevron-right ${iClassColor}`}></i> 
                                        }
                                    </button>
                                    <h6 className='fw-bold mt-2' style={{marginLeft: '8px'}}>Informations de facturation</h6>

                                </div>
                                {/* Formulaire des informations de facturation */}
                                {
                                    showBillingForm && (

                                        <Form className={'w-100 d-flex'+' '+padStyleXlLgMdSmExternal+' '+padStyleXsExternalInput} style={{flexDirection: 'column', gap: '15px'}}>
                                            <input
                                                type='text'
                                                placeholder='Nom complet | eg : John Doe'
                                                style={formControlStyle}
                                                className='customize-input py-2'
                                            />
                                            <input
                                                type='email'
                                                placeholder='Email | eg : johndoe@gmail.com'
                                                style={formControlStyle}
                                                className='customize-input py-2'
                                            />
                                            <select className='py-2 px-3 rounded text-dark' style={{backgroundColor: 'white', border: '1px solid #b2adad', cursor: 'pointer'}}>
                                                <option value="null">Sélectionnez votre pays...</option>
                                                <option value="MG">🇲🇬 Madagascar</option>
                                                <option value="FR">🇫🇷 France</option>
                                            </select>
                                            <input
                                                type='text'
                                                placeholder='Adresse | eg : Lot7B Majunga Be'
                                                style={formControlStyle}
                                                className='customize-input py-2'
                                            />
                                        </Form>
                                    )
                                }
                            </div>
                        </Col>

                        {/* Section Résumé de commande */}
                        <Col xs={12} md={12} lg={6} className={'card-body d-flex align-items-start card-body border-start'+' '+padStyleXlLgMdSmInternal} style={{backgroundColor: 'transparent'}}>
                            <div className='w-100 d-flex align-items-start' style={{flexDirection: 'column'}}>
                                <h5 className='fw-bold'>Résumé de commande</h5>
                                <div className='w-100 card-price-info rounded p-2 mt-2 d-flex gap-2' style={{backgroundColor: cardOrderSummaryBgColor, flexDirection: 'column'}}>
                                    <span className='py-1 px-2 rounded text-light title-com fw-bold' style={{backgroundColor: '#56b449', width: '60%', fontSize: '14px'}}>Paiement d'abonnement</span>
                                    <div className='w-100 p-4'>
                                        <span className='fs-3 fw-bold'>167 755 Ar</span>
                                    </div>
                                    <Row>
                                        <Col>
                                            <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            className="paymentSwitch"
                                            name='sw'
                                            checked={selectedSwitch === 'annuel'}
                                            onChange={() => setSelectedSwitch('annuel')}
                                            style={{transform: 'scale(0.6)'}}
                                            />
                                            <label style={{fontSize: '14px'}}>Payer annuellement</label>
                                        </Col>

                                        <Col>
                                            <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            className="paymentSwitch"
                                            name='sw'
                                            checked={selectedSwitch === 'mensuel'}
                                            onChange={() => setSelectedSwitch('mensuel')}
                                            style={{transform: 'scale(0.6'}}
                                            />
                                            <label style={{fontSize: '14px'}}>Payer mensuellement</label>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='d-flex gap-2 w-100 py-2' style={{flexDirection: 'column'}}>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label>Offre</label>
                                        <span className='py-1 px-4 rounded text-light fw-bold' style={{backgroundColor: '#fc8600', fontSize: '14px'}}>Solo-Basic</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label>Frais</label>
                                        <span style={{fontSize: '14px'}}>0 Ar</span>
                                    </div>
                                    <div className='d-flex align-items-center justify-between' style={{flexDirection: 'row'}}>
                                        <label>Total à payer</label>
                                        <span className='py-1 px-4 rounded text-light fw-bold' style={{backgroundColor: 'red', fontSize: '14px'}}>167 755 Ar</span>
                                    </div>
                                </div>
                                <hr className='w-100' style={{height: '2px', backgroundColor: textColor, border: 'none'}} />
                                <div className='w-100 container-form-payment-method'>
                                    {
                                        selectedRadio === "orange_money" &&(
                                            <div className='d-flex gap-2 form-method-1' style={{flexDirection: 'column'}}>
                                                <h5 className='fw-bold' style={{textAlign: 'left'}}>Détails Orange money</h5>
                                                <Form className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
                                                    <input
                                                        type='text'
                                                        placeholder='Numéro de téléphone orange'
                                                        style={formControlStyle}
                                                        className='customize-input py-2'
                                                    />
                                                    <input
                                                        type='text'
                                                        placeholder='Nom du titulaire du numéro'
                                                        style={formControlStyle}
                                                        className='customize-input py-2'
                                                    />
                                                    <Button type='submit' className='mt-3 fw-bold p-2'>
                                                        Payer
                                                    </Button>
                                                </Form>
                                            </div>
                                        )
                                    }

                                    {
                                        selectedRadio === "virement_bancaire" &&(
                                           <div className='d-flex gap-2 form-method-2' style={{flexDirection: 'column'}}>
                                                <h5 className='fw-bold' style={{textAlign: 'left'}}>Informations de virement</h5>
                                                <Form className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
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
                                                        style={formControlStyle}
                                                        className='customize-input py-2'
                                                    />
                                                    <input
                                                        type='text'
                                                        placeholder='Référence du virement'
                                                        style={formControlStyle}
                                                        className='customize-input py-2'
                                                    />
                                                    <Button type='submit' className='mt-3 fw-bold p-2'>
                                                        Enregistrer le paiement
                                                    </Button>
                                                </Form>
                                           </div>
                                        )
                                    }

                                    {
                                        selectedRadio === "paiement_place" &&(
                                           <div className='d-flex gap-2 form-method-3' style={{flexDirection: 'column'}}>
                                                <h5 className='fw-bold' style={{textAlign: 'left'}}>Détails pour paiement sur place</h5>
                                                <Form className={'d-flex'+' '+padStyleXlLgMdSmExternalInput+' '+padStyleXsExternal} style={{flexDirection: 'column', gap: '15px'}}>
                                                    <div className='d-flex w-100' style={{flexDirection: 'column'}}>
                                                        <label className='mb-2' style={{textAlign: 'left'}}>Prise de rendez-vous(RDV)</label>
                                                        <DatePicker
                                                        selected={selectedDate}
                                                        onChange={(date) => setSelectedDate(date)}
                                                        placeholderText="Choisir une date..."
                                                        dateFormat="dd/MM/yyyy"
                                                        className='custom-input-calendar py-2 w-100 customize-datepicker'
                                                        />
                                                    </div>
                                                    <div className='d-flex w-100' style={{flexDirection: 'column'}}>
                                                        <label className='mb-2' style={{textAlign: 'left'}}>Lieu de notre société</label>
                                                        <div
                                                            style={{border: '1px solid rgb(176, 173, 173)'}}
                                                            className='py-2 text-center rounded'
                                                        >
                                                            <span style={{color: textColor, fontWeight: 'bold'}}>Rue George V Majunga Be</span>
                                                        </div>
                                                    </div>
                                                    <Button type='submit' className='mt-3 fw-bold p-2'>
                                                        Envoyer
                                                    </Button>
                                                </Form>
                                           </div>
                                        )
                                    }
                                </div>
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
                        .customize-datepicker{
                            background-color : ${inputBgColor};
                            color: ${textColor}
                        }
                        .customize-datepicker::placeholder{
                            color: ${placeholderColor} !important;
                        }
                    `}
                </style>
            </Container>
        </div>
    )
}

export default PayementCard;