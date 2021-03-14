import React from 'react';

import {Link} from "react-router-dom";

import './service-item.styles.scss';

const ServiceItem = ({ title, imageUrl }) => (
  <div className={`service-item`}>
    
    <img src={imageUrl} alt="" className="img"
    className='background-image'
    />
    <div className='content'>
    <h1 className='title'>{title}</h1>
    <hr/>
      <Link className='service-link' to="/services">Подробнее</Link>
    </div>
  </div>
);

export default ServiceItem;