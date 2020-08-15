using System;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class ListaRequest
    {
        public string nome { get; set; }
        public string motivo { get; set; }
        public string local { get; set; }
        public DateTime inclusao { get; set; }
        public IFormFile foto { get; set; }
    }
}