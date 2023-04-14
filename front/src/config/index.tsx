const Config = {
  API: {
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    URI: `${process.env.API_HOST}:${process.env.API_PORT}/api/`
  }
};

export default Config;