import React from "react";


// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
import { server, api_name} from "variables/general.jsx";


var  format = require("date-format");

class Registrodatosalta extends React.Component {
    constructor(props){
        super(props);

        this.state={
            server:server,
            api_name:api_name,
            buscar_listado:{
                num_solicitud:'',
                creador_solicitud:''
            },
            solicitud_data_all:[],
            solicitud_data_uno:[],
            data_solicitud_detall_all_candidato:[],
            data_solicitud_detall_candidatos:[],
            data_ver:{
                solicitud_id:'',
                puesto_des:'',

            }
            

        }

        fetch(this.state.server + this.state.api_name +'/listado/candidatos')
        .then(response=>response.json())
        .then(function (data) {
            if (data.respuesta=='success') {
                this.setState({data_solicitud_detall_all_candidato:data.result});
            }
        }.bind(this));

        


    }

    cargarData=(e)=>{
        fetch(this.state.server + api_name+ '/listadosolicitudcandidatos',{
            method: 'POST',
            body: JSON.stringify(this.state.buscar_listado),
            headers: {'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function(data) {
            if (data.respuesta=='success') {
                this.setState({solicitud_data_all:data.result})
            } else {
                
            }
        }.bind(this))
    }


    btnCargarData=(e)=>{
        this.cargarData();
    }

    dataBuscarNumero=(e)=>{
        this.state.buscar_listado.num_solicitud=e.target.value;
        this.forceUpdate();
        this.cargarData();
    }

    dataBuscarCreadorSolicitud=(e)=>{
        this.state.buscar_listado.creador_solicitud=e.target.value
        this.forceUpdate();
        this.cargarData();
    }

    dataDetallshow=(data)=>{
        console.log(data);
        this.setState({solicitud_data_uno:data})
        // data_solicitud_detall_all
        var data_detall=this.state.data_solicitud_detall_all_candidato;
        var data_solicitud_detall_candidatos = [];
        this.state.data_ver.solicitud_id=data.id;
        this.state.data_ver.puesto_des=data.puesto_des;
        
        for (let i = 0; i < data_detall.length; i++) {
            const element = data_detall[i];
            if (data.id==element.id_solicitud) {
                data_solicitud_detall_candidatos.push(element);
            }
        }
        this.setState({data_solicitud_detall_candidatos:data_solicitud_detall_candidatos});
        // console.log(this.state.data_solicitud_detall_all_candidato);

    }


   
    render() {
        // console.log(this.state.solicitud_data_all)
        const data_list=this.state.solicitud_data_all;
        console.log(this.state.data_solicitud_detall_candidatos);
        var listado_detalle=this.state.data_solicitud_detall_candidatos;
        return (
            <>
             <SimpleHeader name="Registro de Datos de Alta" parentName="Tables" />
                <Container className="mt--6" fluid>
                    <Card>
                        <CardHeader className="border-0" style={{marginBottom:"-50px"}}>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-150px", marginTop:"-5px"}}>Nro. Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" onChange={this.dataBuscarNumero} />
                                            <InputGroupAddon addonType="append">
                                            <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.btnCargarData} />
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Creador de Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" onChange={this.dataBuscarCreadorSolicitud} />
                                            <InputGroupAddon addonType="append">
                                            <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.btnCargarData} />
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                        </CardHeader>
                        <br/>
                        <CardBody>
                            <Table className="align-items-center table-flush" responsive size="sm">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Nro. Solicitud</th>
                                        <th>Estado</th>
                                        <th>Fecha De Creacion</th>
                                        <th>Descripcion de Puesto</th>
                                        <th>Cantidad de Recursos</th>
                                        <th>Ficha de Ingreso</th>
                                        <th>Ubicación</th>
                                        <th>Equipos y Accesos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_list.map((listado,key)=>{
                                            return (
                                                <>
                                                    <tr onClick={()=>this.dataDetallshow(listado)}>
                                                        <td className="table-user">
                                                            <a className="font-weight-bold" href="#pablo" onClick={this.ModalRemoneracion}>{listado.id}{this.props.buttonLabel}</a>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>State</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{format.asString('dd/MM/yyyy', new Date(listado.fecha_registro))}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.puesto_des}</b>
                                                        </td>
                                                        <td>
                                                            {listado.cantidad}
                                                        </td>
                                                        <td className="table-user">
                                                            <b>file por ver</b>
                                                        </td>
                                                        <td>
                                                            {listado.direccion}
                                                        </td>
                                                        <td style={{textAlign:"right"}}>
                                                            <Button className="btn btn-sm" color="primary">
                                                                Ver Detalle +
                                                                {/* <i class="fa fa-info" aria-hidden="true"></i> */}
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    <CardFooter>
                        <Row>
                            <Col md="11">
                            </Col>
                            <Col md="1">
                                <InputGroup>
                                    <Button className="btn btn-sm" color="success">
                                        Confirmar
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="border-0" style={{marginTop:"-20px"}}>
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2"> <b>Solicitud {this.state.data_ver.solicitud_id}</b> </Label>
                        </Row>
                        <Row  style={{marginTop:"-15px"}}>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2">Agregar Datos</Label>
                        </Row>
                    </CardHeader>
                    <CardBody>
                            <Table className="align-items-center table-flush" responsive size="sm">
                                <thead className="thead-light">
                                    <tr>
                                        <th>DNI</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Descripcion de Puesto</th>
                                        <th>Cód. Trabajador</th>
                                        <th>Genero</th>
                                        <th style={{textAlign:"center"}}>Talla <br/>Camisa/Chompa/Casaca</th>
                                        <th>Tallas Pantalón</th>
                                        <th>Talla Calzado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listado_detalle.map((listado_detalle,key)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="table-user">
                                                            {listado_detalle.numero_documento}
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado_detalle.nombres}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado_detalle.apellido_paterno+' '+listado_detalle.apellido_materno}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{this.state.data_ver.puesto_des}</b>
                                                        </td>
                                                        <td>
                                                            <Input  type="text" className="form-control-sm"/>
                                                        </td>
                                                        <td className="table-user">
                                                            <Input className="form-control-sm" type="select" value={listado_detalle.genero}>
                                                                <option value="">[Seleccione]</option>
                                                                <option value="1">Hombre</option>
                                                                <option value="2">Mujer</option>
                                                            </Input>
                                                        </td>
                                                        <td>
                                                            <Input className="form-control-sm" type="select" value={listado_detalle.talla_1}>
                                                                <option value="">[Seleccione]</option>
                                                                <option value="1">Talla 1</option>
                                                                <option value="2">Talla 2</option>
                                                                <option value="3">Talla 3</option>
                                                                <option value="4">Talla 4</option>
                                                            </Input>
                                                        </td>
                                                        <td>
                                                        <Input className="form-control-sm" type="select" value={listado_detalle.talla_2}>
                                                                <option value="">[Seleccione]</option>
                                                                <option value="1">Talla 1</option>
                                                                <option value="2">Talla 2</option>
                                                                <option value="3">Talla 3</option>
                                                                <option value="4">Talla 4</option>
                                                            </Input>
                                                        </td>
                                                        <td style={{textAlign:"right"}}>
                                                        <Input className="form-control-sm" type="select" value={listado_detalle.talla_3}>
                                                                <option value="">[Seleccione]</option>
                                                                <option value="1">Talla 1</option>
                                                                <option value="2">Talla 2</option>
                                                                <option value="3">Talla 3</option>
                                                                <option value="4">Talla 4</option>
                                                            </Input>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                        <CardFooter>

                        </CardFooter>
                </Card>

            </Container>
            
        </>
    );
  }
}

export default Registrodatosalta;