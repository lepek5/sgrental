const isDeveloping = process.env.NODE_ENV === "development";
const Config = {
  API: {
    URI: isDeveloping ? process.env.API_HOST_LOCAL : process.env.API_HOST_REMOTE
  }
};
export default Config;