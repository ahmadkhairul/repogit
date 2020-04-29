import React from "react";

const App = ({ data }) => {
  if (data !== null && data.length !== 0) {
    return (
      <>
        <img className="profile" alt="profile" src={data.avatar_url} />
        <br />
        {data.name}
      </>
    );
  } else {
    return <></>;
  }
};

export default App;
