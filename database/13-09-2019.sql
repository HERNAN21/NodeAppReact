PGDMP             
            w            db_playground    11.5    11.5 7    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            Z           1262    16734    db_playground    DATABASE     �   CREATE DATABASE db_playground WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Peru.1252' LC_CTYPE = 'Spanish_Peru.1252';
    DROP DATABASE db_playground;
             postgres    false            ~           1247    16975    e_return    TYPE     p   CREATE TYPE public.e_return AS (
	code character(1),
	text character varying(250),
	id character varying(18)
);
    DROP TYPE public.e_return;
       public       pool_recursos_qa    false            �            1255    16984    get_solicitud_baja(integer)    FUNCTION     �
  CREATE FUNCTION public.get_solicitud_baja(p_id integer DEFAULT NULL::integer) RETURNS TABLE(id integer, id_trabajador integer, id_jefe integer, tipo_baja integer, tipo_cese_formal integer, tipo_cese_real integer, fecha_cese date, fecha_notificacion date, fecha_carta date, observaciones character, nombre_trabajador character, nombre_jefe character)
    LANGUAGE plpgsql
    AS $$  
DECLARE 
	var_r record;
BEGIN         
	if p_id > 0 then
	FOR var_r in(		
			select sb.id, sb.id_trabajador, sb.id_jefe, sb.tipo_baja, sb.tipo_cese_formal, sb.tipo_cese_real, sb.fecha_cese, 
			sb.fecha_notificacion, sb.fecha_carta, sb.observaciones, 
			t.nombres || ' ' || t.apellido_paterno || ' ' || t.apellido_materno as nom_trabajador, 
			j.nombres || ' ' || j.apellido_paterno || ' ' || j.apellido_materno as nom_jefe
			from solicitud_baja as sb
			left join users as t
			on sb.id_trabajador = cast(t.codigo as integer)
			left join users as j
			on sb.id_jefe = cast(j.codigo as integer)
			where sb.id = p_id
		)	
		loop
			id := var_r.id;
			id_trabajador := var_r.id_trabajador;
			id_jefe := var_r.id_jefe;
			tipo_baja := var_r.tipo_baja;
			tipo_cese_formal := var_r.tipo_cese_formal;
			tipo_cese_real := var_r.tipo_cese_real;
			fecha_cese := var_r.fecha_cese;
			fecha_notificacion := var_r.fecha_notificacion;
			fecha_carta := var_r.fecha_carta;
			observaciones := var_r.observaciones;
			nombre_trabajador := var_r.nom_trabajador;
			nombre_jefe := var_r.nom_jefe;
			RETURN NEXT;  
		end loop; 		
	else
		FOR var_r in(		
			select sb.id, sb.id_trabajador, sb.id_jefe, sb.tipo_baja, sb.tipo_cese_formal, sb.tipo_cese_real, sb.fecha_cese, 
			sb.fecha_notificacion, sb.fecha_carta, sb.observaciones, 
			t.nombres || ' ' || t.apellido_paterno || ' ' || t.apellido_materno as nom_trabajador, 
			j.nombres || ' ' || j.apellido_paterno || ' ' || j.apellido_materno as nom_jefe
			from solicitud_baja as sb
			left join users as t
			on sb.id_trabajador = cast(t.codigo as integer)
			left join users as j
			on sb.id_jefe = cast(j.codigo as integer)
		)	
		loop
			id := var_r.id;
			id_trabajador := var_r.id_trabajador;
			id_jefe := var_r.id_jefe;
			tipo_baja := var_r.tipo_baja;
			tipo_cese_formal := var_r.tipo_cese_formal;
			tipo_cese_real := var_r.tipo_cese_real;
			fecha_cese := var_r.fecha_cese;
			fecha_notificacion := var_r.fecha_notificacion;
			fecha_carta := var_r.fecha_carta;
			observaciones := var_r.observaciones;
			nombre_trabajador := var_r.nom_trabajador;
			nombre_jefe := var_r.nom_jefe;
			RETURN NEXT;  
		end loop; 
	end if;
