
import { useState } from "react";
import { Collapse, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Games from "./games";

const CollapsibleGamesContainer = (props) => {
    const { playerData, leagueId, title } = props;


    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    if (playerData?.length === 0) {
        return <div></div>
    }

    const chevron = isOpen ? 
        <FontAwesomeIcon icon={faChevronUp} size="2x" onClick={toggle}>Toggle</FontAwesomeIcon> :
        <FontAwesomeIcon icon={faChevronDown} size="2x" onClick={toggle}>Toggle</FontAwesomeIcon>
    return (
        <div>
            <div>
                <div className="inline-block">
                    <h2>{`${title}`} {leagueId ? `(League ${leagueId})` : ""}{' '}</h2>
                </div>
                <div className="inline-block" style={{marginLeft: '5px'}}>
                    {chevron}
                    {/* {isOpen ? "Collapse" : "Expand"}  */}
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <Games toggleCollapse={toggle} {...props}></Games>
            </Collapse>
        </div>
    )

}

export default CollapsibleGamesContainer;