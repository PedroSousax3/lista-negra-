using System;
using System.Collections.Generic;

namespace backend.Business
{
    public class ListaRN
    {
        DataBase.ListaBD funcaoBD = new DataBase.ListaBD();
        public Models.TbLista InserirRN(Models.TbLista lista)
        {
            if(string.IsNullOrEmpty(lista.NmPessoa))
                throw new ArgumentException("Campo nome da pessoa inserida é obrigatório.");

            return funcaoBD.InserirBD(lista);
        }

        public List<Models.TbLista> ConsularTodosBD()
        {
            return funcaoBD.ConsularTodosBD();
        }

        public Models.TbLista ConsultarPorId(int idlista)
        {
            if(idlista <= 0)
                throw new ArgumentException("Campo idlista é obrigatorio para realizar a remoção de um item do banco de dados.");

            return funcaoBD.ConsultarPorIdBD(idlista);
        }

        public List<Models.TbLista> ConsularPorNomeBD(string nome)
        {
            if(string.IsNullOrEmpty(nome))
                throw new ArgumentException("Campo nome é obrigatório para realizar a consulta por nome");

            return funcaoBD.ConsularPorNomeBD(nome);
        }

        public Models.TbLista AlterarBD(int idlista, Models.TbLista novo)
        {
            if(idlista <= 0)
                throw new ArgumentException("Campo idlista é obrigatorio para realizar a remoção de um item do banco de dados.");

            return funcaoBD.AlterarBD(idlista, novo);
        }

        public void RemoverBD(int idlista)
        {
            if(idlista <= 0)
                throw new ArgumentException("Campo idlista é obrigatorio para realizar a remoção de um item do banco de dados.");
            else 
                funcaoBD.RemoverBD(idlista);
        }
    }
}