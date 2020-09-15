import { connect } from 'react-redux';
import { navigate } from '../../../../shared/actions';
import { PHDOneDetails } from './PHDOneDetails';
import { IPHDOneDetailsDataProps } from './types/IPHDOneDetailsDataProps';
import { IPHDOneDetailsDispatchProps } from './types/IPHDOneDetailsDispatchProps';
import * as data from '../../../../data';

const mapStateToProps = (state: object): IPHDOneDetailsDataProps => ({
    eventData: data.phdOneDetails.selectors.getPHDOneDetails(state)
});

const mapDispatchToProps: IPHDOneDetailsDispatchProps = {
    fetchPHDOneDetails: data.phdOneDetails.actions.fetchPHDOneDetailsStarted,
    onNavigate: navigate
};

export const PHDOneDetailsContainer = connect<
    IPHDOneDetailsDataProps,
    IPHDOneDetailsDispatchProps
>(mapStateToProps, mapDispatchToProps)(PHDOneDetails);
