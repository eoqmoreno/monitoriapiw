import { ADD_POST, REMOVER_POST } from "../constants";

const initialState = {
    posts : [
        {'id':'1', 'nomePessoa':"Lost", 'qtdLikes':'50'},
        {'id':'1', 'nomePessoa':"Lost", 'qtdLikes':'50'},
        {'id':'1', 'nomePessoa':"Lost", 'qtdLikes':'50'},
        {'id':'1', 'nomePessoa':"Lost", 'qtdLikes':'50'},

    ]
}

function reducerRaiz(state = initialState, action){
    if(action.type == ADD_POST){
        let novo_post= {
            id:0,
            nomePessoa: action.payload.nome,
            //nomePessoa é o nome da variavel, action é um pacote de informações, payload quebra as informações, e o nome é a nossa informação que veio do componente
            qtdLikes: action.payload.qtdLikes,
        }
        let new_state = {...state};
        new_state.posts.push(novo_post);
        return new_state;
    }

    return state;
}

export default reducerRaiz;