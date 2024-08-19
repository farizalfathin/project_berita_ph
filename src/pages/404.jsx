import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found | <Link to="/">Go home</Link></p>
        </div>
    );
}

export default NotFound;