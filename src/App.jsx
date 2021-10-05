import React from "react";
import images from "url:./images/*.jpg";

const App = () => (
    <div>
      <h1>Images Imported with Glob Import</h1>
      {Object.entries(images).map(([imageName, imageUrl]) => (
        <div key={imageUrl}>
          <h2>{imageName}</h2>
          <img src={imageUrl} width={300} />
        </div>
      ))}
    </div>
  );


export default App;
