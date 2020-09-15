import { connect } from 'react-redux';
import * as data from '../../../../data';
import { navigate } from '../../../../shared/actions';
import { OverviewBackGround } from './OverviewBackground';
import { IOverviewBackgroundDispatchProps } from './types/IOverviewBackgroundDispatchProps';

const mapDispatchToProps: IOverviewBackgroundDispatchProps = {
    fetchPHDOneDetails: data.phdOneDetails.actions.fetchPHDOneDetailsStarted,
    onNavigate: navigate
};

export const OverviewBackGroundContainer = connect<
    undefined,
    IOverviewBackgroundDispatchProps
>(undefined, mapDispatchToProps)(OverviewBackGround);
