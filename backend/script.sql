create database bd_lista;
use bd_lista;

create table tb_lista (
	id_lista				int primary key auto_increment,
    nm_pessoa				varchar(150),
    ds_motivo				varchar(150),
    ds_local_convivio		varchar(80),
    dt_inclusao				datetime
);

select * from tb_lista;

dotnet ef dbcontext scaffold "server=localhost;user id=root;password=45923617xx;database=bd_lista" Pomelo.EntityFrameworkCore.MySql -o Models --data-annotations --force