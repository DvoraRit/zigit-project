
import { Navigate,Outlet} from "react-router-dom"

// this private route is wraps the regular route.
//if there is no token in localStorage - meaning no user loged on-> goto login page - else go to info page
export default function PrivateRoute({ element: Element, ...rest }) {
    const isAuth = localStorage.getItem('token') ? true : false;

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}
