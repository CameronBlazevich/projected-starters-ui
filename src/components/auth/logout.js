import { Button } from "reactstrap";

const Logout = (props) => {

    return <div><Button size="sm" onClick={props.logout}>Logout</Button></div>
}

export default Logout;