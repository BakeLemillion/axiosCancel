import axios from "axios";
import React from "react";

function Mainpage() {

    const url = 'https://jsonplaceholder.typicode.com'

    let cancelToken;

    const handleTakeChange = async (take) => {

        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Otklonen :D");
        }

        cancelToken = axios.CancelToken.source();

        try {
            const results = await axios.get(
                `${url}${take}`,
                { cancelToken: cancelToken.token }
            );
            console.log("Results for " + ": ", results.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ marginTop: "5em", textAlign: "center" }}>
            <button onClick={() => handleTakeChange('/photos')}>Запрос 1</button>
            <button onClick={() => handleTakeChange('/comments')}>Запрос 2</button>
        </div>
    );
}


export default Mainpage;
