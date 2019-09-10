import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup,Table, CardFooter, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

import { server, api_name} from "variables/general.jsx";

class Registrocandidatos extends React.Component {

    constructor(props){
        super(props);

        this.state={
            server:server,
            api_name:api_name,
            buscar_listado:{
                num_solicitud:'',
                creador_solicitud:''
            },
            data_solicitud_list:[],
            data_candidato:{
                id_solicitud:'',
                nombres:"Hernan",
                apellido_paterno:"Rojas",
                apellido_materno:"Utani",
                tipo_documento:"1",
                numero_documento:"70586952",
                disponibilidad:"1",
                email:"test@gmail.com",
                file_cv:"asd",
                observaciones:"asd",
                usuario_registro:"HROJAS"
            }
        }

        // this.cargarData=this.cargarData(this);
        this.cargarData=this.cargarData.bind(this);
        
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
                this.setState({data_solicitud_list:data.result})
                console.log(data.result);
            } else {
                console.log(data.respuesta);
            }
        }.bind(this))
    }

    btnBuscar=(e)=>{
        this.cargarData();
    }

    dataBuscarNumero=(e)=>{
        this.state.buscar_listado.num_solicitud=e.target.value;
        this.cargarData();
        this.forceUpdate();
    }

    dataBuscarCreador=(e)=>{
        this.state.buscar_listado.creador_solicitud=e.target.value;
        this.cargarData();
        this.forceUpdate();
    }

    dataNuevoCandidato=(id_solicitud)=>{
        this.state.data_candidato.id_solicitud=id_solicitud;
        this.forceUpdate();
    }

    // Guardar Candidato data_candidato

    btnGuardar=(e)=>{
        fetch(this.state.server + api_name+ '/candidatos',{
            method: 'POST',
            body: JSON.stringify(this.state.data_candidato),
            headers: {'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function(data) {
            if (data.respuesta=='success') {
                alert(data.respuesta)
                console.log(data.result);
                this.cargarData();
            } else {
                console.log(data.respuesta);
            }
        }.bind(this))
    }


  render() {
    const data_listar=this.state.data_solicitud_list;
    const id_solicitud=this.state.data_candidato.id_solicitud;
    return (
      <>
        <SimpleHeader name="Registro de Candidatos" parentName="Tables" />
                <Container className="mt--6" fluid>
                    <Card>
                        <CardHeader className="border-0" style={{marginBottom:"-50px"}}>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-150px", marginTop:"-5px"}}>Nro. Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataBuscarNumero} />
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.btnBuscar} />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-110px", marginTop:"-5px"}}>Creador de Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataBuscarCreador}/>
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}  onClick={this.btnBuscar} />
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
                                        <th style={{textAlign:"center", width:"3%"}} >Nro. <br/> Solicitud</th>
                                        <th style={{textAlign:"center", width:"5%"}} >Estado</th>
                                        <th style={{textAlign:"center", width:"5%"}} >Fecha  De <br/> Creacion</th>
                                        <th style={{textAlign:"center", width:"15%"}} >Creador  de <br/> Solicitud</th>
                                        <th style={{textAlign:"center", width:"2%"}} >Cantidad <br/> de <br/> Recursos</th>
                                        <th style={{textAlign:"center", width:"15%"}} >Descripcion <br/> de Puesto</th>
                                        <th style={{textAlign:"center", width:"8%"}} >Archivo DP</th>
                                        <th style={{textAlign:"center", width:"5%"}} >Remoneración</th>
                                        <th style={{textAlign:"center", width:"3%"}} >Cantidad <br/> de <br/> Candidatos</th>    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_listar.map((listado,key)=>{
                                            return (<>
                                                    <tr onClick={()=>this.dataNuevoCandidato(listado.id)} >
                                                        <td className="table-user" style={{textAlign:"center"}} >
                                                            <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>{listado.id}</a>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}} >
                                                            <b>{listado.estado}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <b>{listado.fecha_registro}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.codigo_user +' - '+ listado.nombres + ', '+ listado.apellido_paterno+ ' '+ listado.apellido_materno}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <b>{listado.cantidad}</b>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{listado.descripcion}</span>
                                                        </td>
                                                        <td>
                                                            {listado.file_dp}
                                                        </td>
                                                        <td style={{textAlign:"center"}}>
                                                            {/* {listado.} */}
                                                        </td>
                                                        <td style={{textAlign:"center"}}>
                                                            {listado.cantidad_candidato}
                                                        </td>
                                                    </tr>
                                            </>);
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    <CardFooter>
                        <Row>
                            <Col md="12">
                                <div style={{float:"right"}}>
                                    <Button color="success" className="btn btn-sm" >Confirmar</Button>
                                    <Button color="info" className="btn btn-sm" >Informar al Solicitante</Button>
                                </div>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Button className="btn btn-sm" color="primary" onClick={this.btnGuardar} >Agregar Candidato <b>+</b></Button>
                        <br/>
                        <span><b>Solicitud {id_solicitud}</b></span>
                    </CardHeader>
                    <CardBody>
                        <Card style={{marginTop:"-10px"}}>
                            <CardBody>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginTop:"-5px"}}>Nombres</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" name="nombres"/>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-90px", marginTop:"-5px"}}>Apellido Paterno</Label>
                                    <Col md="3">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" name="apellidoP" />
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Apellido Materno</Label>
                                    <Col md="3">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" name="apellidoM"/>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{ marginTop:"-5px"}}>Tipo de Documento</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" type="select" name="tipoDoc" id="tipoDoc">
                                                <option>Dni</option>
                                                <option>Carnet</option>
                                                <option>Pasaporte</option>
                                                <option>Otros</option>
                                            </Input>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-90px", marginTop:"-5px"}}>Numero de Documento</Label>
                                    <Col md="3">
                                        <InputGroup>
                                            <Input className="form-control-sm" type="text" name="numeroDoc" id="numeroDoc" />
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Disponibilidad</Label>
                                    <Col md="3">
                                        <InputGroup>
                                            <Input className="form-control-sm"  type="select" name="disponibilidad" id="disponibilidad">
                                                <option >Option 1</option>
                                                <option >Option 2</option>
                                            </Input>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginTop:"-5px"}}>Correo Electrónico</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="email" name="email"/>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>CV</Label>
                                    <Col md="3">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="file" name="filecv" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{ marginTop:"-5px"}}>Glosa</Label>
                                    <Col md="11">
                                        <FormGroup>
                                            <Input type="textarea" name="glosa" id="glosa" className="form-control-sm" rows="2"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </Container>
        </>
    );
  }
}
export default Registrocandidatos;
