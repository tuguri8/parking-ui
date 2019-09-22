import axios from 'axios';

const get = (path, params) => {
    return axios.get("http://localhost:8080" + path, {params: params});
};

export const api = {
    search: (parkingCode) => {
        return get('/api/v1/maps/parking', {
            code: parkingCode,
        })
    },
};
