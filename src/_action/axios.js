import axios from "axios";

export const getUser = async (value) => {
  try {
    const res = await axios.get("https://api.github.com/users/" + value);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getRepoByUser = async (value) => {
  try {
    const res = await axios.get(
      "https://api.github.com/users/" + value + "/repos"
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
