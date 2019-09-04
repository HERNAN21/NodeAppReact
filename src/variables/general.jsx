const server = "http://localhost:5000";//local
// const server = "http://ec2-52-54-149-108.compute-1.amazonaws.com:5000";//dev
// const server = "http://ec2-3-212-17-65.compute-1.amazonaws.com:5000";//prd

const api_name = "/pdr_api/v1";

const listEstrellas = []
listEstrellas.push({label:'0',value:'0'});
listEstrellas.push({label:'1',value:'1'});
listEstrellas.push({label:'2',value:'2'});
listEstrellas.push({label:'3',value:'3'});
listEstrellas.push({label:'4',value:'4'});
listEstrellas.push({label:'5',value:'5'});

const listDisponible = []
listDisponible.push({label:'SI',value:true});
listDisponible.push({label:'NO',value:false});

const listUnidadTiempo = []
listUnidadTiempo.push({label:'Dias',value:'d'});
listUnidadTiempo.push({label:'Semanas',value:'s'});
listUnidadTiempo.push({label:'Meses',value:'m'});
listUnidadTiempo.push({label:'Años',value:'a'});

var date = new Date();
var y = date.getFullYear();
var m = date.getMonth();
var d = date.getDate();
var h = date.getHours();
var mm = date.getMinutes();
var today = y + "-" + (m > 9 ? (m + 1) : '0' + (m + 1)) + '-' + d
var hora_actual = h + ':' + mm

var inicio_mes = y + "-" + (m > 9 ? (m + 1) : '0' + (m + 1)) + "-01"
var fin_mes = y + "-" + (m > 9 ? (m + 1) : '0' + (m + 1)) + "-" + new Date(y, m + 1, 0).getDate()

export { inicio_mes, fin_mes, today, hora_actual, server, listEstrellas, listDisponible, listUnidadTiempo, api_name };