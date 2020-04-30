import React, { useState } from "react";
import { getData } from "../_action/axios";
import RepoList from "./repo-list";
import User from "./user";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  console.log(data);
  return (
    <>
      <div className="header">REPOGIT</div>
      <div className="container">
        <div className="row card">
          <form
            onSubmit={async event => {
              event.preventDefault();
              const data = await getData(value);
              setData(data);
            }}
          >
            <div className="col col-3">
              <input
                type="text"
                name="user"
                placeholder="GIT Username"
                autoComplete="off"
                onChange={event => {
                  setValue(event.target.value);
                }}
              />
            </div>
            <div className="col col-1">
              <button className="primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <User data={data.user} />
        <RepoList data={data.repos} />
      </div>
    </>
  );
};

export default App;
