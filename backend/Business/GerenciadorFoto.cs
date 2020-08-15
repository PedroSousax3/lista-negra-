using System;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace backend.Business
{
    public class GerenciadorFoto
    {
        public string GerarNome(string nome)
        {
            string NomeNovo = Guid.NewGuid().ToString();
            NomeNovo = NomeNovo + Path.GetExtension(nome);

            return NomeNovo;
        }
        public void SalvarFoto(string nome, IFormFile arquivo)
        {
            string caminho = Path.Combine(
            AppContext.BaseDirectory, "Storage", "Fotos", nome);
            using (FileStream fs = new FileStream(caminho, FileMode.Create))
            {
                arquivo.CopyTo(fs);
            }
        }
        public byte[] LerFoto(string nome)
        {
            string caminho = Path.Combine(
            AppContext.BaseDirectory, "Storage", "Fotos", nome);

            byte[] arquivo = File.ReadAllBytes(caminho);

            return arquivo;
        }

        public string GerarContentType(string nome)
        {
            string extensao = System.IO.Path.GetExtension(nome).Replace(".", "");
            string result = "application/" + extensao;

            return result;
        }
    }
}