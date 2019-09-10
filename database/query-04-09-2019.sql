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


ALTER TABLE solicitud ALTER COLUMN id_jefe_directo TYPE integer USING id_jefe_directo::integer;



ALTER TABLE solicitud 
ADD COLUMN sociedad varchar(100) null, 
ADD COLUMN lider_uo varchar(100) null, 
ADD COLUMN codigo_uo char(50) null, 
ADD COLUMN descripcion_uo varchar(100) null, 
ADD COLUMN cod_divicion varchar(50), 
ADD COLUMN cod_sub_div varchar(50)
ADD COLUMN sctr varchar(100) null,
ADD COLUMN id_area_personal varchar(100) null,
ADD COLUMN id_relacion_personal varchar(100) null,
ADD COLUMN file_dp varchar(500) null,
ADD COLUMN direccion varchar(150) null,
ADD COLUMN ceco char(50) null,
add column descuento_ceco char(50) null,
add column porcentaje char(10) null







select * from solicitud;

select * from users;

select * from grupo;


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

update solicitud set estado_vicepresidencia=1 where id=1;

select estado,estado_vicepresidencia, * from solicitud where id=1;

select estado,estado_vicepresidencia, * from solicitud order by id desc;

ALTER TABLE solicitud
ADD COLUMN estado_vicepresidencia int;




select 
		-- 	data solicitud
		sol.id,sol.id_aprobador,sol.id_jefe_directo,sol.id_puesto,sol.id_puesto_tipo,sol.cantidad,sol.id_modalidad,
		sol.id_modalidad_tipo,sol.fecha_estimada_inicio,sol.id_plazo,sol.id_plazo_tipo,sol.nombre_cliente,
		sol.descripcion_servicio,sol.volumen_motivo,sol.inicio_estimado_tiempo,sol.estimacion_duracion_tiempo,
		sol.observaciones,sol.descripcion,sol.remoneracion,sol.fecha_registro,sol.usuario_registro,
		sol.fecha_nodificacion,sol.usuario_modificacion,sol.estado,sol.estado_vicepresidencia,
		-- data users 		
		us.id as id_apro,ltrim(us.codigo),us.sociedad,us.codigo_division,us.nombre_division_personal,us.codigo_sub_division,
		us.nombres_sub_division,us.dni,us.nombres, us.apellido_paterno,us.apellido_materno,us.email_corp,
		us.email_personal,us.codigo_posicion,us.descripcion_posicion,us.codigo_centro_coste,
		us.centro_coste,us.codigo_funcion,us.funcion,us.codigo_ocupacion,us.ocupacion,us.codigo_unidad_org,us.unidad_organizativa,
		us.fecha_nac,us.inicio_contrata,us.fin_contrata,us.cod_jefe,us.saldo_dias_vacaion,us.saldo_dias_descanso,us.categoria,
		-- Jefe Directo
		j_d.id as id_jefe, j_d.dni as dni_jefe,j_d.nombres as nombre_jefe, j_d.apellido_paterno as apellido_paterno_jefe,
		j_d.apellido_materno as apellido_materno_jefe,j_d.email_corp as email_corp_jefe,j_d.email_personal as email_personal_jefe,
		-- 	data grupo
		puesto.id as puesto_id, puesto.grupo as puesto_grupo, puesto.descripcion as puesto_des, puesto.detalle as puesto_detalle,
		modalidad.id as modalidad_id, modalidad.grupo as modalidad_grupo, modalidad.descripcion as modalidad_des, modalidad.detalle as modalidad_detalle,
		plazo.id as plazo_id, plazo.grupo as plazo_grupo, plazo.descripcion as plazo_des, plazo.detalle as plazo_detalle
from solicitud as sol
inner join users as us on us.id=sol.id_aprobador
inner join users as j_d on j_d.id=sol.id_jefe_directo
inner join grupo as puesto on sol.id_puesto=puesto.id and sol.id_puesto_tipo=puesto.grupo
inner join grupo as modalidad on sol.id_modalidad=modalidad.id and sol.id_modalidad_tipo= modalidad.grupo
inner join grupo as plazo on sol.id_plazo=plazo.id and sol.id_plazo_tipo=plazo.grupo
;

select * from grupo;


select * from solicitud;
select * from users;






insert into solicitud(id_aprobador,id_jefe_directo,id_puesto,id_puesto_tipo,cantidad,id_modalidad,id_modalidad_tipo,fecha_estimada_inicio,  
					  id_plazo,id_plazo_tipo,nombre_cliente,descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo,  
					  observaciones, descripcion,remoneracion,fecha_registro,usuario_registro,estado )
values(2,1,1,'PUESTO','5',16,'MODALIDAD','2019-10-02',17,'PLAZO','','','','','','asdasdasd','','',now(),'HROJAS',1)


create table remoneracion(
	id int not null primary key,
	solicitud_id int not null,
	tipo_moneda int not null,
	remoneracion_basico float not null,
	vales varchar(100) not null,
	asig_movilidad varchar(100) not null,
	asignacion_otros varchar(100) not null,
	fecha_registro date not null,
	usuario_registro varchar(50) not null,
	fecha_modificacion date null,
	usuario_modificacion varchar(50) null,
	estado int not null,
	foreign key (solicitud_id) references solicitud(id)
)

CREATE SEQUENCE id_remoneracion;
ALTER TABLE remoneracion ALTER id SET DEFAULT NEXTVAL('id_remoneracion');

select * from remoneracion;

insert into remoneracion(solicitud_id,tipo_moneda,remoneracion_basico,vales,asig_movilidad,asignacion_otros,fecha_registro,usuario_registro,estado)
values(42, 1, '300.00','Vales test','Asig. Movilidad','Asig. Otros', now(),'HROJAS',0)

insert into remoneracion(solicitud_id,tipo_moneda,remoneracion_basico,vales,asig_movilidad,asignacion_otros,fecha_registro,usuario_registro,estado)  
values(42,1,'2500.00','valest test','asig Movilidad Test','Asig Otros',now(),HROJAS,0)



-- Update solicitud Requerimiento
update solicitud set  sociedad='', lider_uo='', codigo_uo='', descripcion_uo='', cod_divicion='', cod_sub_div='', sctr='', id_area_personal='', id_relacion_personal='', file_dp='', direccion='', ceco='', descuento_ceco='',
porcentaje='' where id=1

select * from solicitud order by id desc;



