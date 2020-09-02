import React from 'react';
import Button from './Button';
import './Navbar.css';


//filho da galeria
class Post extends React.Component{ //componente criado 
    constructor(props) {
        super(props);
        this.nome = this.props.nome; // a variavel nome ta recebendo por paramentro o nome da pessoa que vem da pagina principal
        this.id = this.props.id;
        this.curtida = this.props.curtida;
        this.receberCurtida =this.props.receberCurtida;
        this.state = {  
            curtida: Number(this.curtida)
        } //pode se auterar, estado do sistema consigo criar variaveis que podem se modificar
    }

    somaCurtida= () => {
        this.setState({
        curtida: this.state.curtida +1
        });

        this.receberCurtida(this.id);
    } 
    
  
 
    render() { 
        return (       
         <nav className="Navbar">
             <div className="borda">
                 <br></br>
                 <span> Nome do Usuario: {this.nome} </span>
                 <p> Identificação de Ususario: {this.id} </p>
                 <div className="curtir">
                     <span>Total de curtidas: {this.state.curtida}</span>
                     <br/>
                     <Button title="Like" fun={this.somaCurtida}> </Button>
                     <Button title= "Excluir"></Button>
                 </div>
             </div> 
         </nav>   
      
        ); 
    }
}
 
export default Post;