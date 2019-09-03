
create table grupo(
	id int not null,
	grupo varchar(50) not null,
	descripcion varchar(100) not null,
	detalle varchar(200) null,
	fecha_registro date not null,
	usuario_registro varchar(50) not null,
	fecha_nodificacion date null,
	usuario_modificacion varchar(50) null,
	estado int not null,
	primary key (id,grupo)
);


CREATE SEQUENCE id_grupo;
ALTER TABLE grupo ALTER id SET DEFAULT NEXTVAL('id_grupo');

insert into grupo(grupo,descripcion,fecha_registro,usuario_registro,estado)values('PUESTO','PROGRAMADOR BACKEND',now(),'HROJAS',0);

insert into grupo(grupo,descripcion,fecha_registro,usuario_registro,estado)values('MODALIDAD','MODALIDAD 3',now(),'HROJAS',0);

insert into grupo(grupo,descripcion,fecha_registro,usuario_registro,estado)values('PLAZO','PLAZO 3',now(),'HROJAS',0);

insert into grupo(grupo,descripcion,fecha_registro,usuario_registro,estado)values('EQUIPO','EQUIPO 3',now(),'HROJAS',0);

insert into grupo(grupo,descripcion,fecha_registro,usuario_registro,estado)values('ACCESOS','ACCESO 3',now(),'HROJAS',0);


select * from grupo;

create table solicitud(
	id int not null primary key,
	id_aprobador varchar(100)not null,
	id_jefe_directo varchar(100) not null,
	id_grupo int not null,
	id_grupo_tipo varchar(50) not null,
	cantidad int not null,
	fecha_estimada_inicio date not null,
-- 	Campo Segun Modalida
	nombre_cliente varchar(300) null,
	descripcion_servicio varchar(100) null,
	volumen_motivo char(20)  null,
	inicio_estimado_tiempo date  null,
	estimacion_duracion_tiempo varchar(100) null,
	observaciones varchar(300) null,
-- 	End Modalida
	descripcion varchar(200) null,
	remoneracion char(20) null,
	fecha_registro date not null,
	usuario_registro varchar(50) not null,
	fecha_nodificacion date null,
	usuario_modificacion varchar(50) null,
	estado int not null,
	foreign key(id_grupo,id_grupo_tipo) references grupo(id,grupo) 
);


CREATE SEQUENCE id_solicitud;
ALTER TABLE solicitud ALTER id SET DEFAULT NEXTVAL('id_solicitud');


create table detalle_solicitud(
	id_grupo int not null,
	id_grupo_tipo varchar(50) not null,
	id_solicitud int not null,
	descripcion varchar(100) null,
	fecha_registro date not null,
	usuario_registro varchar(50) not null,
	fecha_nodificacion date null,
	usuario_modificacion varchar(50) null,
	estado int not null,
	foreign key (id_grupo,id_grupo_tipo) references grupo(id,grupo),
	foreign key (id_solicitud) references solicitud(id)
);


create table candidatos(
	id int not null
)

create table detalle_cantidato(
	id int not null
)

create table solicitud_baja(
	id int not null
)




select * from solicitud;








-- select now();














-- create table tests(
-- 	id int not null,
-- 	descrip varchar(100) not null,
-- 	primary key(id)
-- )

-- CREATE SEQUENCE id;
-- ALTER TABLE tests ALTER id SET DEFAULT NEXTVAL('id');

-- select * from tests;

-- insert into tests (descrip)values('asd');


