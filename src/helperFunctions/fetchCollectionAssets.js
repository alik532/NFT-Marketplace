import axios from "axios";

const fetchCollectionAssets = (slug, cursor) => {

    cursor = cursor ? cursor : null;

    const options = {
        method: 'GET',
        url: 'https://opensea13.p.rapidapi.com/assets',
        params: {
          collection_slug: slug,
          order_direction: 'desc',
          limit: '21',
          cursor: cursor,
          include_orders: 'false'
        },
        headers: {
          'X-RapidAPI-Key': 'a6ddf02010mshcfac07b231ef13dp17c675jsnd48792ee86df',
          'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
        }
      };
      
      return axios.request(options).then(function (response) {
          return response.data
      }).catch(function (error) {
          console.error(error);
      });

}

export default fetchCollectionAssets;