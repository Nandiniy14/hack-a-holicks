import { connect } from 'react-redux';
import { navigate } from '../../../../shared/actions';
import { userMainPage } from './PHDOneDetails';
import { IPHDOneDetailsDataProps } from './types/IPHDOneDetailsDataProps';
import { IPHDOneDetailsDispatchProps } from './types/IPHDOneDetailsDispatchProps';
import * as data from '../../../../data';

const mapStateToProps = (state: object): IPHDOneDetailsDataProps => ({
    eventData: data.phdOneDetails.selectors.getPHDOneDetails(state),
    locationsData: data.phdOneDetails.selectors.getLocationDetails(state),
    groupedDesks: data.phdOneDetails.selectors.getGroupedDesks(state),
});

const mapDispatchToProps: IPHDOneDetailsDispatchProps = {
    bookTheSeat: data.phdOneDetails.actions.bookTheSeatStarted,
    fetchPHDOneDetails: data.phdOneDetails.actions.fetchPHDOneDetailsStarted,
    fetchLocationDetails: data.phdOneDetails.actions.fetchLocationDetailsStarted,
    fetchLayoutData: data.phdOneDetails.actions.fetchLayoutDataStarted,
    onNavigate: navigate
};

export const PHDOneDetailsContainer = connect<
    IPHDOneDetailsDataProps,
    IPHDOneDetailsDispatchProps
>(mapStateToProps, mapDispatchToProps)(userMainPage);
