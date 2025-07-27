import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                isLoggedIn ? children : <Redirect to={{ pathname: '/login' }} />;
            }}
        />
    );
}
