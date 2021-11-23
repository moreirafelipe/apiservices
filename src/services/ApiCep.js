import axios from 'axios';

const ApiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'  //base url é concatenada com api.get
});

export default ApiCep;