import Login from "views/pages/examples/Login.jsx";
import ChangePass from "views/pages/examples/ChangePass.jsx";
import MisRecursos from "views/pages/tables/MisRecursos.jsx";
import Disponibles from "views/pages/tables/Disponibles.jsx";
import Solicitar from "views/pages/tables/Solicitar.jsx";
import Requerimientos from "views/pages/tables/Requerimientos.jsx";
import CerrarSolicitud from "views/pages/tables/CerrarSolicitud.jsx";

// Alta
import Solicitud from "views/pages/ProcAlta/Solicitud.jsx";
import Aprobaciones from "views/pages/ProcAlta/Aprobaciones.jsx"
import Aprobacionesgestor from "views/pages/ProcAlta/Aprobacionesgestor.jsx";
import Requerimiento from "views/pages/ProcAlta/Requerimiento.jsx";
import Registrocandidatos from "views/pages/ProcAlta/Registrocandidatos.jsx";
import Siguimientosolicitud from "views/pages/ProcAlta/Siguimientosolicitud.jsx";
import Registronuevopersonal from "views/pages/ProcAlta/Registronuevopersonal.jsx";
import Validarenvioalta from "views/pages/ProcAlta/Validarenvioalta.jsx";
import Registrodatosalta from "views/pages/ProcAlta/Registrodatosalta.jsx";
import Seguimientonuevopersonal from "views/pages/ProcAlta/Seguimientonuevopersonal.jsx";
// Baja
import Creacionsolicitudbaja from "views/pages/ProcBaja/Creacionsolicitudbaja.jsx";
import Seguimientosolicitudbaja from "views/pages/ProcBaja/Seguimientosolicitudbaja.jsx";
import Seguimientosolicitudbajaadmin from "views/pages/ProcBaja/Seguimientosolicitudbajaadmin.jsx";

// Renovaciones
import Seguimientorenovacion from "views/pages/ProcRenovacion/Seguimientorenovacion.jsx";


// import CierresPendienes from "views/pages/tables/CierresPendienes.jsx";
// import Personal from "views/pages/examples/Personal.jsx";
import Equipos from "views/pages/examples/Equipos.jsx";
import Informes from "views/pages/examples/Informes.jsx";
// import Configuracion from "views/pages/examples/Configuracion.jsx";

const routes = [

  {
    collapse: true,
    name: "Pool de recursos",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/Solicitud",
        name: "Creación De Solicitud de Alta",
        icon: "ni ni-archive-2 text-green",
        component: Solicitud,
        layout: "/admin"
      },
      {
        path: "/Aprobaciones",
        name: "Aprobaciones Pendientes",
        icon: "fa fa-check text-green",
        component: Aprobaciones,
        layout: "/admin"
      },
      {
        path:"/Aprobacionesgestor",
        name: "Aprobaciones Pendientes Gestor",
        icon: "fa fa-list text-green",
        component: Aprobacionesgestor,
        layout:"/admin"
      },
      {
        path:"/Requerimiento",
        // name: "Requerimiento",
        // icon: "ni ni-archive-2 text-green",
        component: Requerimiento,
        layout:"/admin"
      },
      {
        path: "/Registrocandidatos",
        name: "Registro de Candidatos",
        icon: "ni ni-archive-2 text-green",
        component: Registrocandidatos,
        layout: "/admin"
      },

      {
        path: "/Siguimientosolicitud",
        name: "Seguimiento de Solicitud de Alta",
        icon: "ni ni-archive-2 text-green",
        component: Siguimientosolicitud,
        layout: "/admin"
      },
      {
        path: "/Registronuevopersonal",
        name: "Registro de Nuevo Personal",
        icon: "ni ni-archive-2 text-green",
        component: Registronuevopersonal,
        layout: "/admin"
      },
      {
        path: "/Validarenvioalta",
        name: "Validación y Envio de Alta",
        icon: "ni ni-archive-2 text-green",
        component: Validarenvioalta,
        layout: "/admin"
      },
      // Lunes
      {
        path: "/Registrodatosalta",
        name: "Registro de datos de Alta",
        icon: "ni ni-archive-2 text-green",
        component: Registrodatosalta,
        layout: "/admin"
      },
      {
        path: "/Seguimientonuevopersonal",
        name: "Seguimiento de Nuevo Personal",
        icon: "ni ni-archive-2 text-green",
        component: Seguimientonuevopersonal,
        layout: "/admin"
      },
      {
        path: "/Creacionsolicitudbaja",
        name: "Creacion de Solicitud de Baja",
        icon: "ni ni-archive-2 text-green",
        component: Creacionsolicitudbaja,
        layout: "/admin"
      },
      {
        path: "/Seguimientosolicitudbaja",
        name: "Seguimeinto de Solicitud de Baja",
        icon: "ni ni-archive-2 text-green",
        component: Seguimientosolicitudbaja,
        layout: "/admin"
      },
      {
        path: "/Seguimientosolicitudbajaadmin",
        name: "Seguimeinto de Solicitud de Baja Admin",
        icon: "ni ni-archive-2 text-green",
        component: Seguimientosolicitudbajaadmin,
        layout: "/admin"
      },
      {
        path: "/Seguimientorenovacion",
        name: "Seguimiento de Renovaciones",
        icon: "ni ni-archive-2 text-green",
        component: Seguimientorenovacion,
        layout: "/admin"
      },
      
      // Old Examples


      /*{
        path: "/Aprobaciones",
        name: "Aprobaciones Pendientes",
        icon: "ni ni-archive-2 text-green",
        component: Solicitud,
        layout: "/admin"
      },
      {
        path: "/disponibles",
        name: "Recursos disponibles",
        icon: "ni ni-archive-2 text-green",
        component: Disponibles,
        layout: "/admin"
      },
      {
        path: "/solicitar",
        name: "Solicitar recursos",
        icon: "ni ni-archive-2 text-green",
        component: Solicitar,
        layout: "/admin"
      },
      {
        path: "/requerimientos",
        name: "Requerimientos",
        icon: "ni ni-archive-2 text-green",
        component: Requerimientos,
        layout: "/admin"
      },
      {
        path: "/cerrarsolicitud",
        name: "Cerrar solicitud",
        icon: "ni ni-archive-2 text-green",
        component: CerrarSolicitud,
        layout: "/admin"
      },*/
      
      // {
      //   path: "/cierrespendientes",
      //   name: "Cierres Pendienes",
      //   icon: "ni ni-archive-2 text-green",
      //   component: CierresPendienes,
      //   layout: "/admin"
      // },
      {
        path: "/gestionarEquipos",
        name: "Gestionar equipos",
        icon: "ni ni-archive-2 text-green",
        component: Equipos,
        layout: "/admin"
      },
      {
        path: "/informes",
        name: "Informes",
        icon: "ni ni-archive-2 text-green",
        component: Informes,
        layout: "/admin"
      },
      // {
      //   path: "/configuracion",
      //   name: "Configuración",
      //   icon: "ni ni-archive-2 text-green",
      //   component: Configuracion,
      //   layout: "/admin"
      // }
    ]
  },
  {
    path: "/changePass",
    name: "Cambiar contraseña",
    icon: "ni ni-user-run text-green",
    component: ChangePass,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Cerrar sesión",
    icon: "ni ni-user-run text-green",
    component: Login,
    layout: "/auth"
  }
];

export default routes;
