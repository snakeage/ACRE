import React, {useRef} from 'react';
import '../sass/_modal.scss'
import decor from "../img/modalImg.svg";
import { useDispatch } from "react-redux";
import {hideModal} from '../redux/actions'

const Modal = () => {
    const wrapperRef = useRef();
    const formRef = useRef();
    const dispatch = useDispatch();

    const handleOutsideClick = (e) => {
        let path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(formRef.current)) {
            // closeMenu()
            closeModal()
        }
    };

    const closeModal = () => {
        dispatch(hideModal());
    };

    React.useEffect(() => {
        wrapperRef.current.addEventListener('click', handleOutsideClick)
    }, []);

    return <>
        <div ref={wrapperRef} className="modal-wrapper">
            <div className="modal-content">
                <form ref={formRef} action="#" className="modal-form">
                    <div className="modal-form__wrapper">
                        <button className="closeModal" onClick={closeModal}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M17.2533 15.9999L24.6222 8.63106C24.7678 8.46101 24.8439 8.24228 24.8353 8.01857C24.8266 7.79485 24.7339 7.58264 24.5756 7.42434C24.4173 7.26603 24.2051 7.17329 23.9814 7.16465C23.7577 7.15601 23.5389 7.2321 23.3689 7.37773L16 14.7466L8.63109 7.36884C8.46371 7.20146 8.2367 7.10742 7.99998 7.10742C7.76327 7.10742 7.53625 7.20146 7.36887 7.36884C7.20149 7.53622 7.10746 7.76324 7.10746 7.99995C7.10746 8.23666 7.20149 8.46368 7.36887 8.63106L14.7467 15.9999L7.36887 23.3688C7.27582 23.4485 7.20025 23.5466 7.14689 23.6569C7.09354 23.7671 7.06356 23.8873 7.05883 24.0097C7.0541 24.1321 7.07473 24.2542 7.11942 24.3682C7.1641 24.4823 7.23189 24.5859 7.31852 24.6725C7.40514 24.7592 7.50874 24.8269 7.62281 24.8716C7.73687 24.9163 7.85895 24.9369 7.98136 24.9322C8.10378 24.9275 8.2239 24.8975 8.33418 24.8441C8.44446 24.7908 8.54252 24.7152 8.62221 24.6222L16 17.2533L23.3689 24.6222C23.5389 24.7678 23.7577 24.8439 23.9814 24.8352C24.2051 24.8266 24.4173 24.7339 24.5756 24.5756C24.7339 24.4173 24.8266 24.205 24.8353 23.9813C24.8439 23.7576 24.7678 23.5389 24.6222 23.3688L17.2533 15.9999Z" fill="#283655"/>
                            </svg>
                        </button>
                        <div className="title">
                            Подберите мне недвижимость
                        </div>
                        <div className="content">
                            <label className="labelCommon">
                                <input type="text" className="inputCommon--alt" placeholder="Имя"/>
                            </label>
                            <label className="labelCommon">
                                <input type="number" className="inputCommon--alt" placeholder="Телефон"/>
                            </label>
                            <label className="labelCommon">
                                <input type="email" className="inputCommon--alt" placeholder="Эл.почта"/>
                            </label>
                            <div className="modal-form__bottom">
                                <label className="hidden-label">
                                    <input className="hidden" type="checkbox"/>
                                    <span className="text-form">
                            Я согласен <br/>
                            <a className="link" href="#">с политикой обработки персональных данных</a>
                        </span>
                                </label>
                                <button className="btnCommon-alt">Отправить</button>
                            </div>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img className="img" src={decor} alt=""/>
                    </div>
                </form>
            </div>
        </div>
    </>
};


export default Modal;
