const express = require("express")
const api = express.Router()
const cors = require('cors')
const db = require("../database/db_local")
var https = require('https')
api.use(cors())
process.env.SECRET_KEY = 'secret'
const api_name = "/pdr_api/v1";


// Start api solicitud
// Parameters
api.get(api_name + '/service_grupo/:grupo', (req,res)=>{
    db.sequelize
        // .query('select * from grupo WHERE grupo = :grupo ',
            .query('select id as value, descripcion as label,* from grupo where grupo = :grupo',
            { replacements: { grupo: req.params.grupo }, type: db.sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            res.json(result);
        });
});

api.get(api_name + '/service_grupo', (req,res)=>{
    db.sequelize
        .query('select id as value, descripcion as label,* from grupo ',{type: db.sequelize.QueryTypes.SELECT })
        .then((result) => {
            res.json(result);
        });
});

// buscar usuario

api.get(api_name + '/aprobador/:codigo',(req,res)=>{
    db.sequelize
        .query('select * from users where codigo= :codigo ', {replacements:{codigo: req.params.codigo},type: db.sequelize.QueryTypes.SELECT})
        .then((result)=>{
            res.json(result);
        })
});

api.get(api_name + '/aprobador',(req,res)=>{
    var query = " select id,ltrim(codigo)as codigo,ltrim(sociedad)as sociedad,ltrim(codigo_division)as codigo_division, "+
                " ltrim(nombre_division_personal)as nombre_division_personal,ltrim(codigo_sub_division)as codigo_sub_division,"+
                " ltrim(nombres_sub_division)as nombres_sub_division,ltrim(dni)as dni,ltrim(nombres)as nombres,ltrim(apellido_paterno)as apellido_paterno,"+
                " ltrim(apellido_materno)as apellido_materno,ltrim(email_corp)as email_corp,ltrim(email_personal)as email_personal,"+
                " ltrim(codigo_posicion)as codigo_posicion,ltrim(descripcion_posicion)as descripcion_posicion,ltrim(codigo_centro_coste)as codigo_centro_coste,"+
                " ltrim(centro_coste)as centro_coste,ltrim(codigo_funcion)as codigo_funcion,ltrim(funcion)as funcion,ltrim(codigo_ocupacion)as codigo_ocupacion,"+
                " ltrim(ocupacion)as ocupacion,ltrim(codigo_unidad_org)as codigo_unidad_org,ltrim(unidad_organizativa)as unidad_organizativa,"+
                " fecha_nac,inicio_contrata,fin_contrata,ltrim(cod_jefe)as cod_jefe,"+
                " ltrim(saldo_dias_vacaion)as saldo_dias_vacaion,ltrim(saldo_dias_descanso)as saldo_dias_descanso,ltrim(categoria) as categoria "+
                " from users";
    db.sequelize
        .query(query, {type: db.sequelize.QueryTypes.SELECT})
        .then((result)=>{
            res.json(result);
        })
});

