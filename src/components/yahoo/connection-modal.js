import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IntegrationReadiness from './integration-readiness';

function YahooConnectionModal(props) {
    const {leagueIds, modal, toggle, setLeagueId, submitLeagueId} = props;
    const handleClick = () => {
      const client_id = process.env.REACT_APP_YAHOO_CLIENT_ID;
      
      const redirect_uri = encodeURI(process.env.REACT_APP_YAHOO_REDIRECT_URI)
      const url = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&language=en-us`
      console.log(url)
      // eslint-disable-next-line
      location.href = url;
  }

  
    const renderConnectYahooButton = () => {
      return (<Button color="primary" onClick={() => handleClick()}>
      Connect Yahoo
    </Button>)
    }
    
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



