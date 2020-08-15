namespace backend.Utils
{
    public class ConversorLista
    {
        public Models.TbLista Converter(Models.Request.ListaRequest lista)
        {
            Models.TbLista novo = new Models.TbLista();

            novo.NmPessoa = lista.nome;
            novo.DsMotivo = lista.motivo;
            novo.DsLocalConvivio = lista.local;
            novo.DtInclusao = lista.inclusao;

            return novo;
        }

        public Models.Response.ListaResponse Converter(Models.TbLista lista)
        {
            Models.Response.ListaResponse novo = new Models.Response.ListaResponse();

            novo.id = lista.IdLista;
            novo.nome = lista.NmPessoa;
            novo.motivo = lista.DsMotivo;
            novo.local = lista.DsLocalConvivio;
            novo.inclusao = lista.DtInclusao;
            novo.foto = lista.DsFoto;

            return novo;
        }
    }
}