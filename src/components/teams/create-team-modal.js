import { useRef, useEffect, useState } from 'react';
import {Row} from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  CreateTeamModal = (props) => {
    const {leagueId, isOpen, toggle, submitTeamId} = props;
    const [teamId, setTeamId] = useState();
    const inputReference = useRef(null);

    useEffect(() => {
        // inputReference.current.focus();
    }, []);
    
    const renderSaveButton = () => {
      return (
        <Button color="primary" onClick={() => submitTeamId(leagueId, teamId)}>
            Save Team Id
        </Button>
    )
    }
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Team Id Instructions</ModalHeader>
        <ModalBody>
            <div className='league-id-form'>
            <h6>To show league specific data, we need your team ID:</h6>
            <div className="league-id-container"><img className="league-id-img" src={`${process.env.PUBLIC_URL}/TeamId.png`}></img></div>
            <p></p>
            <Row><p>You can find your Team Id in the URL after logging into the Yahoo Fantasy Baseball website and clicking "My Team".</p></Row>
            <p>{`It'll be the value after your league id (${props.leagueId}). `}</p>
            <Row><p>If your URL looks like <span className="url-display">https://baseball.fantasysports.yahoo.com/b1/92842/6?</span></p></Row>
            <p>Then your team id is <span className="url-display">6</span></p>
            <hr></hr>
            <h4>Enter Team Id Here:</h4>
            <input type="text" ref={inputReference} placeholder="1" onChange={e => setTeamId(e.target.value)}></input>
        </div>
        </ModalBody>
        <ModalFooter>
          {renderSaveButton()}
        </ModalFooter>
      </Modal>
    </div>
  );
}



export default CreateTeamModal;



