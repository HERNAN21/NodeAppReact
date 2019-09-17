--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-13 20:08:58

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

--
-- TOC entry 2896 (class 0 OID 16887)
-- Dependencies: 207
-- Data for Name: candidato_solicitud; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.candidato_solicitud VALUES (5, 35, 'Hernan', 'Rojas', 'Utani', 1, '70586952            ', 1, 'test@gmail.com', 'asd', 'asd', '2019-09-10', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidato_solicitud VALUES (6, 35, 'Hernan', 'Rojas', 'Utani', 1, '70586952            ', 1, 'test@gmail.com', 'asd', 'asd', '2019-09-10', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidato_solicitud VALUES (7, 25, 'Hernan', 'Rojas', 'Utani', 1, '70542836            ', 1, 'hernanrojasutani@gmail.com', '', 'Glosa descripcion', '2019-09-11', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidato_solicitud VALUES (8, 25, 'Hernan', 'Rojas', 'Utani', 1, '70542836            ', 1, 'hernanrojasutani@gmail.com', '', 'Glosa descripcion', '2019-09-11', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidato_solicitud VALUES (9, 25, 'Hernan 2', 'Rojas', 'Utani', 1, '70542836            ', 1, 'hernanrojasutani@gmail.com', '', 'Glosa descripcion', '2019-09-11', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidato_solicitud VALUES (10, 33, 'Test ', 'Test', 'Test', 2, '754856952           ', 2, 'test@gmail.com', '', 'Test descripcion', '2019-09-11', 'HROJAS', NULL, NULL, 0, 1, '123                                               ', '2019-10-01 00:00:00', '0         ', NULL);
INSERT INTO public.candidato_solicitud VALUES (2, 2, 'Hernan', 'Rojas', 'Utani', 1, '70586952            ', 1, 'test@gmail.com', 'asd', 'asd', '2019-09-10', 'HROJAS', NULL, NULL, 2, 2, '2                                                 ', '2019-09-12 15:05:29.013031', '2         ', 'A000-002                                          ');
INSERT INTO public.candidato_solicitud VALUES (1, 1, 'Hernan', 'rojas', 'Utani', 1, '50458569            ', 1, 'hernanrojasutani@gmail.com', 'file/50458569/50458569.pdf', 'nada', '2019-09-10', 'HROJAS', NULL, NULL, 2, 2, '2                                                 ', '2019-09-12 15:05:29.015803', '2         ', 'A000-001                                          ');
INSERT INTO public.candidato_solicitud VALUES (11, 43, 'Hernan', 'Rojas', 'Utani', 1, '70543920            ', 1, 'hernanrojasutani@gmail.com', '', 'Analista y programador web', '2019-09-13', 'HROJAS', NULL, NULL, 0, 1, '1234                                              ', '2019-10-01 00:00:00', '0         ', NULL);
INSERT INTO public.candidato_solicitud VALUES (12, 43, 'Alex', 'Rojas', 'Utani', 1, '70548563            ', 1, 'alex@gmail.com', '', 'Analista y programador web', '2019-09-13', 'HROJAS', NULL, NULL, 0, 1, '1235                                              ', '2019-10-01 00:00:00', '0         ', NULL);
INSERT INTO public.candidato_solicitud VALUES (4, 36, 'Hernan', 'Rojas', 'Utani', 1, '70586952            ', 1, 'test@gmail.com', 'asd', 'asd', '2019-09-10', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, '7777                                              ');
INSERT INTO public.candidato_solicitud VALUES (3, 36, 'Hernan', 'Rojas', 'Utani', 1, '70586952            ', 1, 'test@gmail.com', 'asd', 'asd', '2019-09-10', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, '5555                                              ');
INSERT INTO public.candidato_solicitud VALUES (14, 46, 'Test2', 'TestP2', 'TestM2', 1, '70545852            ', 1, 'wpereyrac@ransa.net', '', 'asdasd', '2019-09-13', 'HROJAS', NULL, NULL, 0, 1, 'Test                                              ', '2019-10-01 00:00:00', '0         ', NULL);
INSERT INTO public.candidato_solicitud VALUES (13, 46, 'Test', 'TestP', 'TestM', 1, '70545852            ', 1, 'wpereyrac@ransa.net', '', 'asdasd', '2019-09-13', 'HROJAS', NULL, NULL, 0, 1, 'Test                                              ', '2019-10-01 00:00:00', '0         ', NULL);


--
-- TOC entry 2894 (class 0 OID 16873)
-- Dependencies: 205
-- Data for Name: centro_costo; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--



--
-- TOC entry 2890 (class 0 OID 16806)
-- Dependencies: 201
-- Data for Name: detalle_solicitud; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.detalle_solicitud VALUES (4, 'EQUIPO', 1, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (5, 'EQUIPO', 1, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 1, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 2, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 2, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 20, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 20, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 21, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 21, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 22, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 23, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 24, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 25, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 26, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 27, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 28, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 29, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 30, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 31, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 32, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 33, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 34, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 35, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (8, 'EQUIPO', 36, '', '2019-09-05', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 37, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 37, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 38, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 38, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 39, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 39, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (10, 'ACCESOS', 39, '', '2019-09-06', 'HROJAS', NULL, NULL, 0);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 40, '', '2019-09-06', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 40, '', '2019-09-06', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 40, '', '2019-09-06', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 41, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 41, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 41, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 42, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 42, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 42, '', '2019-09-09', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 43, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 43, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 43, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 44, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 44, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 44, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 45, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 45, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 45, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 46, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 46, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 46, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (7, 'EQUIPO', 47, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (9, 'EQUIPO', 47, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);
INSERT INTO public.detalle_solicitud VALUES (11, 'ACCESOS', 47, '', '2019-09-13', 'HROJAS', NULL, NULL, 1);


--
-- TOC entry 2885 (class 0 OID 16735)
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
-- TOC entry 2892 (class 0 OID 16858)
-- Dependencies: 203
-- Data for Name: remuneracion; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.remuneracion VALUES (2, 42, 1, 5000, '200', '150', '10', '2019-09-12', 'HROJAS', NULL, NULL, 0, 2, 7000, '500.00', NULL, '2019-09-12 00:00:00');
INSERT INTO public.remuneracion VALUES (3, 43, 1, 6000, 'Test', 'Test', 'Test', '2019-09-13', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.remuneracion VALUES (4, 47, 1, 12345, 'asdasd', '123', '123', '2019-09-13', 'HROJAS', NULL, NULL, 0, 1, 123455, '12321', NULL, '2019-10-01 00:00:00');


--
-- TOC entry 2889 (class 0 OID 16783)
-- Dependencies: 200
-- Data for Name: solicitud; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.solicitud VALUES (3, 1, 2, 1, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-30', 17, 'PLAZO', 'HTest', 'Servicio des', 'volumen             ', '2019-09-04', 'estimacion', 'observaciones', 'a', '2500.00             ', '2019-09-04 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (4, 2, 2, 2, 'PUESTO', 1, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-04 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (5, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-04 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (7, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (10, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (11, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (12, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (13, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (14, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (15, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (16, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (17, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (18, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (19, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (20, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (21, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (24, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (25, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (26, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (27, 1, 2, 2, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (28, 1, 2, 2, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (29, 2, 1, 1, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (2, 1, 2, 1, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-04', 17, 'PLAZO', 'HTest', 'Servicio des', 'volumen             ', '2019-09-04', 'estimacion', 'observaciones', 'a', '2500.00             ', '2019-09-04 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (6, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (8, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (9, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (22, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (23, 2, 2, 2, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (35, 1, 2, 1, 'PUESTO', 5, 12, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'test', 'test', '                    ', '2019-10-02', '3 meses', '', '', '                    ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 2, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (38, 2, 1, 2, 'PUESTO', 2, 14, 'MODALIDAD', '2019-10-03', 17, 'PLAZO', 'Juan Perez', '', 'Salud               ', '2019-10-03', '6 meses', '', '', '                    ', '2019-09-06 00:00:00', 'HROJAS', NULL, NULL, 7, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (36, 1, 2, 2, 'PUESTO', 3, 14, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'Juan Perez', '', 'Vacaciones          ', '2019-10-01', '1 mes', '', '', '                    ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 2, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (32, 2, 1, 3, 'PUESTO', 3, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 1, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (30, 2, 1, 1, 'PUESTO', 10, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (33, 2, 1, 3, 'PUESTO', 5, 15, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 7, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (1, 1, 2, 1, 'PUESTO', 5, 12, 'MODALIDAD', '2019-09-04', 17, 'PLAZO', 'HTest', 'Servicio des', 'volumen             ', '2019-09-04', 'estimacion', 'observaciones', 'a', '2500.00             ', '2019-09-04 00:00:00', 'HROJAS', NULL, NULL, 1, 0, 'asd', 'asd', 'asd', 'asd                                               ', 'aa', 'aaa', 'aaa', 'asd', 'asd', 'asd', 'asd', 'asd');
INSERT INTO public.solicitud VALUES (47, 1, 2, 1, 'PUESTO', 8, 12, 'MODALIDAD', '2019-10-02', 17, 'PLAZO', 'Test', 'Test', '                    ', '2019-10-02', 'test', '', '', '                    ', '2019-09-13 22:36:30.317778', 'HROJAS', NULL, NULL, 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (45, 2, 1, 1, 'PUESTO', 1, 14, 'MODALIDAD', '2019-09-13', 17, 'PLAZO', 'Test', '', 'Test                ', '2019-10-05', '4 años', '', '', '                    ', '2019-09-13 16:01:35.309733', 'HROJAS', NULL, NULL, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (43, 1, 2, 1, 'PUESTO', 2, 14, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'Test', '', 'Test                ', '2019-10-01', '1 año', '', '', '                    ', '2019-09-13 13:23:27.719764', 'HROJAS', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (40, 1, 2, 1, 'PUESTO', 10, 12, 'MODALIDAD', '2019-11-21', 17, 'PLAZO', 'Hrojas Utani', 'Analista', '                    ', '2019-10-21', '1 año', '', '', '                    ', '2019-09-06 00:00:00', 'HROJAS', NULL, NULL, 2, 1, 'asdasd', 'asd', '2', 'asda                                              ', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', '2');
INSERT INTO public.solicitud VALUES (34, 2, 1, 3, 'PUESTO', 6, 15, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 4, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (41, 2, 1, 1, 'PUESTO', 5, 14, 'MODALIDAD', '2019-10-02', 17, 'PLAZO', 'asd', '', 'asd                 ', '2019-09-09', 'asd', '', '', '                    ', '2019-09-09 00:00:00', 'HROJAS', NULL, NULL, 6, 4, 'Test Glosa', 'Test Sociedad', '2', 'Codigo Uo                                         ', 'Descripcion Uo', 'Cod Div ', 'Cod Div', 'SCTR', 'Area', 'Relacion Lab', 'Test file', '2');
INSERT INTO public.solicitud VALUES (44, 2, 1, 2, 'PUESTO', 5, 12, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'Test', 'Test', '                    ', '2019-10-02', '3 meses', '', '', '                    ', '2019-09-13 13:41:27.775825', 'HROJAS', NULL, NULL, 6, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (31, 2, 1, 2, 'PUESTO', 2, 12, 'MODALIDAD', '2019-09-20', 17, 'PLAZO', 'Herna Rojas Utani', 'a', 'a                   ', '2019-10-01', '3 meses', 'Ninguno', 'Descripcion detalls', '5000.00             ', '2019-09-05 00:00:00', 'HROJAS', NULL, NULL, 6, 5, '', '', '', '                                                  ', '', '', '', '', '', '', '', '');
INSERT INTO public.solicitud VALUES (37, 1, 2, 3, 'PUESTO', 8, 15, 'MODALIDAD', '2019-10-30', 17, 'PLAZO', 'Hrojas ', 'Detallar', 'Remplazo            ', '2019-10-03', '5 meses', '', '', '                    ', '2019-09-06 00:00:00', 'HROJAS', NULL, NULL, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (42, 2, 1, 1, 'PUESTO', 5, 14, 'MODALIDAD', '2019-10-01', 17, 'PLAZO', 'test', '', 'test                ', '2019-11-02', 'rest', '', '', '                    ', '2019-09-09 00:00:00', 'HROJAS', NULL, NULL, 3, 4, 'Test Glosa', 'Sociedad', '2', 'A001                                              ', 'Desc', 'D00012545', '0212121', 'asda', 'asaa', 'aaaa', 'asdasd', '2');
INSERT INTO public.solicitud VALUES (39, 2, 1, 1, 'PUESTO', 5, 14, 'MODALIDAD', '2019-10-10', 17, 'PLAZO', 'Juan ', '', 'Test                ', '2019-10-15', '1 año', '', '', '                    ', '2019-09-06 00:00:00', 'HROJAS', NULL, NULL, 7, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.solicitud VALUES (46, 1, 2, 2, 'PUESTO', 5, 12, 'MODALIDAD', '2019-10-05', 17, 'PLAZO', 'HTest', 'Test', '                    ', '2019-11-02', '3 meses', '', '', '                    ', '2019-09-13 20:50:05.71444', 'HROJAS', NULL, NULL, 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);


--
-- TOC entry 2900 (class 0 OID 16980)
-- Dependencies: 212
-- Data for Name: solicitud_baja; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.solicitud_baja VALUES (1, 1, 2, 18, 20, 22, '2019-10-01', '2019-10-02', '2019-10-02', 'Test                                                                                                                                        ');
INSERT INTO public.solicitud_baja VALUES (2, 1, 2, 18, 21, 23, '2019-10-02', '2019-10-02', '2019-10-05', 'asd                                                                                                                                         ');


--
-- TOC entry 2887 (class 0 OID 16772)
-- Dependencies: 198
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: pool_recursos_qa
--

INSERT INTO public.users VALUES (1, '0001                ', 'test', '0001                                              ', 'Tes div', '0001                                              ', 'Test dub div', '70543963', 'Hrojas', 'Rojas', 'Utani', 'hrojas@summit.com.pe', 'hernanrojasutani@gmail.com', '0001                ', 'Test Posicion', '001                 ', 'Test', '0111                ', 'Test ', '012                 ', 'asd', '02                  ', 'asd', '2019-09-04', '2019-09-04', '2019-09-04', '002                 ', '5000                ', '600                 ', '1000');
INSERT INTO public.users VALUES (2, '0002                ', 'Test 2', '0002                                              ', 'Test div 1', '0002                                              ', 'Test div 2', '70546952', 'Hrojas2', 'test', 'testapm', 'test@gmail.com', 'test@hotmail.com', '0002                ', 'Test Posicion 2', '002                 ', 'test centro coste', '0222                ', 'Test', '013                 ', 'asdd', '03                  ', 'asddd', '2019-09-04', '2019-09-04', '2019-09-04', '003                 ', '3000                ', '500                 ', '123');


--
-- TOC entry 2907 (class 0 OID 0)
-- Dependencies: 208
-- Name: id_candidato_solicitud; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_candidato_solicitud', 14, true);


--
-- TOC entry 2908 (class 0 OID 0)
-- Dependencies: 206
-- Name: id_centro_costo; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_centro_costo', 1, false);


--
-- TOC entry 2909 (class 0 OID 0)
-- Dependencies: 197
-- Name: id_grupo; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_grupo', 23, true);


--
-- TOC entry 2910 (class 0 OID 0)
-- Dependencies: 204
-- Name: id_remoneracion; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_remoneracion', 4, true);


--
-- TOC entry 2911 (class 0 OID 0)
-- Dependencies: 202
-- Name: id_solicitud; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_solicitud', 47, true);


--
-- TOC entry 2912 (class 0 OID 0)
-- Dependencies: 199
-- Name: id_users; Type: SEQUENCE SET; Schema: public; Owner: pool_recursos_qa
--

SELECT pg_catalog.setval('public.id_users', 2, true);


--
-- TOC entry 2913 (class 0 OID 0)
-- Dependencies: 210
-- Name: solicitud_baja_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_baja_id_seq', 3, false);


--
-- TOC entry 2914 (class 0 OID 0)
-- Dependencies: 211
-- Name: solicitud_baja_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_baja_id_seq1', 2, true);


-- Completed on 2019-09-13 20:08:59

--
-- PostgreSQL database dump complete
--

