import React from "react";
import { NavLink } from "react-router-dom";



class Navbar extends React.Component{ //componente criado 
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav  className= "navbar"> 
              <span className ="logo" > HEALTATTOS </span>
             <ul>
                <li>
                    <NavLink exact="true" to="/">Linha do Tempo</NavLink>
                </li> 
                <li>
                    <NavLink to="/postar">Postar</NavLink>
                </li>
             </ul>   
             <div className="usuario"> NINJA </div>
            </nav>

         );
    }
}
 
export default Navbar ;