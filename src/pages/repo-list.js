import React from "react";

const App = ({ data }) => {
  if (data) {
    return (
      <div className="row card">
        {data.map((item, index) => {
          return (
            <div className="col col-4 card" key={index}>
              <h3 className="title">
                <a href={item.html_url}> {item.name}</a>
              </h3>
              <p className="language"> {item.language} </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default App;
