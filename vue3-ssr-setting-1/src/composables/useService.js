import axios from "axios";

/** Type-Def */
/** @typedef {'get','post','delete','put'} ApiRequestType */

/**
 * @param {function(any): Promise | void} promise
 * @returns [any, Error]
 */
export const apiResolver = async (promise) => {
  try {
    const data = await promise();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
});

apiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
