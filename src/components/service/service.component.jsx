import React from 'react';

import ServiceItem from '../service-item/service-item';

import './service.styles.scss';

import servicesCardImg1 from '../../img/servicesCardImg1.jpg'

 class Service extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Управление недвижимостью',
          imageUrl: servicesCardImg1,
          id: 1,
        },
        {
          title: 'Представление интересов покупателя',
          imageUrl: servicesCardImg1,
          id: 2,
        },
        {
          title: 'Рынки капитала',
          imageUrl: servicesCardImg1,
          id: 3,
        },
        {
          title: 'Помещения от застройщиков',
          imageUrl: servicesCardImg1,
          id: 4,
        },
        {
          title: 'Готовый арендный бизнес',
          imageUrl: servicesCardImg1,
          id: 5,
        },
        {
          title: 'Дизайн и отделочные работы',
          imageUrl: servicesCardImg1,
          id: 6,
        },
      ]
    }
  }

  render() {
    return(
      <div className='service-menu'>
      {
        this.state.sections.map(({title, imageUrl, id}) => (
          <ServiceItem key={id} title={title} imageUrl={imageUrl} />
        ))
      }  
      </div>
    );
  }
}

export default Service;