import { connect } from 'react-redux';
import * as data from '../../../../data';
import { navigate } from '../../../../shared/actions';
import { UserLoginDetails } from './UserLoginDetails';
import { IUserLoginDetailsProps } from './types/IUserLoginDetailsProps';

const mapDispatchToProps: IUserLoginDetailsProps = {
    fetchPHDOneDetails: data.phdOneDetails.actions.fetchPHDOneDetailsStarted,
    onNavigate: navigate
};

export const UserLoginDetailsContainer = connect<
    undefined,
    IUserLoginDetailsProps
>(undefined, mapDispatchToProps)(UserLoginDetails);
