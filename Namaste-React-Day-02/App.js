import React from "react";
import ReactDOM from "react-dom/client";
{/* <div id="Parent">
    <div id="child">
        <h1>i am an h1 tag</h1>
    </div>
</div> */}


const heading = React.createElement("div", {id: "Parent"}, 
React.createElement("div", {id: "child"},[React.createElement("h1", {}, "i am an h1 tag 😍"), React.createElement("h2", {}, "i am an h2 tag")] ));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    console.log(heading);