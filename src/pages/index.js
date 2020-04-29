import React, { useState } from "react";
import { getUser, getRepoByUser } from "../_action/axios";
import RepoList from "./repo-list";
import User from "./user";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div className="grid-container">
      <div className="grid-item header">
        <label>Git Hooker get repository info by username</label>
      </div>
      <div className="grid-item content">
        <User data={user} />
      </div>
      <div className="grid-item detail">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const resRepo = await getRepoByUser(value);
            setData(resRepo);
            const resUser = await getUser(value);
            setUser(resUser);
          }}
        >
          <input
            type="text"
            name="user"
            placeholder="GIT Username"
            autoComplete="off"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />

          <button className="primary" type="submit">
            Search
          </button>
        </form>
        <hr />
        <RepoList data={data} />
      </div>
      <div className="grid-item about">
        Git Hooker is application for retrieve the list of all GitHub
        repositories of a person. <hr /> Made by Ahmad Khairul with React JS
      </div>
    </div>
  );
};

export default App;
