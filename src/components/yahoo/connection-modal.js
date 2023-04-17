import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IntegrationReadiness from './integration-readiness';

function YahooConnectionModal(props) {
    const {leagueIds, modal, toggle, setLeagueId, submitLeagueId} = props;
    
    const renderLeagueIdButton = () => {
      return (<Button color="primary" onClick={submitLeagueId}>
      Save League Id
    </Button>)
    }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Yahoo Connection Instructions</ModalHeader>
        <ModalBody>
          <IntegrationReadiness setLeagueId={setLeagueId} leagueIds={leagueIds}></IntegrationReadiness>
        </ModalBody>
        <ModalFooter>
          {renderLeagueIdButton()}
        </ModalFooter>
      </Modal>
    </div>
  );
}



export default YahooConnectionModal;



