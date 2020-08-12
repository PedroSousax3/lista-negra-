using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_lista")]
    public partial class TbLista
    {
        [Key]
        [Column("id_lista")]
        public int IdLista { get; set; }
        [Required]
        [Column("nm_pessoa", TypeName = "varchar(150)")]
        public string NmPessoa { get; set; }
        [Column("ds_motivo", TypeName = "varchar(150)")]
        public string DsMotivo { get; set; }
        [Column("ds_local_convivio", TypeName = "varchar(80)")]
        public string DsLocalConvivio { get; set; }
        [Column("dt_inclusao", TypeName = "datetime")]
        public DateTime DtInclusao { get; set; }
    }
}