END;                                                                                                                                                  
$$;
 7   DROP FUNCTION public.get_solicitud_baja(p_id integer);
       public       pool_recursos_qa    false            �            1255    16985 ]   post_solicitud_baja(integer, integer, integer, integer, integer, date, date, date, character)    FUNCTION     K  CREATE FUNCTION public.post_solicitud_baja(p_id_trabajador integer, p_id_jefe integer, p_tipo_baja integer, p_tipo_cese_formal integer, p_tipo_cese_real integer, p_fecha_cese date, p_fecha_notificacion date, p_fecha_carta date, p_observaciones character) RETURNS public.e_return
    LANGUAGE plpgsql
    AS $$
declare 
	p_id integer;
	e_return e_return;
	begin
		
		insert into solicitud_baja(id_trabajador, id_jefe, tipo_baja, tipo_cese_formal, tipo_cese_real,
		fecha_cese, fecha_notificacion, fecha_carta, observaciones)
		values(p_id_trabajador, p_id_jefe, p_tipo_baja, p_tipo_cese_formal, p_tipo_cese_real, p_fecha_cese, 
		p_fecha_notificacion, p_fecha_carta, p_observaciones)
		returning id into p_id;
	
		e_return.id = p_id;
		e_return.text = 'Se registró la solicitud de baja';
		e_return.code = 'S';
	
	return e_return;

	END;

