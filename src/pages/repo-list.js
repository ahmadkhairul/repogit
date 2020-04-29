import React from "react";

const App = ({ data }) => {
  if (data !== null && data.length !== 0) {
    return (
      <>
        {data.map((item, index) => {
          return (
            <>
              <div index={index} key={index}>
                {item.name}
                <br />
                {item.language}
                <br />
                {item.html_url}
                <br />
                {item.description}
              </div>
              <hr />
            </>
          );
        })}
      </>
    );
  } else {
    return <div>This Username don't have any repositories</div>;
  }
};

export default App;
