import axios from "axios"

export default async function getData() {
    try {
        console.log("calling getData")
        const resp = await axios({
            url: "https://salty-lake-22253.herokuapp.com/getfreeagents/3/1",
            method: 'get'
        });

        return resp;
    } catch (err) {
        console.error(err)
    }
}
