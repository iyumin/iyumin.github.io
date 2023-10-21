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

const BASE_URL = 'http://localhost:5000';

export {
  BASE_URL,
  ENV,
};
