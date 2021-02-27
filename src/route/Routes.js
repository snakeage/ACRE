import React from 'react';

import {
    Switch,
    Route,
    useLocation, withRouter,
} from "react-router-dom";

import {
    Home,
    Services,
    Partner,
    Contacts,
    About,
    Catalog,
    ServicesSingle,
    OfficeSingle,
    BusinessCenterSingle
} from '../pages'


const Routes = () => {
    let location = useLocation();

    const urlOffice = 'officeId';
    const urlBusinessCenter = 'bcId';
    const urlServices = 'topicId';

    return (
        <div className={`${location.pathname === '/' ? 'container--index' : 'container' }`}>
            <Switch location={location}>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path='/about' >
                    <About/>
                </Route>
                <Route exact path='/services' >
                    <Services/>
                </Route>
                <Route path={`/services/:${urlServices}`}>
                    <ServicesSingle servicesSingle={true}/>
                </Route>
                <Route path='/contacts'>
                    <Contacts />
                </Route>
                <Route exact path='/catalog'>
                    <Catalog/>
                </Route>
                <Route exact path={`/catalog/:${urlOffice}`}>
                    <OfficeSingle />
                </Route>
                <Route exact path={`/catalog/bc/:${urlBusinessCenter}`}>
                    <BusinessCenterSingle />
                </Route>
                <Route path='/partners'>
                    <Partner/>
                </Route>
            </Switch>
        </div>
    )
};
export default withRouter(Routes);
