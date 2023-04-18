import React, { useState } from 'react';
import { Alert } from 'reactstrap';



const ErrorAlert = (props) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        props.clearErrors();
        // setVisible(false)
    };
    const displayMessages = props.messages.map(message => {
        return (<p>{message}</p>)
    })

    return (
        <div className='text-align-center centered-on-screen'>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {displayMessages}
            </Alert>
        </div>
    );
}

export default ErrorAlert;