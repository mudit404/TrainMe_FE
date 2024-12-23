import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL : 'http://127.0.0.1:8000/api/',
  headers: {
//  Authorization: `<Your Auth Token>`,
    'Accept': "application/json",
    // timeout : 1000,
  }, 
  // .. other options
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//     function (config) {
//       // Get the token from local storage or any other storage
//       const token = Cookies.get('token');
//       if (token) {
//         config.headers["Authorization"] = "Bearer " + token;
//       }
//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );

export default axiosInstance;