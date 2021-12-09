import { trackPromise } from "react-promise-tracker";
import axios from "axios";
// import { user } from "../util/user";
import constant from "lodash/constant";
import { requestUrl } from "../config/request-url";
import { user } from "../util/user"; //

const DEF_HEADERS = {
  // Accept: "application/json",
  // "Content-Type": "multipart/form-data",
};

const BASE_URL = "http://localhost:5000/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const createServerResponse = (res) => ({ status: res.status, data: res.data });

const logout = () => {
};

const post = (path = "", body = {}, headers = DEF_HEADERS) =>
  trackPromise(
    axiosInstance
      .post(path, body, { headers })
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response ? err.response.data : err))
  );

const get = (path = "", params = {}, headers = DEF_HEADERS) =>
  trackPromise(
    axiosInstance
      .get(path, { headers, params })
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response ? err.response.data : err))
  );

// const put = (path = "", body = {}, headers = DEF_HEADERS) =>
//   trackPromise(
//     axiosInstance
//       .put(path, body, { headers })
//       .then((res) => res.data)
//       .catch((err) => Promise.reject(err.response ? err.response.data : err))
//   );

const getWithoutTrackLoading = (
  path = "",
  params = {},
  headers = DEF_HEADERS
) =>
  axiosInstance
    .get(path, { headers, params })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response ? err.response.data : err));

// const refreshToken = (payload) =>
//   axios
//     .post(BASE_URL + requestUrl.auth, payload, {
//       headers: DEF_HEADERS,
//     })
//     .then((res) => res.data)
//     .catch(() => constant(""));

// const requestHandler = async (request) => {
//   const userInfo = user.getUserInfo();

//   if (userInfo.idToken) {
//     let token = userInfo.idToken;
//     const remainTokenTime = userInfo.exp - new Date().getTime() / 1000;
//     const timeToRefreshToken = 300; // seconds

//     if (remainTokenTime < 0) {
//       logout();
//       throw new axios.Cancel("err");
//     }

//     if (remainTokenTime < timeToRefreshToken) {
//       const payload = {
//         refreshToken: userInfo.refreshToken,
//         username: userInfo.email,
//       };
//       const newToken = await refreshToken(payload);

//       if (!newToken) {
//         logout();
//         throw new axios.Cancel("err");
//       }

//       user.saveUserStorage(newToken);
//       token = newToken.idToken;
//     }

//     request.headers["Authorization"] = `Bearer ${token}`;
//   }

//   return request;
// };

// axiosInstance.interceptors.request.use(requestHandler); //Lien quan den viec chan lai trc khi den backend

export const requestService = { post, get, getWithoutTrackLoading };
