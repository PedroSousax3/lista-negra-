import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export default class ListaNegraApi {

    async cadastrar(lista) {
        
        let formData = new FormData();
        formData.append('nome', lista.nome);
        formData.append('motivo', lista.motivo);
        formData.append('local', lista.local);
        formData.append('inclusao', lista.inclusao);
        formData.append('foto', lista.foto);

        const result = await api.post('/lista', formData, {
            headers: {'content-type': 'multipart/form-data'}
        });
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

    consultarImagem(nome){
        const result = api.defaults.baseURL + '/lista/ConsultarFoto/' + nome;
        return result;
    }

    async Alterar(idlista, lista) {
        const result = await api.put(`/lista/${idlista}`, lista);
        return result.data;
    }

    async deletarPorId(id){
        await api.delete(`/lista/${id}`);    
    }
}