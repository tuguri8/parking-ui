import axios from 'axios';

const get = (path, params) => {
    return axios.get(process.env.REACT_APP_HOST + path, {params: params});
};

export const api = {
    search: (parkingCode) => {
        return get('/api/v1/maps/parking', {
            code: parkingCode,
        })
    },
};
