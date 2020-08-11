using System;
using System.Linq;
using System.Collections.Generic;

namespace backend.DataBase
{
    public class ListaBD
    {
        Models.bd_listaContext bd = new Models.bd_listaContext();
        public Models.TbLista InserirBD(Models.TbLista lista)
        {
            bd.TbLista.Add(lista);
            bd.SaveChanges();

            return lista;
        }

        public List<Models.TbLista> ConsularTodosBD()
        {
            return bd.TbLista.ToList();
        }

        public Models.TbLista ConsultarPorIdBD(int idlista)
        {
            return bd.TbLista.FirstOrDefault(x => x.IdLista == idlista);
        }

        public List<Models.TbLista> ConsularPorNomeBD(string nome)
        {
            return bd.TbLista.Where(x => x.NmPessoa.Contains(nome)).ToList();
        }

        public void RemoverBD(int idlista)
        {
            Models.TbLista item = bd.TbLista.FirstOrDefault(x => x.IdLista == idlista);

            bd.TbLista.Remove(item);
            bd.SaveChanges();
        }

        public Models.TbLista AlterarBD(int idlista, Models.TbLista novo)
        {
            Models.TbLista atual = bd.TbLista.FirstOrDefault(x => x.IdLista == idlista);

            if(!string.IsNullOrEmpty(novo.NmPessoa) && novo.NmPessoa != atual.NmPessoa)
                atual.NmPessoa = novo.NmPessoa;
            if(!string.IsNullOrEmpty(novo.DsMotivo) && novo.DsMotivo != atual.DsMotivo)
                atual.DsMotivo = novo.DsMotivo;
            if(!string.IsNullOrEmpty(novo.DsLocalConvivio) && novo.DsLocalConvivio != atual.DsLocalConvivio)
                atual.DsLocalConvivio = novo.DsLocalConvivio;
            if(novo.DtInclusao != atual.DtInclusao)
                atual.DtInclusao = novo.DtInclusao;

            bd.SaveChanges();
            return atual;
        }
    }
}