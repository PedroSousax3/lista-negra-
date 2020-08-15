using System;

namespace backend.Models.Response
{
    public class ListaResponse
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string motivo { get; set; }
        public string local { get; set; }
        public DateTime inclusao { get; set; }
        public string foto { get; set; }
    }
}