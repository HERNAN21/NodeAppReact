create table solicitud(
	id int not null primary key,
	id_aprobador varchar(100)not null,
	id_jefe_directo varchar(100) not null,
	id_puesto int not null,
	id_puesto_tipo varchar(50) not null,
	cantidad int not null,
	id_modalidad int not null,
	id_modalidad_tipo varchar(50) not null,
	fecha_estimada_inicio date not null,
	id_plazo int not null,
	id_plazo_tipo varchar(50) not null,
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
	foreign key(id_puesto,id_puesto_tipo) references grupo(id,grupo),
	foreign key(id_modalidad,id_modalidad_tipo) references grupo(id,grupo),
	foreign key(id_plazo,id_plazo_tipo) references grupo(id,grupo)
);

CREATE SEQUENCE id_solicitud;
ALTER TABLE solicitud ALTER id SET DEFAULT NEXTVAL('id_solicitud');


select * from grupo;
select * from solicitud;

insert into solicitud(
	id_aprobador,id_jefe_directo,id_puesto,id_puesto_tipo,cantidad,id_modalidad,id_modalidad_tipo,fecha_estimada_inicio,id_plazo,id_plazo_tipo,
	nombre_cliente,descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo,observaciones,
	descripcion,remoneracion,fecha_registro,usuario_registro,estado
)
values(1,2,1,'PUESTO','5',12,'MODALIDAD','2019-09-30',17,'PLAZO',
	   'HTest','Servicio des','volumen',now(),'estimacion','observaciones',
	   'a','2500.00',now(),'HROJAS',0)


insert into solicitud(id_aprobador,id_jefe_directo,id_puesto,id_puesto_tipo,cantidad,id_modalidad,id_modalidad_tipo,fecha_estimada_inicio,  
					  id_plazo,id_plazo_tipo,nombre_cliente,descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo,  
					  observaciones, descripcion,remoneracion,fecha_registro,usuario_registro,estado 
					 ) 
					 values(2,2,2,'PUESTO','1',12,'MODALIDAD','2019-09-20',17,'PLAZO','Herna Rojas Utani','a','a','2019-10-01','3 meses','Ninguno','Descripcion detalls','5000.00',now(),'HROJAS',0)


 SELECT ('2019-04-01');
 SELECT to_char(DATE '2019-04-01', 'DD/MM/YYYY');


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
	
	
	
	


select * from grupo;

create table users(
	id int not null primary key,
	codigo char(20) not null,
	sociedad varchar(100) not null,
	codigo_division char(50) not null,
	nombre_division_personal varchar(100) not null,
	codigo_sub_division char(50) not null,
	nombres_sub_division varchar(100) not null,
	dni char(8) not null,
	nombres varchar(100) not null,
	apellido_paterno varchar(100) not null,
	apellido_materno varchar(100) not null,
	email_corp varchar(100) not null,
	email_personal varchar(100) not null,
	codigo_posicion char(20) not null,
	descripcion_posicion varchar(100) not null,
	codigo_centro_coste char(20) not null,
	centro_coste varchar(100) not null,
	codigo_funcion char(20) not null,
	funcion varchar(100) not null,
	codigo_ocupacion char(20) not null,
	ocupacion varchar(100) not null,
	codigo_unidad_org char(20) not null,
	unidad_organizativa varchar(100) not null,
	fecha_nac date not null,
	inicio_contrata date not null,
	fin_contrata date not null,
	cod_jefe char(20) not null,
	saldo_dias_vacaion char(20) null,
	saldo_dias_descanso char(20) null,
	categoria varchar(100)
);

CREATE SEQUENCE id_users;
ALTER TABLE users ALTER id SET DEFAULT NEXTVAL('id_users');

select * from users;


insert into users(
	codigo,sociedad,codigo_division,nombre_division_personal,codigo_sub_division,nombres_sub_division,
	dni,nombres,apellido_paterno,apellido_materno,email_corp,email_personal,codigo_posicion,descripcion_posicion,
	codigo_centro_coste,centro_coste ,codigo_funcion,funcion,codigo_ocupacion,ocupacion,
	codigo_unidad_org,unidad_organizativa,fecha_nac ,inicio_contrata,fin_contrata,cod_jefe,
	saldo_dias_vacaion,saldo_dias_descanso,categoria
)
values(
	'0002','Test 2','0002','Test div 1','0002','Test div 2', 
	'70546952','Hrojas2', 'test', 'testapm','test@gmail.com','test@hotmail.com','0002','Test Posicion 2',
	'002','test centro coste','0222','Test','013','asdd',
	'03','asddd','2019-09-04','2019-09-04','2019-09-04','003',
	'3000','500','123');

select * from users where codigo='0001';


select * from solicitud limit 10;
select * from detalle_solicitud ;

select * from detalle_solicitud where id_solicitud=39;


select * from solicitud where id=1 and estado=0;


insert into detalle_solicitud(id_solicitud,id_grupo,id_grupo_tipo,descripcion,fecha_registro,usuario_registro,estado)
values(1,7,'EQUIPO','',now(),'HROJAS',0);

select * from grupo;

SELECT max(id) from solicitud;

select id,ltrim(codigo),sociedad,codigo_division,nombre_division_personal,codigo_sub_division,nombres_sub_division,dni,nombres, 
apellido_paterno,apellido_materno,email_corp,email_personal,codigo_posicion,descripcion_posicion,codigo_centro_coste,
centro_coste,codigo_funcion,funcion,codigo_ocupacion,ocupacion,codigo_unidad_org,unidad_organizativa,fecha_nac,
inicio_contrata,fin_contrata,cod_jefe,saldo_dias_vacaion,saldo_dias_descanso,categoria from users;


update solicitud set estado=1 where id=1;
select estado, * from solicitud where id=1;