// Create Solicitud
api.post(api_name + '/solicitudes',(req,res)=>{
    var query = " insert into solicitud(id_aprobador,id_jefe_directo,id_puesto,id_puesto_tipo,cantidad,id_modalidad,id_modalidad_tipo,fecha_estimada_inicio, " +
                " id_plazo,id_plazo_tipo,nombre_cliente,descripcion_servicio,volumen_motivo,inicio_estimado_tiempo,estimacion_duracion_tiempo, "+
                " observaciones, descripcion,remoneracion,fecha_registro,usuario_registro,estado )";
    var data =" values("+req.body.id_aprobador+","+req.body.id_jefe_directo+","+req.body.id_puesto+",'"+req.body.id_puesto_tipo+"','"+req.body.cantidad+"',"+req.body.id_modalidad+",'"+req.body.id_modalidad_tipo+
                "','"+req.body.fecha_estimada_inicio+"',"+req.body.id_plazo+",'"+req.body.id_plazo_tipo+"','"+req.body.nombre_cliente+"','"+req.body.descripcion_servicio+
                "','"+req.body.volumen_motivo+"','"+req.body.inicio_estimado_tiempo+"','"+req.body.estimacion_duracion_tiempo+"','"+req.body.observaciones+
                "','"+req.body.descripcion+"','"+req.body.remoneracion+"',now(),'"+req.body.usuario_registro+"',"+req.body.estado+")";
    db.sequelize.query(query + data, {type: db.sequelize.QueryTypes.INSERT})
    .then(function(data){
        if (req.body.detalle_solicitud.length>0) {
            var query_detalls="insert into detalle_solicitud(id_solicitud,id_grupo,id_grupo_tipo,descripcion,fecha_registro,usuario_registro,estado)";
            for (let i = 0; i < req.body.detalle_solicitud.length; i++) {
                const element = req.body.detalle_solicitud[i];
                var data_detalls=" values((SELECT max(id) from solicitud),"+element.id_grupo+",'"+element.id_grupo_tipo+"','',now(),'"+req.body.usuario_registro+"',1) ";
                db.sequelize.query(query_detalls + data_detalls, {type: db.sequelize.QueryTypes.INSERT} )
                .then(function(){
                    res.json({
                        "respuesta" : "success",
                        "data" : data
                    });
                }).catch(function(err){
                    res.json({
                        "respuesta" : "error",
                        "data" : err
                    });
                })
            }
        }
    }).catch(function(err){
        res.json({
            "respuesta" : "error",
            "data" : err
        });
          console.log(err);
    });
    console.log(req.body);
})


api.post(api_name+'/solicitudestest',(req,res)=>{
    console.log(req.body.id_aprobador);
});

// Datos Aprobaciones Pendientes 
api.post(api_name+'/aprobacionespendientes',(req,res)=>{
    var query = "select "+
            // data solicitudd
            " sol.id,sol.id_aprobador,sol.id_jefe_directo,sol.id_puesto,sol.id_puesto_tipo,sol.cantidad,sol.id_modalidad,"+
            " sol.id_modalidad_tipo,sol.fecha_estimada_inicio,sol.id_plazo,sol.id_plazo_tipo,sol.nombre_cliente, "+
            " sol.descripcion_servicio,sol.volumen_motivo,sol.inicio_estimado_tiempo,sol.estimacion_duracion_tiempo, "+
            " sol.observaciones,sol.descripcion,sol.remoneracion,sol.fecha_registro,sol.usuario_registro, "+
            " sol.fecha_modificacion,sol.usuario_modificacion,sol.estado,sol.estado_vicepresidencia, "+
            " sol.glosa,sol.sociedad,sol.lider_uo,sol.codigo_uo,sol.descripcion_uo,sol.cod_divicion,sol.cod_sub_div, "+
            " sol.sctr,sol.id_area_personal,sol.id_relacion_personal,sol.file_dp,sol.direccion, "+

            // data users
            " us.id as id_apro,ltrim(us.codigo) as codigo_user,ltrim(us.sociedad)sociedad,us.codigo_division,us.nombre_division_personal,us.codigo_sub_division, "+
            " us.nombres_sub_division,us.dni,us.nombres, us.apellido_paterno,us.apellido_materno,us.email_corp, "+
            " us.email_personal,us.codigo_posicion,us.descripcion_posicion,us.codigo_centro_coste, "+
            " us.centro_coste,us.codigo_funcion,us.funcion,us.codigo_ocupacion,us.ocupacion,us.codigo_unidad_org,us.unidad_organizativa, "+
            " us.fecha_nac,us.inicio_contrata,us.fin_contrata,us.cod_jefe,us.saldo_dias_vacaion,us.saldo_dias_descanso,us.categoria, "+
            // data Jefe dir
            " j_d.id as id_jefe,ltrim(j_d.codigo) as codigo_jefe_dir, j_d.dni as dni_jefe,j_d.nombres as nombre_jefe, j_d.apellido_paterno as apellido_paterno_jefe, "+
            " j_d.apellido_materno as apellido_materno_jefe,j_d.email_corp as email_corp_jefe,j_d.email_personal as email_personal_jefe, "+
            // data grupo
            " puesto.id as puesto_id, puesto.grupo as puesto_grupo, puesto.descripcion as puesto_des, puesto.detalle as puesto_detalle, "+
            " modalidad.id as modalidad_id, modalidad.grupo as modalidad_grupo, modalidad.descripcion as modalidad_des, modalidad.detalle as modalidad_detalle,"+
            " plazo.id as plazo_id, plazo.grupo as plazo_grupo, plazo.descripcion as plazo_des, plazo.detalle as plazo_detalle "+
            " from solicitud as sol"+
            " inner join users as us on us.id=sol.id_aprobador "+
            " inner join users as j_d on j_d.id=sol.id_jefe_directo" +
            " inner join grupo as puesto on sol.id_puesto=puesto.id and sol.id_puesto_tipo=puesto.grupo "+
            " inner join grupo as modalidad on sol.id_modalidad=modalidad.id and sol.id_modalidad_tipo= modalidad.grupo "+
            " inner join grupo as plazo on sol.id_plazo=plazo.id and sol.id_plazo_tipo=plazo.grupo "+
            " where 0=0  ";

    var condicion1="";
    if (req.body.num_solicitud != "") {
        condicion1=" and  sol.id='"+req.body.num_solicitud+"'"; 
    }
    var condicion12="";
    if (req.body.estado != "") {
        condicion12=" and sol.estado='"+req.body.estado+"'";
    }
    var limit =" order by sol.id desc limit 15";
    db.sequelize
        .query(query + condicion1 + condicion12+ limit, {type: db.sequelize.QueryTypes.SELECT})
        .then(result=>{
            res.json({"respuesta" :"success","result" :result})
        })
        .catch(e=>{
            res.json(
                {"respuesta" : "error","result" : e}
            );
        })

});

