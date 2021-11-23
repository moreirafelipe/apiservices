import axios from 'axios';

const ApiBrasil = axios.create({
  baseURL: 'https://brasilapi.com.br/' //base url é concatenada com api.get
});

export default ApiBrasil;