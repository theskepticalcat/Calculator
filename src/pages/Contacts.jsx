import React from 'react'
import { useLocation } from 'react-router-dom';
import './../styles/contacts.scss';
import ContactForm from './../components/ContactForm/ContactForm';

import instagram from './../assets/images/instagram.png';
import facebook from './../assets/images/facebook.svg';
import whatsapp from './../assets/images/whatsapp.svg';
import wechat from './../assets/images/wechat.png';


const Contacts = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className='contacts-wrapper'>

            <div className='contacts'>
                <div className='contacts__title'>
                    <p>Свяжитесь с нами</p>
                </div>

                <div className='contacts__contact'>
                <p className='contacts__contact--title'>Наши данные:</p>
                    <div className='contacts__contact--contacts'>
                        <div>
                            <p>Наша почта:</p>
                            <p>Телефон:</p>
                        </div>
                        <div>
                            <p>asia@baikalvl.ru</p>
                            <a href='tel: 88002018777'><p>8 800 201-87-77</p></a>
                        </div>
                    </div>
                </div>

                <div className='contacts__socials'>
                    <p className='contacts__socials--title'>Мы в соц. сетях:</p>
                    
                    <div className='socials'>
                        <div className='socials__instagram'>
                            <img src={instagram} alt='instagram'/>
                            <p>Instagram</p>
                        </div>
                        <div className='socials__whatsapp'>
                            <img src={whatsapp} alt='whatsapp'/>
                            <p>Whatsapp</p>
                        </div>
                        <div className='socials__facebook'>
                            <img src={facebook} alt='facebook'/>
                            <p>Facebook</p>
                        </div>
                        <div className='socials__wechat'>
                            <img src={wechat} alt='Вы не сможете его скачать'/>
                            <p>Wechat</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

        </div>
    )
}

export default Contacts;