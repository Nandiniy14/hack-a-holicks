import _ from 'lodash';
import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { OverviewBackGroundContainer } from '../features/overview/components/overview-background/OverviewBackgroundContainer';
import { PHDOneDetailsContainer } from '../features/phd-one/components/phd-one-details/PHDOneDetailsContainer';
import { PHDTwoDetails } from '../features/phd-two/components/phd-two-details/PHDTwoDetails';
import { SeatLayout } from '../features/seat-layout/components/SeatLayout';
import { IDictionary } from '../types/IDictionary';
import { IPageRoute } from '../types/IPageRoute';
import * as constants from './constants';
import { NotFoundPage } from './NotFound';
import { UserLoginDetailsContainer } from '../features/user-login/components/user-login-details/UserLoginDetailsContainer';

const routes = constants.ROUTES;

export const Routes: React.FunctionComponent = () => {
    return (
        <>
            {_.map(routes, (page: IPageRoute, index: string) => {
                if (page.path === '/') {
                    return <Route exact={true} path='/' render={defaultPage} key={index} />
                }
                return <Route component={getComponentForPath(page.path)} exact={true} key={index} path={page.path} />
            })}
        </>
    )
}

const defaultPage = () => {
    return <SeatLayout />;
};

function getComponentForPath(path: string) {
    const knownPageComponents: IDictionary<any> = {
        '/home': OverviewBackGroundContainer,
        '/phd/v1': PHDOneDetailsContainer,
        '/phd/v2': PHDTwoDetails,
        '/user/login': UserLoginDetailsContainer,
        '/': SeatLayout
    };

    if (knownPageComponents[path]) {
        return knownPageComponents[path];
    }

    return NotFoundPage;
}

