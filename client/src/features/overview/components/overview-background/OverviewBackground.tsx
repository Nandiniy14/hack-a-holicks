import * as React from 'react';
import { NavButton } from '../../../../shared/components/nav-button/NavButton';
import { PHDOneLogo } from '../../../../shared/components/phd-one-logo/PHDOneLogo';
import { PHDTwoLogo } from '../../../../shared/components/phd-two-logo/PHDTwoLogo';
import reactlogo from '../../../../static/images/hexagon.png';
import hexdesklogo from '../../../../static/images/hexdesk.png';
import './overview-background.css';
import { IOverviewBackgroundProps } from './types/IOverviewBackgroundProps';

export const OverviewBackGround: React.FunctionComponent<IOverviewBackgroundProps> = (props: IOverviewBackgroundProps) => {

    const getButtonText = (text: string): React.ReactElement => {
        switch (text) {
            case '1':
                return <PHDOneLogo size="medium" />;
            case '2':
                return <PHDTwoLogo size="medium" />;
            default:
                return <></>;
        }
    }

    const phdOneClick = (): void => {
        props.fetchPHDOneDetails();
        props.onNavigate('/user/login');
    }

    const phdTwoClick = (): void => {
        props.onNavigate('/phd/v2');
    }

    return (
        <div className="overview-background">
            <div  className="main-head1">
                <img className="react-image" src={hexdesklogo} />
                <p className="para_text">Support About Us</p>
            </div>
            <div className="main-head">
                Welcome to Work Space Management
                </div>
            <div className="sub-head"> Helping millions of employees back to the office today. </div>
            <div className="container">
                <div className="container__right">
                    <h4>Covid-19 has transformed the way we work forever. Our workspace management software can help get your 
                        employees back to the office safely. Providing an easy-to-use solution that allows employees to schedule 
                        desks, find colleagues and notified of changes to their working environment.</h4>
                    <NavButton buttonText={getButtonText('1')} onClick={phdOneClick} className={"phd-button phd-one"} />
                    <NavButton buttonText={getButtonText('2')} onClick={phdTwoClick} className={"phd-button phd-two"} />
                </div>
            </div>
        </div>
    );

}
