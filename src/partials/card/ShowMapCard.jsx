import React, {useContext} from 'react';
import MyContext from '../../context';
import {useDispatch} from "react-redux";
import {hideMenu} from "../../redux/actions";

const ShowMapCard = ({elemId, elemIsOpen}) => {
    const value = useContext(MyContext);
    const dispatch = useDispatch();
    const openMap = () => {
        dispatch(hideMenu())
    };
    return <>
        {
            value ?
                <div className={`${elemIsOpen ? 'active' : ''} head head-address`} onClick={() => value.openMap(elemId)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <address>
                        г. Москва, Пресненская наб. 6
                    </address>
                </div>
                :
                <div className="head head-address">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <address>
                        г. Москва, Пресненская наб. 6
                    </address>
                </div>
        }

    </>
};


export default ShowMapCard;
