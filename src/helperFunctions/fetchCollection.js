import axios from "axios";

export const fetchCollections = async (slug) => {

    const options = {
    method: 'GET',
    url: `https://opensea13.p.rapidapi.com/collection/${slug}`,
    headers: {
        'X-RapidAPI-Key': 'a6ddf02010mshcfac07b231ef13dp17c675jsnd48792ee86df',
        'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
    };
    return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data.collection
    }).catch(function (error) {
        console.error(error);
    });
}
