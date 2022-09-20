import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.responseType = 'json';
export const unAuthorizedInstance = axios.create();

// const addDonation = (data: IDonation) =>
//   unAuthorizedInstance.post('/api/v1/donation', {
//     ...data,
//   });

// const completeDonation = (data: IDonation) =>
//   unAuthorizedInstance.put('/api/v1/user/donation', {
//     ...data,
//   });

// const getDonations = (id: string) =>
//   unAuthorizedInstance.get(`/api/v1/user/donations/${id}`);

// const getAuthorizedUserDetails = (token: string) =>
//   unAuthorizedInstance.get('/api/v1/user/me', { params: { userToken: token } });

// export default {
//   addDonation,
//   getDonations,
//   getAuthorizedUserDetails,
//   completeDonation,
// };