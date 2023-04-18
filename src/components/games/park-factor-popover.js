
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

const ParkFactorPopover = (props) => {
    const parkFactor = props.parkFactor;
    const difference = parkFactor - 100;

    let text = "";
    if (difference > 0) {
        text = `${difference}% more runs were scored at this park than others on average.`
    } else if (difference < 0) {
        text = `${-1*difference}% fewer runs were scored at this park than others on average.`
    } else {
        text = `this park was average for run scoring relative to others.`
    }


    // console.log(JSON.stringify(props))

    return (
        <UncontrolledPopover trigger="legacy" target={props.popoverId}>
            <PopoverHeader>Park Factor</PopoverHeader>
            <PopoverBody className="text-align-center">
                <p>Park Factor is a measure of how many Runs are scored at a Park after controlling for other factors</p>
                <p>{`A PF score of ${parkFactor} means that ${text}`}</p>
            </PopoverBody>
        </UncontrolledPopover>
    )

}

export default ParkFactorPopover;