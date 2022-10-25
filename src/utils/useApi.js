import axios from "axios";

// import { Auth } from "aws-amplify";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : "https://8vqrnnzkhf.execute-api.ap-southeast-1.amazonaws.com/dev",
});

// const requestInterceptors = async (configAxios) => {
//   try {
//     const session = await Auth?.currentSession();
//     if (session) {
//       configAxios.headers = {
//         ...configAxios.headers,
//         Authorization: `Bearer ${session.getAccessToken().getJwtToken()}`,
//       };
//     }
//     return configAxios;
//   } catch (error) {
//     return configAxios;
//   }
// };

// api.interceptors.request.use(requestInterceptors);

export default api;
