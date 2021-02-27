import React from 'react';
import {useParams} from 'react-router-dom';
import {AdditionalInfo, FormStatic, Other, SliderPanorama} from '../partials'


const OfficeSingle = (props) => {
    let { officeId } = useParams();

    const nameHead = [
        {
            name: 'Описание офиса',
            type: 'Description'
        },
        {
            name: 'Описание Бизнес-центра',
            type: 'Business'
        },
        {
            name: 'Планировка',
            type: 'Plan'
        },
        {
            name: 'Инфраструктура',
            type: 'Infrastructure'
        },
    ];

    return <>
        <section className="section panorama">
            <SliderPanorama/>
        </section>
        <section className="section">
            <AdditionalInfo data={nameHead}/>
        </section>
        <Other name={officeId}/>
        <FormStatic/>
    </>
};



export default OfficeSingle;
