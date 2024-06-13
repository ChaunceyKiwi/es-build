import * as React from "react";
import * as Server from "react-dom/server";

let FirstName = () => <p>Chauncey</p>;
let LastName = () => <p>Liu</p>;
let NameTag = () => (
  <h1>
    <FirstName />
    <LastName />    
    <div>This is something built upon esbuild</div>
  </h1>
);

document.getElementById("container").innerHTML = Server.renderToString(
  <NameTag />
);

new EventSource('/esbuild').addEventListener('change', () => location.reload())
