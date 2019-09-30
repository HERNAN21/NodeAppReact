
DROP FUNCTION get_personal;
CREATE OR REPLACE FUNCTION get_personal (codigo_personal integer DEFAULT NULL::integer) 
   RETURNS TABLE (
      	codigo integer, sociedad varchar(100),
	   	codigo_division character(50),nombre_division_personal varchar(100),codigo_sub_division character(50),
		dni char(8),nombres varchar(100),apellido_paterno varchar(100),apellido_materno varchar(100),email_corp varchar(100),email_personal varchar(100),
		codigo_posicion char(20),descripcion_posicion varchar(100),codigo_centro_coste char(20),centro_coste varchar(100),codigo_funcion char(20),
		codigo_ocupacion char(20),ocupacion varchar(100),codigo_unidad_org char(20),unidad_organizativa varchar(100),fecha_nac date,inicio_contrata date,
		fin_contrata date,cod_jefe char(20),saldo_dias_vacacion char(20),saldo_dias_descanso char(20),categoria varchar(100),tipo_documento char(20),
		state boolean
	) 
	LANGUAGE 'plpgsql'
AS $$
BEGIN
	if codigo_personal >0 then
		RETURN QUERY
   		select per.codigo,per.sociedad,per.codigo_division,per.nombre_division_personal,per.codigo_sub_division,
		per.dni,per.nombres,per.apellido_paterno,per.apellido_materno,per.email_corp,per.email_personal,
		per.codigo_posicion,per.descripcion_posicion,per.codigo_centro_coste,per.centro_coste,per.codigo_funcion,
		per.codigo_ocupacion,per.ocupacion,per.codigo_unidad_org,per.unidad_organizativa,per.fecha_nac,per.inicio_contrata,
		per.fin_contrata,per.cod_jefe,per.saldo_dias_vacaion as saldo_dias_vacacion,per.saldo_dias_descanso,per.categoria,per.tipo_documento,
		per.state
		from personal per 
		where per.codigo=codigo_personal;	
	else
	   	RETURN QUERY
		select per.codigo,per.sociedad,per.codigo_division,per.nombre_division_personal,per.codigo_sub_division,
		per.dni,per.nombres,per.apellido_paterno,per.apellido_materno,per.email_corp,per.email_personal,
		per.codigo_posicion,per.descripcion_posicion,per.codigo_centro_coste,per.centro_coste,per.codigo_funcion,
		per.codigo_ocupacion,per.ocupacion,per.codigo_unidad_org,per.unidad_organizativa,per.fecha_nac,per.inicio_contrata,
		per.fin_contrata,per.cod_jefe,per.saldo_dias_vacaion as saldo_dias_vacacion,per.saldo_dias_descanso,per.categoria,per.tipo_documento,
		per.state
		from personal per ;
	end if;
END; 
$$;

-- select codigo,ltrim(sociedad)as sociedad,ltrim(codigo_division)as codigo_division,
-- ltrim(nombre_division_personal)as nombre_division_personal,ltrim(codigo_sub_division)as codigo_sub_division,
-- ltrim(nombres_sub_division)as nombres_sub_division,ltrim(dni)as dni,ltrim(nombres)as nombres,ltrim(apellido_paterno)as apellido_paterno,
-- ltrim(apellido_materno)as apellido_materno,ltrim(email_corp)as email_corp,ltrim(email_personal)as email_personal,
-- ltrim(codigo_posicion)as codigo_posicion,ltrim(descripcion_posicion)as descripcion_posicion,ltrim(codigo_centro_coste)as codigo_centro_coste,
-- ltrim(centro_coste)as centro_coste,ltrim(codigo_funcion)as codigo_funcion,ltrim(funcion)as funcion,ltrim(codigo_ocupacion)as codigo_ocupacion,
-- ltrim(ocupacion)as ocupacion,ltrim(codigo_unidad_org)as codigo_unidad_org,ltrim(unidad_organizativa)as unidad_organizativa,
-- fecha_nac,inicio_contrata,fin_contrata,ltrim(cod_jefe)as cod_jefe,
-- ltrim(saldo_dias_vacaion)as saldo_dias_vacaion,ltrim(saldo_dias_descanso)as saldo_dias_descanso,ltrim(categoria) as categoria 
-- from personal

select * from get_personal(606060);


CREATE OR REPLACE FUNCTION get_sede()
	RETURNS TABLE(
		id integer, descripcion character(100),direccion character(150),fecha_registro timestamp, 
		usuario_registro character(100),fecha_modificacion timestamp, usuario_modificacion character, estado boolean
	)
	LANGUAGE 'plpgsql'
AS $$
BEGIN
	RETURN QUERY
	select * from sede;
END;
$$

select * from get_sede();

select * from solicitud;

CREATE OR REPLACE FUNCTION post_solicitud(
		id_aprobador integer,id_jefe_directo integer,id_gerente integer,id_puesto integer,cantidad integer,id_modalidad integer,
		fecha_estimada_inicio date, id_plazo integer,nombre_cliente character(300),descripcion_servicio character(100),
		volumen_motivo character(20),inicio_estimado_tiempo date,estimacion_duracion_tiempo character(100), observaciones character(100),
		descripcion character(100),usuario_registro character(50),estado integer
	)
	returns e_return
	LANGUAGE 'plpgsql'
AS $$
DECLARE
	s_id integer;
	e_return e_return;
	BEGIN
		insert into solicitud(id_aprobador,id_jefe_directo,id_gerente,id_puesto,cantidad,id_modalidad,fecha_estimada_inicio, 
			id_plazo,nombre_cliente,descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo, 
			observaciones, descripcion,fecha_registro,usuario_registro,estado
		)values(
			id_aprobador,id_jefe_directo,id_gerente,id_puesto,cantidad,id_modalidad,fecha_estimada_inicio,id_plazo,nombre_cliente,
			descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo,observaciones,descripcion,now(),usuario_registro, estado
		)
		returning id into s_id;
		e_return.id = s_id;
		e_return.text = 'Se registró la solicitud';
		e_return.code = 'S';
		return e_return;
END;
$$


select * from post_solicitud(606060,606060,707070,1,2,1,'05-10-2019',
			1,'Test','Test Servicio','Test Motivo','05-10-2019','Test Fecha Inicio','','','HROJAS',1
)

select * from post_solicitud(
		606060,606060,707070,1,
		2,1,'05-10-2019',
		1,'Test','Test Servicio',
		'Test Motivo','05-10-2019','Test Fecha Inicio',
		'Obsercaiones','Descripcion','HROJAS',1
)

select * from solicitud where id=117;

select * from personal;

select * from general;

CREATE TYPE public.mensaje AS
(
	code character(1),
	text character varying(250),
	id character varying(18),
	statu boolean
);

CREATE OR REPLACE FUNCTION put_personal_state(statu_personal boolean, codigo_personal integer)
	RETURNS mensaje
	language 'plpgsql'
AS $$
DECLARE
	statu_p boolean;
	mensaje mensaje;
	BEGIN
		update personal set state=statu_personal where codigo=codigo_personal
		returning state into statu_p;
		if statu_p=true then
			mensaje.text='Se aprobo la renovacion de contrata.';
		else 
			mensaje.text='No Se aprobo la renovacion de contrata.';
		end if;
		mensaje.id=codigo_personal;
		mensaje.statu=statu_p;
		mensaje.code = 'S';
		return mensaje;
	END;
$$

-- update personal set statu=true where codigo=707070;
select * from put_personal_state(false,707070);


select * from personal;

update personal set state=null


