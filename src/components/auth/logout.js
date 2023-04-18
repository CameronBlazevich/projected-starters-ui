import { Button } from "reactstrap";

const Logout = (props) => {

    return <div className="margin-left-5"><Button size="sm" onClick={props.logout}>Logout</Button></div>
}

export default Logout;