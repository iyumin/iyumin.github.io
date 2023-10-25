const ENV = {
  develop: {
    api: {
      baseUrl: 'http://localhost:5000',
    },
  },
  production: {
    api: {
      baseUrl: 'https://api.kevinjobs.com:5000',
    }
  },
};

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000' : 'https://api.kevinjobs.com:5000';

export {
  BASE_URL,
  ENV,
};
