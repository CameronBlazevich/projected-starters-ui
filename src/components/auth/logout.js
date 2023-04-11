import { Component } from "react";
import { Button } from "reactstrap";

export default class Logout extends Component {
    constructor(props) {
        super(props)
    }
    render() {return <Button size="sm" onClick={this.props.logout}>Logout</Button>}
}