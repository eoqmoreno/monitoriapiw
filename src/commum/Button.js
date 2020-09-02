import React from "react";
//filho de post
class Button extends React.Component{ //componente criado 
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.fun = this.props.fun; // fun = função
        this.state = {  }
    }

    chamar = () =>{
            this.fun();
    }
        
    render() {
        return ( 
            <button onClick={this.chamar} > {this.title}</button>
        );
    }
}
 
export default Button;