// update solicitud status 
api.put(api_name+'/updatestatus',(req,res)=>{
    var query =" update solicitud set estado=:estado where id=:id_solicitud ";
    db.sequelize.query(query, {replacements:{estado:req.body.estado, id_solicitud:req.body.id_solicitud},type: db.sequelize.QueryTypes.UPDATE},{type:db.sequelize.QueryTypes.UPDATE})
    .then((result)=>{
        res.json({'respuesta':'success', 'result':result})
    })
    .catch((e)=>{
        res.json({'respuesta':'error','result':e});
    })
});



// Inssert Remoneracion

api.post(api_name+'/remoneracion',(req,res)=>{
    var query =" insert into remoneracion(solicitud_id,tipo_moneda,remoneracion_basico,vales,asig_movilidad,asignacion_otros,fecha_registro,usuario_registro,estado) ";
    // var values =" values(42, 1, '300.00','Vales test','Asig. Movilidad','Asig. Otros', now(),'HROJAS',0)";
    var values = " values("+req.body.solicitud_id+","+req.body.tipo_moneda+",'"+req.body.remoneracion_basico+"','"+req.body.vales+"','"+
                    req.body.asig_movilidad+"','"+req.body.asignacion_otros+"',now(),'"+req.body.usuario_registro+"',"+req.body.estado+")";
    db.sequelize.query(query + values,{type: db.sequelize.QueryTypes.INSERT})
    .then((result)=>{
        res.json({'respuesta':'success', 'result':result})
    })
    .catch((e)=>{
        res.json({'respuesta':'error', 'result':e})
    })
    // console.log(req.body);
});


// Aprobacion viceprosidencia
api.put(api_name+'/updatestatusvicepresidencia',(req,res)=>{
    var query =" update solicitud set estado_vicepresidencia=:estado_vicepresidencia where id=:id_solicitud ";
    db.sequelize.query(query, {replacements:{estado_vicepresidencia:req.body.estado_vicepresidencia, id_solicitud:req.body.id_solicitud},type: db.sequelize.QueryTypes.UPDATE})
    .then((result)=>{
        res.json({'respuesta':'success', 'result':result})
    })
    .catch((e)=>{
        res.json({'respuesta':'error','result':e});
    })
});

// guardar requerimiento solicitud
// , ceco=:ceco, descuento_ceco=:descuento_ceco, porcentaje=:porcentaje

