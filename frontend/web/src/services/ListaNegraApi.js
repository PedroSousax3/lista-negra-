import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export default class ListaNegraApi {

    async cadastrar(lista) {
        const result = await api.post('/lista', lista);
        console.log(result);
        return result.data;
    }

    async consultar(){
        const result = await api.get('/lista');
        return result.data;
    }

    async consultarPorNome(nome){
        const result = await api.get(`/lista/ConsultarPorNome/${nome}`);
        return result.data;
    }

    async Alterar(idlista, lista) {
        const result = await api.put(`/lista/${idlista}`, lista);
        return result.data;
    }

    async deletarPorId(id){
        await api.delete(`/lista/${id}`);    
    }
}