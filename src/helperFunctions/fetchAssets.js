import axios from "axios";

export const fetchAssets = () => {

    var MyParams = new URLSearchParams();
    MyParams.append('token_ids', '3479')
    MyParams.append('token_ids', '11137')
    MyParams.append('order_direction', 'desc')
    MyParams.append('limit', '3')
    MyParams.append('include_orders', 'false')

    const options = {
    method: 'GET',
    url: 'https://opensea13.p.rapidapi.com/assets',
    params: MyParams,
    headers: {
        'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
    };

    console.log('fetch assets happened')
    console.log(axios.request(options))
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}