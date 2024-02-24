import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWI3ZjZiNGEyNzFkMzliMTM5ZGJkYjhiZTg1ZmFjMiIsInN1YiI6IjY1OTY1MmVhNTkwN2RlNGEyMjYzYzBlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.USaHmgJc5bz5gKRpsaxoIPuOoyUvLPi1SJ19xX2tyCw';

const config = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default config;
