import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooops!</h1>
            <p>That Page cannot be found</p>
            <Link to={'/'}>Back to the Homepage...</Link>
        </div>
     );
}
 
export default NotFound;