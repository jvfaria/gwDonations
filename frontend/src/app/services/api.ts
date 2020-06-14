import axios from 'axios';

const api = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
            common: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Cross-Access-Allow-Origin": '*',
            }
      }

});

export default api;