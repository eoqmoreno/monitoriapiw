import { ADD_POST, REMOVER_POST } from "../constants";

export function addPost(payload){
    return {type: ADD_POST,payload}
}

export function removerPost(payload){
    return {type: REMOVER_POST,payload}
}