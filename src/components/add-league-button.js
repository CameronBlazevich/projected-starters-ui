import { Button } from "reactstrap";
const AddLeagueButton = (props) => {
    return (<Button size="sm" color="primary" className="float-right" onClick={props.onClick}>Add League</Button>)
  }

  export default AddLeagueButton;