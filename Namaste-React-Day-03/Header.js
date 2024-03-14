import React from "react";
import ReactDOM from "react-dom/client";
import image1 from './images/Testing-Image.jpg';
import image2 from './images/usericon.png'
import './Header.css';

function Header(){
return(<header>
    <nav>
       <ul>
        <li><img src={image1} id="logo"/></li>
        <li>
            <center>
                <form>
                <input id="search" type="text" placeholder="Search.." name="search" />
                </form>
             </center>
        </li>
        <li><img id="user-icon" src={image2} /></li>
       </ul>
        
        
       
    </nav>
   
</header>)
}
// const Header = () =>{
    
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);