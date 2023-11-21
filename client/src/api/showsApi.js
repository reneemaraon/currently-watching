import axios from 'axios';

export const getShowsRequest = async (params) => await axios.get('/api/v1/shows');


export const getShowRequest = async (id) => await axios.get('/api/v1/shows/' + id)

