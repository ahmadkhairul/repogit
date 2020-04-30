import React from "react";

const App = ({ data }) => {
  if (data) {
    return (
      <div className="row card" key={data.id}>
        <div className="col col-1">
          <img className="profile" alt="profile" src={data.avatar_url} />
        </div>
        <div className="col col-3">
          <div className="row">
            <div className="col col-4">
              <h1>{data.name}</h1>
            </div>
            <div className="col col-4">
              <a href="https://github.com/ahmadkhairul">
                <h2>{data.login}</h2>
              </a>
            </div>

            <div className="col col-2">
              <p>Followers : {data.followers}</p>
              <p>Following : {data.following}</p>
            </div>
            <div className="col col-2">
              <p>Location : {data.location}</p>
            </div>
          </div>
        </div>
        <div className="col col-4 ">
          <hr />
          <p>{data.bio}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default App;