api.put(api_name+'/updaterequerimiento',(req,res)=>{
    var query = " update solicitud set glosa=:glosa,  sociedad=:sociedad, lider_uo=:lider_uo, codigo_uo=:codigo_uo, descripcion_uo=:descripcion_uo, "+
                " cod_divicion=:cod_divicion, cod_sub_div=:cod_sub_div, sctr=:sctr, id_area_personal=:id_area_personal, id_relacion_personal=:id_relacion_personal, "+
                " file_dp=:file_dp, direccion=:direccion  where id=:id ";
    var data={
            id:req.body.solicitud_id,
            glosa:req.body.glosa,
            sociedad:req.body.sociedad,
            lider_uo:req.body.lider_uo,
            codigo_uo:req.body.codigo_uo,
            descripcion_uo:req.body.descripcion_uo,
            cod_divicion:req.body.cod_divicion,
            cod_sub_div:req.body.cod_sub_div,
            sctr:req.body.sctr,
            id_area_personal:req.body.id_area_personal,
            id_relacion_personal:req.body.id_relacion_laboral,
            file_dp:req.body.file_dp,
            direccion:req.body.direccion
        }
    db.sequelize.query(query,{replacements:data,type:db.sequelize.QueryTypes.UPDATE})
    .then((result)=>{
        res.json({'respuesta':'success', 'result':result})
    })
    .catch((e)=>{
        res.json({'respuesta':'error','result':e});
    })
});


// Datos registro candidatos

api.post(api_name+'/listadosolicitudcandidatos',(req,res)=>{
    var query = "select "+
            // data solicitudd
            " sol.id,sol.id_aprobador,sol.id_jefe_directo,sol.id_puesto,sol.id_puesto_tipo,sol.cantidad,sol.id_modalidad,"+
            " sol.id_modalidad_tipo,sol.fecha_estimada_inicio,sol.id_plazo,sol.id_plazo_tipo,sol.nombre_cliente, "+
            " sol.descripcion_servicio,sol.volumen_motivo,sol.inicio_estimado_tiempo,sol.estimacion_duracion_tiempo, "+
            " sol.observaciones,sol.descripcion,sol.remoneracion,sol.fecha_registro,sol.usuario_registro, "+
            " sol.fecha_modificacion,sol.usuario_modificacion,sol.estado,sol.estado_vicepresidencia, "+
            " sol.glosa,sol.sociedad,sol.lider_uo,sol.codigo_uo,sol.descripcion_uo,sol.cod_divicion,sol.cod_sub_div, "+
            " sol.sctr,sol.id_area_personal,sol.id_relacion_personal,sol.file_dp,sol.direccion, "+
            // data users
            " us.id as id_apro,ltrim(us.codigo) as codigo_user,ltrim(us.sociedad)sociedad,us.codigo_division,us.nombre_division_personal,us.codigo_sub_division, "+
            " us.nombres_sub_division,us.dni,us.nombres, us.apellido_paterno,us.apellido_materno,us.email_corp, "+
            " us.email_personal,us.codigo_posicion,us.descripcion_posicion,us.codigo_centro_coste, "+
            " us.centro_coste,us.codigo_funcion,us.funcion,us.codigo_ocupacion,us.ocupacion,us.codigo_unidad_org,us.unidad_organizativa, "+
            " us.fecha_nac,us.inicio_contrata,us.fin_contrata,us.cod_jefe,us.saldo_dias_vacaion,us.saldo_dias_descanso,us.categoria, "+
            // data Jefe dir
            " j_d.id as id_jefe,ltrim(j_d.codigo) as codigo_jefe_dir, j_d.dni as dni_jefe,j_d.nombres as nombre_jefe, j_d.apellido_paterno as apellido_paterno_jefe, "+
            " j_d.apellido_materno as apellido_materno_jefe,j_d.email_corp as email_corp_jefe,j_d.email_personal as email_personal_jefe, "+
            // data grupo
            " puesto.id as puesto_id, puesto.grupo as puesto_grupo, puesto.descripcion as puesto_des, puesto.detalle as puesto_detalle, "+
            " modalidad.id as modalidad_id, modalidad.grupo as modalidad_grupo, modalidad.descripcion as modalidad_des, modalidad.detalle as modalidad_detalle,"+
            " plazo.id as plazo_id, plazo.grupo as plazo_grupo, plazo.descripcion as plazo_des, plazo.detalle as plazo_detalle, "+
            // Cantidad solicitante
            " (select count(*) from candidato_solicitud as s where s.id_solicitud=sol.id) as cantidad_candidato " +

            " from solicitud as sol"+
            " inner join users as us on us.id=sol.id_aprobador "+
            " inner join users as j_d on j_d.id=sol.id_jefe_directo" +
            " inner join grupo as puesto on sol.id_puesto=puesto.id and sol.id_puesto_tipo=puesto.grupo "+
            " inner join grupo as modalidad on sol.id_modalidad=modalidad.id and sol.id_modalidad_tipo= modalidad.grupo "+
            " inner join grupo as plazo on sol.id_plazo=plazo.id and sol.id_plazo_tipo=plazo.grupo "+
            " where 0=0 ";
            // Por verser
            //  and sol.estado=0 ;
            
            var condicion1="";
            if (req.body.num_solicitud != "") {
                condicion1=" and  sol.id='"+req.body.num_solicitud+"'"; 
            }
            
            var condicion2='';
            if (req.body.creador_solicitud!="") {
                condicion2=" and ltrim(us.codigo) like '%"+req.body.creador_solicitud+"%' ";
            }
            var limit =" order by sol.id desc limit 10";
    db.sequelize
        .query(query + condicion1 + condicion2+ limit, {type: db.sequelize.QueryTypes.SELECT})
        .then(result=>{
            res.json({"respuesta" :"success","result" :result})
        })
        .catch(e=>{
            res.json(
                {"respuesta" : "error","result" : e}
            );
        })

});


