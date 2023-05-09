import axios from "axios";

axios.defaults.baseURL = "https://6458c0ad4eb3f674df7c3f76.mockapi.io";

export const fetchUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const changeFollowersNumber = async (id, number) => {
  const response = await axios.put(`/users/${id}`, { followers: number });
  return response.data;
};