$$;
 �   DROP FUNCTION public.post_solicitud_baja(p_id_trabajador integer, p_id_jefe integer, p_tipo_baja integer, p_tipo_cese_formal integer, p_tipo_cese_real integer, p_fecha_cese date, p_fecha_notificacion date, p_fecha_carta date, p_observaciones character);
       public       pool_recursos_qa    false    638            �            1259    16900    id_candidato_solicitud    SEQUENCE        CREATE SEQUENCE public.id_candidato_solicitud
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.id_candidato_solicitud;
       public       pool_recursos_qa    false            �            1259    16887    candidato_solicitud    TABLE     �  CREATE TABLE public.candidato_solicitud (
    id integer DEFAULT nextval('public.id_candidato_solicitud'::regclass) NOT NULL,
    id_solicitud integer NOT NULL,
    nombres character varying(100) NOT NULL,
    apellido_paterno character varying(100) NOT NULL,
    apellido_materno character varying(100) NOT NULL,
    tipo_documento integer NOT NULL,
    numero_documento character(20) NOT NULL,
    disponibilidad integer NOT NULL,
    email character varying(100) NOT NULL,
    file_cv character varying(200) NOT NULL,
    observaciones character varying(250) NOT NULL,
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_modificacion date,
    usuario_modificacion character varying(50),
    estado integer NOT NULL,
    id_sede_entrevista integer,
    contacto_sede character(50),
    fecha_entrevista timestamp without time zone,
    prioridad character(10),
    codigo_posicion character(50)
);
 '   DROP TABLE public.candidato_solicitud;
       public         pool_recursos_qa    false    208            �            1259    16883    id_centro_costo    SEQUENCE     x   CREATE SEQUENCE public.id_centro_costo
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.id_centro_costo;
       public       pool_recursos_qa    false            �            1259    16873    centro_costo    TABLE     �  CREATE TABLE public.centro_costo (
    id integer DEFAULT nextval('public.id_centro_costo'::regclass) NOT NULL,
    id_solicitud integer NOT NULL,
    centro_costo double precision NOT NULL,
    descuento_costo double precision NOT NULL,
    porcentaje double precision NOT NULL,
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_modificacion date,
    suario_modificacion character varying(100),
    estado integer NOT NULL
);
     DROP TABLE public.centro_costo;
       public         pool_recursos_qa    false    206            �            1259    16806    detalle_solicitud    TABLE     �  CREATE TABLE public.detalle_solicitud (
    id_grupo integer NOT NULL,
    id_grupo_tipo character varying(50) NOT NULL,
    id_solicitud integer NOT NULL,
    descripcion character varying(100),
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_nodificacion date,
    usuario_modificacion character varying(50),
    estado integer NOT NULL
);
 %   DROP TABLE public.detalle_solicitud;
       public         pool_recursos_qa    false            �            1259    16740    id_grupo    SEQUENCE     q   CREATE SEQUENCE public.id_grupo
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.id_grupo;
       public       pool_recursos_qa    false            �            1259    16735    grupo    TABLE     �  CREATE TABLE public.grupo (
    id integer DEFAULT nextval('public.id_grupo'::regclass) NOT NULL,
    grupo character varying(50) NOT NULL,
    descripcion character varying(100) NOT NULL,
    detalle character varying(200),
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_nodificacion date,
    usuario_modificacion character varying(50),
    estado integer NOT NULL
);
    DROP TABLE public.grupo;
       public         pool_recursos_qa    false    197            �            1259    16868    id_remoneracion    SEQUENCE     x   CREATE SEQUENCE public.id_remoneracion
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.id_remoneracion;
       public       pool_recursos_qa    false            �            1259    16819    id_solicitud    SEQUENCE     u   CREATE SEQUENCE public.id_solicitud
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.id_solicitud;
       public       pool_recursos_qa    false            �            1259    16780    id_users    SEQUENCE     q   CREATE SEQUENCE public.id_users
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.id_users;
       public       pool_recursos_qa    false            �            1259    16858    remuneracion    TABLE       CREATE TABLE public.remuneracion (
    id integer DEFAULT nextval('public.id_remoneracion'::regclass) NOT NULL,
    solicitud_id integer NOT NULL,
    tipo_moneda integer NOT NULL,
    remuneracion_basico double precision NOT NULL,
    vales character varying(100) NOT NULL,
    asig_movilidad character varying(100) NOT NULL,
    asignacion_otros character varying(100) NOT NULL,
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_modificacion date,
    usuario_modificacion character varying(50),
    estado integer NOT NULL,
    tipo_moneda_neg integer,
    remuneracion_basico_neg double precision,
    vales_neg character varying(100),
    fecha_inicio timestamp without time zone,
    fecha_inicio_neg timestamp without time zone
);
     DROP TABLE public.remuneracion;
       public         pool_recursos_qa    false    204            �            1259    16783 	   solicitud    TABLE     !  CREATE TABLE public.solicitud (
    id integer DEFAULT nextval('public.id_solicitud'::regclass) NOT NULL,
    id_aprobador integer NOT NULL,
    id_jefe_directo integer NOT NULL,
    id_puesto integer NOT NULL,
    id_puesto_tipo character varying(50) NOT NULL,
    cantidad integer NOT NULL,
    id_modalidad integer NOT NULL,
    id_modalidad_tipo character varying(50) NOT NULL,
    fecha_estimada_inicio date NOT NULL,
    id_plazo integer NOT NULL,
    id_plazo_tipo character varying(50) NOT NULL,
    nombre_cliente character varying(300),
    descripcion_servicio character varying(100),
    volumen_motivo character(20),
    inicio_estimado_tiempo date,
    estimacion_duracion_tiempo character varying(100),
    observaciones character varying(300),
    descripcion character varying(200),
    remoneracion character(20),
    fecha_registro timestamp without time zone NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_modificacion timestamp without time zone,
    usuario_modificacion character varying(50),
    estado integer NOT NULL,
    estado_vicepresidencia integer,
    glosa character varying(100),
    sociedad character varying(100),
    lider_uo character varying(100),
    codigo_uo character(50),
    descripcion_uo character varying(100),
    cod_divicion character varying(50),
    cod_sub_div character varying(50),
    sctr character varying(100),
    id_area_personal character varying(100),
    id_relacion_personal character varying(100),
    file_dp character varying(500),
    direccion character varying(150)
);
    DROP TABLE public.solicitud;
       public         pool_recursos_qa    false    202            �            1259    16980    solicitud_baja    TABLE     +  CREATE TABLE public.solicitud_baja (
    id integer NOT NULL,
    id_trabajador integer,
    id_jefe integer,
    tipo_baja integer,
    tipo_cese_formal integer,
    tipo_cese_real integer,
    fecha_cese date,
    fecha_notificacion date,
    fecha_carta date,
    observaciones character(140)
);
 "   DROP TABLE public.solicitud_baja;
       public         postgres    false            �            1259    16976    solicitud_baja_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.solicitud_baja_id_seq
    START WITH 3
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.solicitud_baja_id_seq;
       public       postgres    false            �            1259    16978    solicitud_baja_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.solicitud_baja_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.solicitud_baja_id_seq1;
       public       postgres    false    212            [           0    0    solicitud_baja_id_seq1    SEQUENCE OWNED BY     P   ALTER SEQUENCE public.solicitud_baja_id_seq1 OWNED BY public.solicitud_baja.id;
            public       postgres    false    211            �            1259    16772    users    TABLE     �  CREATE TABLE public.users (
    id integer DEFAULT nextval('public.id_users'::regclass) NOT NULL,
    codigo character(20) NOT NULL,
    sociedad character varying(100) NOT NULL,
    codigo_division character(50) NOT NULL,
    nombre_division_personal character varying(100) NOT NULL,
    codigo_sub_division character(50) NOT NULL,
    nombres_sub_division character varying(100) NOT NULL,
    dni character(8) NOT NULL,
    nombres character varying(100) NOT NULL,
    apellido_paterno character varying(100) NOT NULL,
    apellido_materno character varying(100) NOT NULL,
    email_corp character varying(100) NOT NULL,
    email_personal character varying(100) NOT NULL,
    codigo_posicion character(20) NOT NULL,
    descripcion_posicion character varying(100) NOT NULL,
    codigo_centro_coste character(20) NOT NULL,
    centro_coste character varying(100) NOT NULL,
    codigo_funcion character(20) NOT NULL,
    funcion character varying(100) NOT NULL,
    codigo_ocupacion character(20) NOT NULL,
    ocupacion character varying(100) NOT NULL,
    codigo_unidad_org character(20) NOT NULL,
    unidad_organizativa character varying(100) NOT NULL,
    fecha_nac date NOT NULL,
    inicio_contrata date NOT NULL,
    fin_contrata date NOT NULL,
    cod_jefe character(20) NOT NULL,
    saldo_dias_vacaion character(20),
    saldo_dias_descanso character(20),
    categoria character varying(100)
);
    DROP TABLE public.users;
       public         pool_recursos_qa    false    199            �
           2604    16983    solicitud_baja id    DEFAULT     w   ALTER TABLE ONLY public.solicitud_baja ALTER COLUMN id SET DEFAULT nextval('public.solicitud_baja_id_seq1'::regclass);
 @   ALTER TABLE public.solicitud_baja ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    211    212    212            P          0    16887    candidato_solicitud 
   TABLE DATA               b  COPY public.candidato_solicitud (id, id_solicitud, nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, disponibilidad, email, file_cv, observaciones, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, estado, id_sede_entrevista, contacto_sede, fecha_entrevista, prioridad, codigo_posicion) FROM stdin;
    public       pool_recursos_qa    false    207   �h       N          0    16873    centro_costo 
   TABLE DATA               �   COPY public.centro_costo (id, id_solicitud, centro_costo, descuento_costo, porcentaje, fecha_registro, usuario_registro, fecha_modificacion, suario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    205   {j       J          0    16806    detalle_solicitud 
   TABLE DATA               �   COPY public.detalle_solicitud (id_grupo, id_grupo_tipo, id_solicitud, descripcion, fecha_registro, usuario_registro, fecha_nodificacion, usuario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    201   �j       E          0    16735    grupo 
   TABLE DATA               �   COPY public.grupo (id, grupo, descripcion, detalle, fecha_registro, usuario_registro, fecha_nodificacion, usuario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    196   yk       L          0    16858    remuneracion 
   TABLE DATA               ,  COPY public.remuneracion (id, solicitud_id, tipo_moneda, remuneracion_basico, vales, asig_movilidad, asignacion_otros, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, estado, tipo_moneda_neg, remuneracion_basico_neg, vales_neg, fecha_inicio, fecha_inicio_neg) FROM stdin;
    public       pool_recursos_qa    false    203   �l       I          0    16783 	   solicitud 
   TABLE DATA               O  COPY public.solicitud (id, id_aprobador, id_jefe_directo, id_puesto, id_puesto_tipo, cantidad, id_modalidad, id_modalidad_tipo, fecha_estimada_inicio, id_plazo, id_plazo_tipo, nombre_cliente, descripcion_servicio, volumen_motivo, inicio_estimado_tiempo, estimacion_duracion_tiempo, observaciones, descripcion, remoneracion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, estado, estado_vicepresidencia, glosa, sociedad, lider_uo, codigo_uo, descripcion_uo, cod_divicion, cod_sub_div, sctr, id_area_personal, id_relacion_personal, file_dp, direccion) FROM stdin;
    public       pool_recursos_qa    false    200   m       T          0    16980    solicitud_baja 
   TABLE DATA               �   COPY public.solicitud_baja (id, id_trabajador, id_jefe, tipo_baja, tipo_cese_formal, tipo_cese_real, fecha_cese, fecha_notificacion, fecha_carta, observaciones) FROM stdin;
    public       postgres    false    212   yp       G          0    16772    users 
   TABLE DATA               �  COPY public.users (id, codigo, sociedad, codigo_division, nombre_division_personal, codigo_sub_division, nombres_sub_division, dni, nombres, apellido_paterno, apellido_materno, email_corp, email_personal, codigo_posicion, descripcion_posicion, codigo_centro_coste, centro_coste, codigo_funcion, funcion, codigo_ocupacion, ocupacion, codigo_unidad_org, unidad_organizativa, fecha_nac, inicio_contrata, fin_contrata, cod_jefe, saldo_dias_vacaion, saldo_dias_descanso, categoria) FROM stdin;
    public       pool_recursos_qa    false    198   �p       \           0    0    id_candidato_solicitud    SEQUENCE SET     E   SELECT pg_catalog.setval('public.id_candidato_solicitud', 12, true);
            public       pool_recursos_qa    false    208            ]           0    0    id_centro_costo    SEQUENCE SET     >   SELECT pg_catalog.setval('public.id_centro_costo', 1, false);
            public       pool_recursos_qa    false    206            ^           0    0    id_grupo    SEQUENCE SET     7   SELECT pg_catalog.setval('public.id_grupo', 17, true);
            public       pool_recursos_qa    false    197            _           0    0    id_remoneracion    SEQUENCE SET     =   SELECT pg_catalog.setval('public.id_remoneracion', 3, true);
            public       pool_recursos_qa    false    204            `           0    0    id_solicitud    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.id_solicitud', 44, true);
            public       pool_recursos_qa    false    202            a           0    0    id_users    SEQUENCE SET     6   SELECT pg_catalog.setval('public.id_users', 2, true);
            public       pool_recursos_qa    false    199            b           0    0    solicitud_baja_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.solicitud_baja_id_seq', 3, false);
            public       postgres    false    210            c           0    0    solicitud_baja_id_seq1    SEQUENCE SET     E   SELECT pg_catalog.setval('public.solicitud_baja_id_seq1', 1, false);
            public       postgres    false    211            �
           2606    16894 ,   candidato_solicitud candidato_solicitud_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.candidato_solicitud
    ADD CONSTRAINT candidato_solicitud_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.candidato_solicitud DROP CONSTRAINT candidato_solicitud_pkey;
       public         pool_recursos_qa    false    207            �
           2606    16877    centro_costo centro_costo_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.centro_costo
    ADD CONSTRAINT centro_costo_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.centro_costo DROP CONSTRAINT centro_costo_pkey;
       public         pool_recursos_qa    false    205            �
           2606    16739    grupo grupo_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT grupo_pkey PRIMARY KEY (id, grupo);
 :   ALTER TABLE ONLY public.grupo DROP CONSTRAINT grupo_pkey;
       public         pool_recursos_qa    false    196    196            �
           2606    16862    remuneracion remoneracion_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.remuneracion
    ADD CONSTRAINT remoneracion_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.remuneracion DROP CONSTRAINT remoneracion_pkey;
       public         pool_recursos_qa    false    203            �
           2606    16790    solicitud solicitud_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_pkey;
       public         pool_recursos_qa    false    200            �
           2606    16779    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         pool_recursos_qa    false    198            �
           2606    16895 9   candidato_solicitud candidato_solicitud_id_solicitud_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.candidato_solicitud
    ADD CONSTRAINT candidato_solicitud_id_solicitud_fkey FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id);
 c   ALTER TABLE ONLY public.candidato_solicitud DROP CONSTRAINT candidato_solicitud_id_solicitud_fkey;
       public       pool_recursos_qa    false    200    207    2749            �
           2606    16878 +   centro_costo centro_costo_id_solicitud_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.centro_costo
    ADD CONSTRAINT centro_costo_id_solicitud_fkey FOREIGN KEY (id_solicitud) REFERENCES public.centro_costo(id);
 U   ALTER TABLE ONLY public.centro_costo DROP CONSTRAINT centro_costo_id_solicitud_fkey;
       public       pool_recursos_qa    false    2753    205    205            �
           2606    16809 1   detalle_solicitud detalle_solicitud_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_solicitud
    ADD CONSTRAINT detalle_solicitud_id_grupo_fkey FOREIGN KEY (id_grupo, id_grupo_tipo) REFERENCES public.grupo(id, grupo);
 [   ALTER TABLE ONLY public.detalle_solicitud DROP CONSTRAINT detalle_solicitud_id_grupo_fkey;
       public       pool_recursos_qa    false    2745    196    196    201    201            �
           2606    16814 5   detalle_solicitud detalle_solicitud_id_solicitud_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_solicitud
    ADD CONSTRAINT detalle_solicitud_id_solicitud_fkey FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id);
 _   ALTER TABLE ONLY public.detalle_solicitud DROP CONSTRAINT detalle_solicitud_id_solicitud_fkey;
       public       pool_recursos_qa    false    201    200    2749            �
           2606    16863 +   remuneracion remoneracion_solicitud_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.remuneracion
    ADD CONSTRAINT remoneracion_solicitud_id_fkey FOREIGN KEY (solicitud_id) REFERENCES public.solicitud(id);
 U   ALTER TABLE ONLY public.remuneracion DROP CONSTRAINT remoneracion_solicitud_id_fkey;
       public       pool_recursos_qa    false    2749    203    200            �
           2606    16796 %   solicitud solicitud_id_modalidad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_modalidad_fkey FOREIGN KEY (id_modalidad, id_modalidad_tipo) REFERENCES public.grupo(id, grupo);
 O   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_modalidad_fkey;
       public       pool_recursos_qa    false    200    2745    196    196    200            �
           2606    16801 !   solicitud solicitud_id_plazo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_plazo_fkey FOREIGN KEY (id_plazo, id_plazo_tipo) REFERENCES public.grupo(id, grupo);
 K   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_plazo_fkey;
       public       pool_recursos_qa    false    200    2745    196    196    200            �
           2606    16791 "   solicitud solicitud_id_puesto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_puesto_fkey FOREIGN KEY (id_puesto, id_puesto_tipo) REFERENCES public.grupo(id, grupo);
 L   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_puesto_fkey;
       public       pool_recursos_qa    false    2745    196    196    200    200            P   �  x�͔�R�0���S����P�INv<�L�[/�ЊC�8�ۻ+����(ʄ�����o�U L�<�)̲g]�C��8�Qy��k]�\FEy�Z�8��tV�@��q����:��������:�����	�T�����X���U���Q����"�҆�����	��p0�$ttR�=�/��z0V��:�@˝B�7�́�λjwG����g ��Kٸ{\���;������F.Q�7I��ߢ,n��;r:ʜXG�7e����b����ބKHu��I��PH	?#%Hw�nF�� Q��C
�����Ց������Ot� �I\����M��r��a����Q v�7r�q�;pa�I�v@��NC�eM�?��}��2�-�� �*�      N      x������ � �      J   �   x���;�0�ھțu>.�(P �����n�a$�O3���a~���%HM�rJ�ӆ�k��k�bK��Rî�
�,+qa�Y�@ᘥ�WP�e���8�sl�X��rc)��r+(��r+(����o�~���,1���K���
���0NӼ.�x��Tgb����Z�s�^����j�2_�պ?!Z����Bh������B��c�urd      E   #  x����n�0E��+���#I�� m�v1�T�X`��F<�~~i+R[�F�s]�N1/(��#/ �3�wG���sN_�?NEo�YN�rH!�9~�iV�Yd���I�Z���NGFQ(�R����� z3�]|?D-mλ�ND;��?�04��b�_ΐ�X��L�AƜr< �B�́Y�b	��ߎ]���Fӟ� BLwX5�TW7��
,�A]U%*�����(;y��`�1��`�Ƕ�M��j2H7+i!/��D%V�A�]I������t{�+Q�\}sq��|�8�lt�2      L   a   x�3�41�4�4500�4bCS 1-u,u�8=����9c�@(�iRԠ��B�
V`�e�ib4��2$����+7F7B�W� S��      I   L  x���n�@���S�8�?�����QG���ecӈ
Cv}�>C_���� ^�M�J��^0�2����0
T��O��| ��G���Q8�ɰ��=��p{~��,*�0��xgh�%�U���x���@�����BJ�k)(���a�&�0>�.'�p
w7j�����q	�>[<bƣU�(O�d?E��k��RI��G)Lp`h�&N6i��X�񣂔�Y�$)@r�OP��O�4�
�,�Ds���J�Ae�63�	�v&���wա�:pu�*u�Z��TKԝ�J�ɫԝ�J UԖ�)��!�١��)�Z�1�X�Ab���0dM���ך���5)�|'���$kT6�2�nQ��$Uʲҫ�H�m�G� �"�,[	��� ST8��V$#{tX��^���+"��Jbv�7��fB3;Q������ ���k��Z� �Ԯ����{/��XA0��*~�V#��Nʺ���Iq�
�^Nඨ������l�˼B�"���x}C*q$��Ύ��Xʩ�����Q�v¦�z��o$���6�H�ȕ�;�-�qV7L[�PY!�.�lv�.�ج�a�T��, à�߹�9���Fs��a�)a8�0�?�~�j�zl�O`�	����)2u�Mm8�����ܢ?Q���]���M^�s���"��BE�cbzf���F2|�s0%��<�N�b�8��}��4n�
iy�;����C_V�r�-�ͳ�e���z�OhwӋ��<0�ѵ�/��8�����!}C��X:-9[���gЁ��/tej��*E.��zLį�L��?�Z��wg���Rs��      T      x������ � �      G     x����N�0��ӧ�H�g�pۣGc��B#5��в�o�dc���	)0�|C�_%!$��mʤr;��&>��������E{�}��a�&��/���i���f��9Y��L@eY���޸�U�į=��P��R�j�I#�:�	J��N���(+�e�*��9�T2�\���Lk��Ɲ���[!Ԯo���Nٺ����5|�b�Ƹ3�7F���k+>ؐ�ȇ��-�ݫ@�u�®P��M�W�����$W��k���ַ�     