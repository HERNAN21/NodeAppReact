PGDMP              	            w            db_playground    11.5    11.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            !           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            "           1262    16734    db_playground    DATABASE     �   CREATE DATABASE db_playground WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Peru.1252' LC_CTYPE = 'Spanish_Peru.1252';
    DROP DATABASE db_playground;
             postgres    false            �            1259    16806    detalle_solicitud    TABLE     �  CREATE TABLE public.detalle_solicitud (
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
       public         pool_recursos_qa    false    197            �            1259    16819    id_solicitud    SEQUENCE     u   CREATE SEQUENCE public.id_solicitud
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
       public       pool_recursos_qa    false            �            1259    16783 	   solicitud    TABLE     !  CREATE TABLE public.solicitud (
    id integer DEFAULT nextval('public.id_solicitud'::regclass) NOT NULL,
    id_aprobador character varying(100) NOT NULL,
    id_jefe_directo character varying(100) NOT NULL,
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
    fecha_registro date NOT NULL,
    usuario_registro character varying(50) NOT NULL,
    fecha_nodificacion date,
    usuario_modificacion character varying(50),
    estado integer NOT NULL
);
    DROP TABLE public.solicitud;
       public         pool_recursos_qa    false    202            �            1259    16772    users    TABLE     �  CREATE TABLE public.users (
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
       public         pool_recursos_qa    false    199                      0    16806    detalle_solicitud 
   TABLE DATA               �   COPY public.detalle_solicitud (id_grupo, id_grupo_tipo, id_solicitud, descripcion, fecha_registro, usuario_registro, fecha_nodificacion, usuario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    201   �+                 0    16735    grupo 
   TABLE DATA               �   COPY public.grupo (id, grupo, descripcion, detalle, fecha_registro, usuario_registro, fecha_nodificacion, usuario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    196   ,,                 0    16783 	   solicitud 
   TABLE DATA               �  COPY public.solicitud (id, id_aprobador, id_jefe_directo, id_puesto, id_puesto_tipo, cantidad, id_modalidad, id_modalidad_tipo, fecha_estimada_inicio, id_plazo, id_plazo_tipo, nombre_cliente, descripcion_servicio, volumen_motivo, inicio_estimado_tiempo, estimacion_duracion_tiempo, observaciones, descripcion, remoneracion, fecha_registro, usuario_registro, fecha_nodificacion, usuario_modificacion, estado) FROM stdin;
    public       pool_recursos_qa    false    200   Q-                 0    16772    users 
   TABLE DATA               �  COPY public.users (id, codigo, sociedad, codigo_division, nombre_division_personal, codigo_sub_division, nombres_sub_division, dni, nombres, apellido_paterno, apellido_materno, email_corp, email_personal, codigo_posicion, descripcion_posicion, codigo_centro_coste, centro_coste, codigo_funcion, funcion, codigo_ocupacion, ocupacion, codigo_unidad_org, unidad_organizativa, fecha_nac, inicio_contrata, fin_contrata, cod_jefe, saldo_dias_vacaion, saldo_dias_descanso, categoria) FROM stdin;
    public       pool_recursos_qa    false    198   <.       #           0    0    id_grupo    SEQUENCE SET     7   SELECT pg_catalog.setval('public.id_grupo', 17, true);
            public       pool_recursos_qa    false    197            $           0    0    id_solicitud    SEQUENCE SET     :   SELECT pg_catalog.setval('public.id_solicitud', 5, true);
            public       pool_recursos_qa    false    202            %           0    0    id_users    SEQUENCE SET     6   SELECT pg_catalog.setval('public.id_users', 2, true);
            public       pool_recursos_qa    false    199            �
           2606    16739    grupo grupo_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT grupo_pkey PRIMARY KEY (id, grupo);
 :   ALTER TABLE ONLY public.grupo DROP CONSTRAINT grupo_pkey;
       public         pool_recursos_qa    false    196    196            �
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
           2606    16809 1   detalle_solicitud detalle_solicitud_id_grupo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_solicitud
    ADD CONSTRAINT detalle_solicitud_id_grupo_fkey FOREIGN KEY (id_grupo, id_grupo_tipo) REFERENCES public.grupo(id, grupo);
 [   ALTER TABLE ONLY public.detalle_solicitud DROP CONSTRAINT detalle_solicitud_id_grupo_fkey;
       public       pool_recursos_qa    false    2707    196    201    201    196            �
           2606    16814 5   detalle_solicitud detalle_solicitud_id_solicitud_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_solicitud
    ADD CONSTRAINT detalle_solicitud_id_solicitud_fkey FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id);
 _   ALTER TABLE ONLY public.detalle_solicitud DROP CONSTRAINT detalle_solicitud_id_solicitud_fkey;
       public       pool_recursos_qa    false    200    2711    201            �
           2606    16796 %   solicitud solicitud_id_modalidad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_modalidad_fkey FOREIGN KEY (id_modalidad, id_modalidad_tipo) REFERENCES public.grupo(id, grupo);
 O   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_modalidad_fkey;
       public       pool_recursos_qa    false    2707    196    196    200    200            �
           2606    16801 !   solicitud solicitud_id_plazo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_plazo_fkey FOREIGN KEY (id_plazo, id_plazo_tipo) REFERENCES public.grupo(id, grupo);
 K   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_plazo_fkey;
       public       pool_recursos_qa    false    196    196    200    200    2707            �
           2606    16791 "   solicitud solicitud_id_puesto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_id_puesto_fkey FOREIGN KEY (id_puesto, id_puesto_tipo) REFERENCES public.grupo(id, grupo);
 L   ALTER TABLE ONLY public.solicitud DROP CONSTRAINT solicitud_id_puesto_fkey;
       public       pool_recursos_qa    false    200    196    196    200    2707               ?   x�3�t���4��420��5 "SN� /�`�?2�2%J�9Q�,`���$JU� T	'�           x����j�0@��+�-�13�����j2�ٔ�4��1��k)�В���.�9�����9�E�Ar��K�<����4>z����i���8��S)D4Ǐ9͊8�̪��z���j(>����P��6���=�A�fv�t�E-m��L'�tk�f�a	�3d=֢3�.A�1����Bs`�C)��_A���jT�4�$nFyX����JT����Sv�*���`��c[˦T��lVN!���Des�+���q��iO���N�!�����5ӗ{�q>�R�B         �   x������0��ߧ�(��"TԊ���%j�H�HS}~������m����/��j;.69H�E���i�fP$G=�@���9&��ك��hn��VƉnu�����~8��sPC%D}���u>K��P�ދ���?����+��.��N��?� ��v��⵾z$���-�;]�Gf¡����mtY��/��	No#���(��9ӊ           x����N�0��ӧ�H�g�pۣGc��B#5��в�o�dc���	)0�|C�_%!$��mʤr;��&>��������E{�}��a�&��/���i���f��9Y��L@eY���޸�U�į=��P��R�j�I#�:�	J��N���(+�e�*��9�T2�\���Lk��Ɲ���[!Ԯo���Nٺ����5|�b�Ƹ3�7F���k+>ؐ�ȇ��-�ݫ@�u�®P��M�W�����$W��k���ַ�     