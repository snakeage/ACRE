import React from 'react';
import {useDispatch} from "react-redux";
import '../sass/_header.scss'
import { withRouter } from "react-router-dom";
import { Filter, MenuTrigger } from "./index";
import { showModal } from '../redux/actions'



const Header = ({location }) => {
    const dispatch = useDispatch();
    const textTitleHeader = {
        services: "Услуги компании",
        about: "О компании",
        partners: "Информация для партнеров",
        catalog: "Каталог бизнес-центров",
    };

    const openModal = () => {
        dispatch(showModal());
    };

    return <>
        {
            location.pathname === '/' || location.pathname.includes('contacts') ? <></> :
                <header className={`${ location.pathname === '/catalog'? 'header--filter' : ''} header section`}>
                    <MenuTrigger />
                    <div className="header__title">
                        {
                            location.pathname === '/about' && textTitleHeader.about
                        }
                        {
                            location.pathname.includes('services') && textTitleHeader.services
                        }
                        {
                            location.pathname === '/partners' && textTitleHeader.partners
                        }
                        {
                            location.pathname.includes('catalog') && textTitleHeader.catalog
                        }
                    </div>
                    <div className="header__content">
                        <div className="text">
                            Работа компании ACRE осуществляется
                            по принципам эффективности и результативности,
                            доверительного отношения и полной
                            конфиденциальности.
                        </div>
                        {
                            location.pathname === '/about' ||  location.pathname === '/services' ?
                                <></>
                                : <button className="btnCommon--gold btnAnimate" onClick={openModal}>Начать сотрудничество</button>
                        }
                    </div>
                    {
                        location.pathname === '/catalog' && <Filter catalog={true}/>
                    }

                </header>
        }

    </>
};


export default withRouter(Header);

