import axios from 'axios';
import { authorizationKey } from '../../../features/authorizationKey';

export const getSearchResults = async (query, page) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: query, include_adult: 'false', language: 'en-US', page: page },
        headers: {
            accept: 'application/json',
            Authorization: authorizationKey
        }
    };

    const response = await axios.request(options);
    return response.data;
};