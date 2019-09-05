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
        var query_detalls="insert into detalle_solicitud(id_solicitud,id_grupo,id_grupo_tipo,descripcion,fecha_registro,usuario_registro,estado)";
        for (let i = 0; i < req.body.detalle_solicitud.length; i++) {
            const element = req.body.detalle_solicitud[i];
            var data_detalls=" values((SELECT max(id) from solicitud),"+element.id_grupo+",'"+element.id_grupo_tipo+"','',now(),'"+req.body.usuario_registro+"',0) ";
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
    }).catch(function(err){
        res.json({
            "Message" : "error",
            "data" : err
        });
          console.log(err);
    });
})


api.post(api_name+'/solicitudestest',(req,res)=>{
    console.log(req.body.id_aprobador);
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