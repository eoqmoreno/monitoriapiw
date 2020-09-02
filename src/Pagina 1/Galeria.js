import React from 'react';
import './Galeria.css';
import Post from '../commum/Post';
import { connect } from 'react-redux';

//pai do post
class Galeria extends React.Component{ //componente criado 
    constructor(props) {
        super(props);
        this.posts = props.posts;

    }   

    receberCurtida = (id) => {
        let postId = id;
        console.log(postId);
    }

    render() { 

        let posts = this.posts.map(
            (posts) => (
                <div className="central"> 
                <Post nome={posts.nomePessoa} id={posts.id} curtida={posts.qtdLikes} receberCurtida={this.receberCurtida}> </Post>
                </div>
            )
         );

         
        return ( 
           <div>
              {posts} 
           </div>
        );
    }
}
//O state vem do Store e o props é do componente atual
let mapearState = (state, props) => {
    return {posts: state.posts}
    //1 posts é a variavel que criamos agora, state.post é o estado que recebemos do store e escolhemos só os posts
}

 
export default connect(mapearState)(Galeria);