--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-13 10:47:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16735)
-- Name: grupo; Type: TABLE; Schema: public; Owner: pool_recursos_qa
--

CREATE TABLE public.grupo (
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


ALTER TABLE public.grupo OWNER TO pool_recursos_qa;

--
-- TOC entry 2852 (class 0 OID 16735)
-- Dependencies: 196
-- Data for Name: grupo; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.grupo VALUES (1, 'PUESTO', 'ANALISTA', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (2, 'PUESTO', 'PROGRAMADOR FRONTEND', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (3, 'PUESTO', 'PROGRAMADOR BACKEND', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (4, 'EQUIPO', 'Casco', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (5, 'EQUIPO', 'Botas', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (6, 'EQUIPO', 'Chaleco', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (7, 'EQUIPO', 'Laptop', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (8, 'EQUIPO', 'Anexo', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (9, 'EQUIPO', 'Celular', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (10, 'ACCESOS', 'AS400', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (11, 'ACCESOS', 'SAP', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (17, 'PLAZO', 'PLAZO 1', NULL, '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (12, 'MODALIDAD', 'Por inicio de nueva actividad', 'Por inicio de nueva actividad', '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (13, 'MODALIDAD', 'Por incremento de nueva actividad', 'Por incremento de nueva actividad', '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (14, 'MODALIDAD', 'Suplencia', 'Suplencia', '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (15, 'MODALIDAD', 'Temporada', 'Temporada', '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (16, 'MODALIDAD', 'Otros Tipos de Modalidad', 'Otros Tipos de Modalidad', '2019-09-03', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (18, 'TIPO_BAJA', 'Tipo baja 1', 'Tipo baja 1', '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (19, 'TIPO_BAJA', 'Tipo baja 2', 'Tipo baja 2', '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (20, 'TIPO_CESE_FORMAL', 'Tipo cese formal 1', 'Tipo cese formal 1', '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (21, 'TIPO_CESE_FORMAL', 'Tipo cese formal 2', 'Tipo cese formal 2', '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (22, 'TIPO_CESE_REAL', 'Tipo cese real 1', NULL, '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);
INSERT INTO public.grupo VALUES (23, 'TIPO_CESE_REAL', 'Tipo cese real 2', NULL, '2019-09-11', 'WPEREYRAC', NULL, NULL, 0);


--
-- TOC entry 2730 (class 2606 OID 16739)
-- Name: grupo grupo_pkey; Type: CONSTRAINT; Schema: public; Owner: pool_recursos_qa
--

ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT grupo_pkey PRIMARY KEY (id, grupo);


-- Completed on 2019-09-13 10:47:24

--
-- PostgreSQL database dump complete
--

