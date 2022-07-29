// import jsonChannels from "../data/channels.json";
// import jsonChat from "../data/chat.json";
import jsonData from "../data/data.json";

// Use promises for ajax. No need to implement backend - mock 
// response data and simulate latency (e.g. with setTimeout)
const data = {
    getData: () => {
        return new Promise((resolve, reject) => {

            // $.ajax({
            //     url: 'http://localhost:3000/channels',
            //     type: 'GET',
            //     dataType: 'json',
            //     success: function (data) {
            //         resolve(data);
            //     }
            // });

            setTimeout(() => {
                //return json data
                resolve(jsonData);
            }, 100);
        });
    }
}

export default data;