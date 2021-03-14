import React from 'react';
import {SliderBig, Slider, SliderSimple, MenuTrigger, Filter, } from '../partials'
import Service from '../components/service/service.component';

import kirill from '../img/kirill.jpg'
import kirillMark from '../img/kirillMark.svg'
import {Link} from "react-router-dom";


const Home = () => {
    return <>
            <section className="preview section">
                <MenuTrigger />
                <div className="title">
                    ACRE
                </div>
                <div className="subtitle">
                    Коммерческая<br/>
                    недвижимость<br/>
                    в Москве
                </div>
                <Filter/>
                <Link to='/catalog' className="btnCommon--gold btnAnimate">Подберите мне</Link>
            </section>
            <section className="advantages section">
                <div className="title">
                    Наши<br/>
                    преимущества
                </div>
                <SliderBig/>
            </section>
            <section className="services section">
                <div className="title">
                    Услуги
                </div>
                <Service />
            </section>
            
            <section className="about section">
                <div className="about__block">
                    <div className="title-mark">Об ACRE</div>
                    <div className="content">
                        ACRE является компанией полного цикла в сфере коммерческой недвижимости.
                        Мы представляем как интересы собственников/арендодателей
                        по вопросам маркетинга, сдачи в аренду или продажи зданий,
                        так и интересы потенциальных арендаторов/покупателей.<br/>
                        <br/>
                        Благодаря большому опыту и знанию рынка мы обеспечиваем
                        своих клиентов самой точной и актуальной информацией,
                        которая служит основой для принятия оптимального и
                        своевременного решения.<br/>
                        <br/>
                        Следуя профессиональным нормам,
                        мы ценим время своих клиентов, соблюдая конфиденциальность,
                        придерживаемся профессиональной ответственности, и стараемся
                        соответствовать стандартам индустрии недвижимости и компетентности в своей работе.
                    </div>
                    <Link to="/about" className="btnCommon-alt">Подробнее</Link>
                </div>
                <div className="about__block">
                    <div className="title-mark">Команда</div>
                    <div className="content">
                        Команда cтратегического консалтинга ACRE предлагает
                        различные продукты и услуги для инвесторов и банков,
                        девелоперов и собственников, государственных организаций
                        и конечных пользователей.<br/>
                        <br/>
                        Ежегодно наша команда ведет
                        переговоры относительно сдачи в аренду или продажи десятков
                        тысяч квадратных метров офисных помещений.<br/>
                        <br/>
                        В сфере коммерческой
                        недвижимости наши специалисты имеют большой профессиональный
                        опыт работы как с российскими, так и европейскими компаниями.
                    </div>
                </div>
                <figure className="about__picture">
                    <div className="about__picture-img">
                        <img src={kirill} alt="" className="img"/>
                    </div>
                    <figcaption>
                        <div className="about__picture-text">
                            Федоров Кирилл Александрович
                        </div>
                        <div className="about__picture-description">
                            Генеральный директор компании ACRE
                        </div>
                        <div className="about__picture-mark">
                            <img className="img" src={kirillMark} alt=""/>
                        </div>
                    </figcaption>
                </figure>
            </section>
            <section className="gallery">
                <div className="title">
                    Популярные объекты
                </div>
                <Slider/>
            </section>
    </>
};


export default Home;

