import React from 'react';
import PropTypes from 'prop-types';
import '../sass/_filter.scss'

const Filter = ({catalog}) => {
    return <>
        <div className={`${catalog ? 'Filter__wrapper--catalog' : ''} Filter__wrapper`}>
            <div className="Filter__head">
                <ul className="Filter__head-list">
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            Офисы
                        </button>
                    </li>
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            Торговая
                        </button>
                    </li>
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            Складская/Индустриальная
                        </button>
                    </li>
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            Земельные участки
                        </button>
                    </li>
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            Апартаменты
                        </button>
                    </li>
                    <li className="Filter__head-item">
                        <button className="Filter__head-btn">
                            ПСН
                        </button>
                    </li>
                    <li className="Filter__head-item active">
                        <button className="Filter__head-btn">
                            ГАБ
                        </button>
                    </li>
                </ul>
            </div>
            <div className="Filter__content">
                <form action="#" className="Filter__content-form">
                    <div className="form-block__wrapper">
                        <div className="form-block hidden-block">
                            <label className="Filter__content-label Filter__content-label--select">
                                <select className="Filter__content-select" placeholder="Доходность">
                                    <option>Офисы</option>
                                    <option value="2">Торговая</option>
                                    <option value="3">Складская/Индустриальная</option>
                                    <option value="3">Земельные участки</option>
                                    <option value="3">Апартаменты</option>
                                    <option value="3">ПСН</option>
                                    <option value="3">ГАБ</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-block">
                            <label className="Filter__content-label">
                                <input className="Filter__content-input" type="text" placeholder="Площадь от"/>
                            </label>
                            <label htmlFor="sqEnd" className="Filter__content-label">
                                <input id="sqEnd" className="Filter__content-input" type="text" placeholder="до"/>
                            </label>
                            <span className="Filter__content-description Filter__content-label">м<sup>2</sup></span>
                        </div>
                        <div className="form-block">
                            <label htmlFor="price" className="Filter__content-label">
                                <input className="Filter__content-input Filter__content-input--long" type="text" placeholder="Цена от"/>
                            </label>
                            <span className="Filter__content-description Filter__content-label">₽</span>
                        </div>
                        <div className="form-block">
                            <label className="Filter__content-label--select">
                                <select className="Filter__content-select" placeholder="Доходность">
                                    <option value="2">Доходность</option>
                                    <option value="3">htrhtrhtrhrt</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-block">
                            <label className="Filter__content-label">
                                <input className=" Filter__content-input--solo" type="text" placeholder="Местоположение"/>
                            </label>
                        </div>
                        <div className="form-block">
                            <label className="Filter__content-label--select">
                                <select className="Filter__content-select" placeholder="Окупаемость">
                                    <option value="2">Окупаемость</option>
                                    <option value="3">htrhtrhtrhrt</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <button className="btnCommon btnAnimate">
                        Найти
                    </button>
                </form>
            </div>
        </div>
    </>
};

Filter.propTypes = {
    catalog: PropTypes.bool
};


export default Filter;