// agregar candidatos

api.post(api_name+'/candidatos',(req,res)=>{
    var query ="     insert into candidato_solicitud  (id_solicitud,nombres,apellido_paterno,apellido_materno,tipo_documento, numero_documento,disponibilidad,email,file_cv,observaciones,fecha_registro,usuario_registro,estado) ";
    var values ="values("+req.body.id_solicitud+",'"+req.body.nombres+"','"+req.body.apellido_paterno+"','"+
                        req.body.apellido_materno+"','"+req.body.tipo_documento+"','" +
                        req.body.numero_documento+"','"+req.body.disponibilidad+"','"+req.body.email+"','"+req.body.file_cv+"','"+
                        req.body.observaciones+"',now(),'"+req.body.usuario_registro+"',0)";
    db.sequelize.query(query + values,{type: db.sequelize.QueryTypes.INSERT})
    .then((result)=>{
        res.json({'respuesta':'success', 'result':result})
    })
    .catch((e)=>{
        res.json({'respuesta':'error', 'result':e})
    })
    // console.log(req.body);
});


// listado candidatos

api.get(api_name+'/listado/candidatos',(req,res)=>{
    var query = " select id,id_solicitud,nombres,apellido_paterno,apellido_materno,tipo_documento,numero_documento,disponibilidad, " +
	            " email,file_cv,observaciones,fecha_registro,usuario_registro,fecha_modificacion,usuario_modificacion,estado, " +
	            " CASE " +
                " WHEN estado=0 THEN 'Activo' "+
		        " WHEN estado=1 THEN 'Inactivo' "+
	            " END as estado_des, "+
	            " id_sede_entrevista,contacto_sede,fecha_entrevista,prioridad "+
                " from candidato_solicitud ";
    db.sequelize.query(query,{type:db.sequelize.QueryTypes.SELECT})
    .then((result)=>{
        res.json({'respuesta':'success','result':result});
    })
    .catch((e)=>{
        res.json({'respuesta':'error','result':e});
    })
});


// Api Update candidato
api.put(api_name+'/updatecandidato',(req,res)=>{
    
    for (let i = 0; i < req.body.length; i++) {
        const element = req.body[i];
        var fecha_entrevista= 'now()';
        if (element.fecha_entrevista!='') {
            fecha_entrevista="'"+element.fecha_entrevista+"'";
        }

        var query =" update  candidato_solicitud set id_sede_entrevista='"+element.id_sede_entrevista+"', contacto_sede='"+element.contacto_sede+
                "', fecha_entrevista="+fecha_entrevista+", estado='"+element.estado+"' ,prioridad='"+element.prioridad+"' where id='"+element.candidato_id+"' ";
    
        db.sequelize.query(query, {type:db.sequelize.QueryTypes.UPDATE})
        .then((result)=>{
            res.json({'respuesta':'success','result':result});
        })
        .catch((e)=>{
            res.json({'respuesta':'error', 'result':e});
        })
        
    }

});












