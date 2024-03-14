import React from "react";
import ReactDOM from "react-dom/client";

const headerElement1 = React.createElement("div", {className: "title"}, [
    React.createElement("h1", {}, "Heading 1 from element1"),
    React.createElement("h2", {}, "Heading 2 from element1"),
    React.createElement("h3", {}, "Heading 3 from element1")]);
    
    const headerElement2 = <div className="title">
        <h1>Heading 1 from element2</h1>
        <h2>Heading 2 from element2</h2>
        <h3>Heading 3 from element2</h3>
    </div>
    
    const Headerelement3 = () => {
        return(
             <div className="title">
                 <h1 id="heading1">Heading 1 from element3</h1>
                 <h2 id="heading2">Heading 2 from element3</h2>
                 <h3 id="heading3">Heading 3 from element3</h3>    
            </div>
            )
    };

    function Headerelement4(){
        return(
            <div className="title">
                 {headerElement1}
                 {headerElement2}
                 <Headerelement3 />
                 <h1 id="heading1">Heading 1 from element4</h1>
                 <h2 id="heading2">Heading 2 from element4</h2>
                 <h3 id="heading3">Heading 3 from element4</h3>    
            </div>
        );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headerelement4 />);