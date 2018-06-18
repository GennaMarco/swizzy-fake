import React from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router' // react-router v4
import { connect } from 'react-redux';

import routes from './routes';

console.log(routes(true));

class MainRouter extends React.Component {
    /*constructor(props){
        super(props);
    }*/

    componentWillMount() {
        this.unlisten = this.props.history.listen(location => {
            this.setState({location});
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const routeComponents = routes(this.props.authorized).map(r => {
            if (r.authorized !== undefined && !r.authorized) {
                return <Route key={r.label} {...r} component={null} render={
                    () => <Redirect to='/login' />
                }  />;
            }
            return <Route key={r.label} {...r} />;
        })

        console.log(routeComponents)
        return (
            <div>
                <Switch>
                    {routeComponents}
                </Switch>
            </div>);   
    };
}

const mapStateToProps = (state) => ({
    authorized: state.user.authenticated,
});

export default withRouter(connect(mapStateToProps)(MainRouter));