api.get(api_name + '/hello', (req,res)=>{
    db.sequelize
        .query("select * from centro",{type:db.sequelize.QueryTypes.SELECT})
        .then(result=>{
            // console.log(res.json(result))
            res.json(result)
        });
});

api.get(api_name + '/puesto', (req,res)=>{
    db.sequelize
        .query("select * from puesto",{type:db.sequelize.QueryTypes.SELECT})
        .then((result)=>{
            res.json(result);
        });
});



api.get(api_name + '/equipos_o/:id_usuario', (req, res) => {
    db.sequelize.query("select * from cons_mis_equipos(" + req.params.id_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/equipos_t/:id_usuario', (req, res) => {
    db.sequelize.query("select * from get_equipos(" + req.params.id_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.post(api_name + '/equipos_t/', (req, res) => {
    db.sequelize.query("select * from acc_equipo_cuenta_post(:id_equipo, :id_ubicacion, :id_cuenta, :id_ceco, :codigo_activo, :cantidad, :id_usuario );",
    {
        replacements: { id_usuario: req.body.id_usuario, id_equipo: req.body.id_equipo, id_ubicacion:req.body.id_ubicacion, id_cuenta:req.body.id_cuenta, id_ceco:req.body.id_ceco, 
            codigo_activo:req.body.codigo_activo,  cantidad:req.body.cantidad },
        type: db.sequelize.QueryTypes.SELECT
    },
    { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//DISPONIBILIDAD
api.get(api_name + '/personales/:p_usuario/:p_fecha', (req, res) => {
    db.sequelize.query('select * from cons_mi_personal(:usuario, :fecha)',
        {
            replacements: { usuario: req.params.p_usuario, fecha: req.params.p_fecha },
            type: db.sequelize.QueryTypes.SELECT
        })
        .then((result) => res.json(result))
})

api.get(api_name + '/personales_disponibles/:p_usuario/:p_fecha', (req, res) => {
    db.sequelize.query("select * from cons_personal_disponible(" + req.params.p_usuario + ",'" + req.params.p_fecha + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/equipos/:id_usuario', (req, res) => {
    db.sequelize.query("select * from cons_lista_equipos(" + req.params.id_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.post(api_name + '/solicitudes', (req, res) => {
    db.sequelize.query("select * from acc_solicitud_post(:id_usuario, :id_recurso, :cantidad, :almacen_origen, :cuenta_origen)",
        {
            replacements: {
                id_usuario: req.body.id_usuario, id_recurso: req.body.id_recurso, cantidad: req.body.cantidad,
                almacen_origen: req.body.almacen_origen, cuenta_origen: req.body.cuenta_origen
            },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

api.get(api_name + '/solicitudes/:id_usuario', (req, res) => {
    db.sequelize.query("select * from cons_cerrar_solicitud(" + req.params.id_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.put(api_name + '/solicitudes/:id_sol', (req, res) => {
    db.sequelize.query("select * from acc_solicitud_put(:id_usuario, :id_sol, :cantidad, :assigned)",
        {
            replacements: { id_usuario: req.body.id_usuario, cantidad: req.body.cantidad_pres, id_sol: req.params.id_sol, assigned: req.body.assigned },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

api.patch(api_name + '/solicitudes/:id_sol', (req, res) => {
    db.sequelize.query("select * from acc_solicitud_put(:id_usuario, :id_sol, i_assigned=>:assigned)",
        {
            replacements: { id_usuario: req.body.id_usuario, id_sol: req.params.id_sol, assigned: req.body.is_assigned },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

api.put(api_name + '/solicitudes_c/:id_sol', (req, res) => {
    db.sequelize.query("select * from acc_solicitud_put(:id_usuario, :id_sol, i_fecha_inicio=>:fechaInicio, i_fecha_fin=>:fechaFin, i_almacen_destino=>:id_ubicacion, i_cuenta_destino=>:id_cuenta, i_id_ceco=>:ceco, i_is_closed=>:is_closed)",
        {
            replacements: { id_usuario: req.body.id_usuario, id_sol: req.params.id_sol, fechaInicio: req.body.fechaInicio, fechaFin: req.body.fechaFin,
                id_ubicacion: req.body.id_ubicacion,  id_cuenta:req.body.id_cuenta, ceco:req.body.ceco, is_closed:req.body.is_closed},
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

api.post(api_name + '/disponibilidades', (req, res) => {
    db.sequelize.query("select * from acc_disponible_post(:id_recurso, :fecha_inicio, :fecha_fin, :hora_inicio, :hora_fin, :usuario)",
        {
            replacements: {
                id_recurso: req.body.id_recurso, fecha_inicio: req.body.fecha, fecha_fin: req.body.fecha,
                hora_inicio: req.body.hora_inicio, hora_fin: req.body.hora_fin, usuario: req.body.id_usuario
            },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

api.delete(api_name + '/disponibilidades/:p_id', (req, res) => {
    db.sequelize.query("select * from acc_disponible_delete(:id, :id_usuario)",
        {
            replacements: { id: req.params.p_id, id_usuario: req.body.id_usuario },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})



api.put(api_name + '/disponibilidades/:p_id', (req, res) => {
    if (req.body.is_active === false) {
        db.sequelize.query("select * from acc_disponible_put(:id, :id_usuario, :estado, :is_active )",
            {
                replacements: { id: req.params.id, id_usuario: req.body.id_usuario, is_active: req.body.is_active, estado: req.body.estado },
                type: db.sequelize.QueryTypes.SELECT
            }).then((result) => res.json(result))
    } else {
        db.sequelize.query("select * from acc_disponible_put(:id, :id_usuario, :estado, :is_active, :ubicacion_destino, :calificacion, :comentario, :hora_real_inicio, :hora_real_fin, :actividad, :centro_costo, :id_cuenta)",
            {
                replacements: { id: req.params.p_id, id_usuario: req.body.id_usuario, is_active: req.body.is_active,
                    ubicacion_destino: req.body.id_almacen, calificacion: req.body.calificacion, comentario: req.body.id_comentario, 
                    hora_real_inicio: req.body.hora_inicio, hora_real_fin: req.body.hora_fin, actividad: req.body.id_actividad, centro_costo: req.body.ceco, estado:req.body.estado,
                id_cuenta:req.body.id_cuenta  },
                type: db.sequelize.QueryTypes.SELECT
            }).then((result) => res.json(result))
    }
})

api.patch(api_name + '/disponibilidades/:id', (req, res) => {
    if(req.body.estado === 'O' || req.body.estado === 'D'){
        db.sequelize.query("select * from acc_disponible_put(:id, :id_usuario, :estado)",
            {
                replacements: { id: req.params.id, id_usuario: req.body.id_usuario, estado: req.body.estado },
                type: db.sequelize.QueryTypes.SELECT
            }).then((result) => res.json(result))        
    }
})

api.get(api_name + '/requerimientos/:p_usuario', (req, res) => {
    db.sequelize.query("select * from cons_requerimientos(" + req.params.p_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/requerimientos_abiertos/:p_usuario', (req, res) => {
    db.sequelize.query("select * from cons_cerrar_sol_equipo(" + req.params.p_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/lista_equipos/:p_usuario', (req, res) => {
    db.sequelize.query("select * from cons_lista_equipos(" + req.params.p_usuario + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.post(api_name + '/upd_requerimiento', (req, res) => {
    db.sequelize.query("select * from acc_upd_requerimiento(" + req.body.p_usuario + "," + req.body.p_id_recurso + ",'','','','','',''," + req.body.p_cantidad + ")",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//GENERAL
api.get(api_name + '/generales/:id_usuario/:tabla', (req, res) => {
    db.sequelize.query("select * from get_general(:usuario, :tabla);",
        {
            replacements: { usuario: req.params.id_usuario, tabla: req.params.tabla },
            type: db.sequelize.QueryTypes.SELECT
        }).then((result) => res.json(result))
})

//INFORMES
api.get(api_name + '/repIndicadoresGen/:idjefe', (req, res) => {
    db.sequelize.query("select * from rep_indicadores_generales(" + req.params.idjefe + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/horasAlmacenPrestado/:idUsuario/:idAlmacen/:start/:end', (req, res) => {
    db.sequelize.query("select * from rep_horas_almacen_prestado(" + req.params.idUsuario + "," + req.params.idAlmacen + ",'" + req.params.start + "','" + req.params.end + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})
api.get(api_name + '/horasAlmacenSolicitado/:idUsuario/:idAlmacen/:start/:end', (req, res) => {
    db.sequelize.query("select * from rep_horas_almacen_solicitado(" + req.params.idUsuario + "," + req.params.idAlmacen + ",'" + req.params.start + "','" + req.params.end + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/horasPuestoPrestado/:idjefe/:idAlmacen/:start/:end', (req, res) => {
    db.sequelize.query("select * from rep_horas_puesto_prestado(" + req.params.idjefe + "," + req.params.idAlmacen + ",'" + req.params.start + "','" + req.params.end + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})
api.get(api_name + '/horasPuestoSolicitado/:idjefe/:idAlmacen/:start/:end', (req, res) => {
    db.sequelize.query("select * from rep_horas_puesto_solicitado(" + req.params.idjefe + "," + req.params.idAlmacen + ",'" + req.params.start + "','" + req.params.end + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/horasDesempPerso/:idjefe/:idAlmacen/:start/:end', (req, res) => {
    db.sequelize.query("select * from rep_horas_desemp_perso(" + req.params.idjefe + "," + req.params.idAlmacen + ",'" + req.params.start + "','" + req.params.end + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/repGetMiPersonal/:idjefe', (req, res) => {
    db.sequelize.query("select * from rep_mi_personal(" + req.params.idjefe + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/repGetMiEquipo/:idjefe', (req, res) => {
    db.sequelize.query("select * from rep_mi_equipo(" + req.params.idjefe + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

api.get(api_name + '/repGetSolOfre/:idjefe', (req, res) => {
    db.sequelize.query("select * from rep_mis_solicitudes_ofrecidas(" + req.params.idjefe + ");",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})


api.get(api_name + '/obtenerDatosPersonal/:correo', (req, res) => {
    db.sequelize.query("select * from cons_obtener_datos_persona('" + req.params.correo + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//UBICACIONES
api.get(api_name + '/ubicaciones/:id_usuario/:tipo', (req, res) => {
    db.sequelize.query("select * from get_ubicaciones(" + req.params.id_usuario + ",'" + req.params.tipo + "'); ",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//CENTROS
api.get(api_name + '/centros/:id_usuario/:tipo/:all', (req, res) => {
    db.sequelize.query("select * from get_centros(" + req.params.id_usuario + ",'" + req.params.tipo + "','" + req.params.all + "');",
        { type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//CUENTAS
api.get(api_name + '/cuentas/:id_usuario/:all', (req, res) => {
    db.sequelize.query("select * from get_cuentas(:usuario, :all);",
        { replacements: { usuario: req.params.id_usuario, all: req.params.all }, type: db.sequelize.QueryTypes.SELECT }).then((result) => res.json(result))
})

//LOGIN
api.post(api_name + '/login', (req, res) => {
    var options = {
        host: "apiseguridad-dot-pe-gromero-ransa-gcp.appspot.com",
        path: "/api/login?key=AIzaSyAdLDyWkxvLgDL-kSh7PDs-2-lnT1GtnJE",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    var req1 = https.request(options, function (res1) {
        var responseString = "";
        res1.on("data", function (data) {
            responseString += data;
        });
        res1.on("end", function () {
            res.json(responseString);
        });
    })

    var datalogin = {
        // idAplicacion: '93de59b4-25a9-11e9-bad1-42010a800371',
        idAplicacion: 'f35176de-a73a-11e9-a428-42010a80035d',
        correo: req.body.correo,
        clave: req.body.clave,
    };

    var reqBody = JSON.stringify(datalogin);
    req1.write(reqBody)
    req1.end();
});


module.exports = api