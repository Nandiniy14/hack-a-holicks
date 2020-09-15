import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { navigate } from '../../../../shared/actions';
import * as selectors from '../../selectors';
import { App } from './App';
import { IAppDataProps } from './types/IAppDataProps';
import { IAppDispatchProps } from './types/IAppDispatchProps';

const mapStateToProps = (state: any): IAppDataProps => ({
    logOutUser: selectors.getLogOutOnTokenExpiry(state),
});

const mapDispatchToProps:IAppDispatchProps = {
    onNavigate: navigate
}
export const AppContainer = withRouter(connect<IAppDataProps, IAppDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(App) as React.ComponentType<any>);
