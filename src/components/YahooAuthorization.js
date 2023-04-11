import { Button } from "reactstrap";


function YahooAuthorization() {
    const handleClick = () => {
        const client_id = process.env.REACT_APP_YAHOO_CLIENT_ID;
        
        const redirect_uri = encodeURI(process.env.REACT_APP_YAHOO_REDIRECT_URI)
        const url = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&language=en-us`
        console.log(url)
        //location.href = url;
    }

    return (
        <div><Button onClick={() => handleClick()}>Yahoo</Button></div>
    )

}

export default YahooAuthorization;