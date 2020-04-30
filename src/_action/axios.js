import axios from "axios";

export const getData = async value => {
  try {
    const user = await axios.get("https://api.github.com/users/" + value);
    const repos = await axios.get(
      "https://api.github.com/users/" + value + "/repos"
    );
    let data = {
      user: user.data,
      repos: repos.data
    };
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
