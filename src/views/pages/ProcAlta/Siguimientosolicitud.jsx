import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup, Table, CardFooter, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button,Progress  } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
import { server, api_name} from "variables/general.jsx";
class Siguimientosolicitud extends React.Component {
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

        }

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




  render() {
        const data_solicitud=this.state.data_solicitud_list;
        console.log(this.state.data_solicitud_list);
    return (
      <>
        <SimpleHeader name="Seguimiento de Solicitud de Alta" parentName="Tables" />
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
                                            <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataBuscarCreador} />
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.btnBuscar} />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                        </CardHeader>
                        <br/>
                        <CardBody>
                            <Row>
                                <Col md="12">
                                    <Table className="align-items-center table-flush" responsive size="sm">
                                        <thead className="thead-light">
                                            <tr>
                                                <th style={{textAlign:"center",width:"2%"} }>Nro. <br/> Solicitud</th>
                                                <th style={{textAlign:"center",width:"3%"} }>Estado</th>
                                                <th style={{textAlign:"center",width:"3%"} }>Fecha <br/> De <br/> Creacion</th>
                                                <th style={{textAlign:"center",width:"5%"} }>Creador <br/> de <br/> Solicitud</th>
                                                <th style={{textAlign:"center",width:"5%"} }>Descripcion <br/> de <br/> Puesto</th>
                                                <th style={{textAlign:"center",width:"2%"} }>Cantidad <br/> de <br/> Recursos</th>
                                                <th style={{textAlign:"center",width:"2%"} }>Fecha <br/> Ingreso</th>
                                                <th style={{textAlign:"center",width:"4%"} }>Ubicación</th>
                                                <th style={{textAlign:"center",width:"5%"} }>Jefe <br/> Directo</th>
                                                <th style={{textAlign:"center",width:"5%"} }>Glosa</th>
                                                <th style={{textAlign:"center",width:"2%"} }>Remoneración</th>
                                                <th style={{textAlign:"center",width:"2%"} }>Requisitos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data_solicitud.map((listado,key)=>{
                                                    return (
                                                    <>
                                                        <tr>
                                                            <td className="table-user">
                                                                <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>{listado.id}</a>
                                                            </td>
                                                            <td className="table-user">
                                                                <b>{listado.estado}</b>
                                                            </td>
                                                            <td className="table-user">
                                                                <b>{listado.fecha_registro}</b>
                                                            </td>
                                                            <td className="table-user">
                                                                <b>{listado.codigo_user+' - '+listado.nombres + ', ' + listado.apellido_paterno +' '+ listado.apellido_materno }</b>
                                                            </td>
                                                            <td className="table-user">
                                                                <b>{listado.puesto_des}</b>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{listado.cantidad}</span>
                                                            </td>
                                                            <td className="table-user">
                                                                <b>{listado.inicio_estimado_tiempo}</b>
                                                            </td>
                                                            <td>
                                                                {listado.direccion}
                                                            </td>
                                                            <td>
                                                                {listado.codigo_jefe_dir +' - '+ listado.nombre_jefe+', '+ listado.apellido_paterno_jefe+' '+listado.apellido_materno_jefe}
                                                            </td>
                                                            <td>
                                                                {listado.glosa}
                                                            </td>
                                                            <td>
                                                                por ver
                                                            </td>
                                                            <td>
                                                                <Button className="btn btn-sm" color="warning" onClick={()=>alert('por ver'+listado.id)} >Ver Mas Detalles</Button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="12">
                                    <b>Solicitud 100</b>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <b>Seguimiento de Aprobaciones</b>
                                </Col>
                            </Row>
                            <div style={{height:"10px"}}></div>
                            <Row>
                                <Col md="12">
                                    {/* <Progress color="warning" value={50} /> */}
                                    {/* <Progress color="info" value={50} /> */}
                                    <Progress multi>
                                        <Progress bar color="success" value="25" />
                                        <Progress bar color="success" value="0" />
                                        <Progress bar color="success" value="0" />
                                        <Progress bar color="success" value="0" />
                                    </Progress>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    <p>
                                        <span>Solicitud Nro.</span><br/>
                                        <span>Nombres:</span><br/>
                                        <span>Estado:</span><br/>
                                        <span>Área:</span><br/>
                                        <span>Fecha:</span><br/>
                                        <span>Hora:</span><br/>
                                    </p>
                                </Col>
                                <Col md="3">
                                    <p>
                                        <span>Aprobacion de Gerente</span><br/>
                                        <span>Nombres: </span><br/>
                                        <span>Estado:</span><br/>
                                        <span>Área: </span><br/>
                                        <span>Fecha:</span><br/>
                                        <span>Hora:</span><br/>
                                    </p>
                                </Col>
                                <Col md="3">
                                    <p>
                                        <span>Aprobacion de Gestor</span><br/>
                                        <span>Nombres:</span><br/>
                                        <span>Estado:</span><br/>
                                        <span>Área:</span><br/>
                                        <span>Fecha:</span><br/>
                                        <span>Hora:</span><br/>
                                    </p>
                                </Col>
                                <Col md="3">
                                    <p>
                                        <span>Estado: Buscando Candidatos</span><br/>
                                        <span>Área:</span><br/>
                                        <span>Fecha:</span><br/>
                                        <span>Hora:</span><br/>
                                    </p>
                                </Col>
                            </Row>
                            <div style={{height:"10px"}}></div>
                            <Row>
                                <Col md="12">
                                    <b>Seguimiento de Candidatos</b>
                                </Col>
                            </Row>
                            <div style={{height:"5px"}}></div>
                            <Row>
                                <Col md="12">
                                    <Table className="align-items-center table-flush" responsive size="sm">
                                        <thead className="thead-light">
                                            <tr>
                                                <th style={{textAlign:"center",padding:10 }}>Nombres <br/> Y <br/> Apellidos</th>
                                                <th style={{textAlign:"center",padding:10 }}>CV</th>
                                                <th style={{textAlign:"center",padding:10 }}>Disponibilidad <br/> De <br/> Creacion</th>
                                                <th style={{textAlign:"center",padding:10 }}>Correo <br/>Electrónico</th>
                                                <th style={{textAlign:"center",padding:10 }}>Tipo <br/> Documento</th>
                                                <th style={{textAlign:"center",padding:10 }}>Nro. <br/> Documento</th>
                                                <th style={{textAlign:"center",padding:10 }}>Sede <br/> de Entrevista</th>
                                                <th style={{textAlign:"center",padding:10 }}>Contacto <br/> por Sede</th>
                                                <th style={{textAlign:"center",padding:10 }}>Programar <br/> Entrevista</th>
                                                <th style={{textAlign:"center",padding:10 }}>Estado</th>
                                                <th style={{textAlign:"center",padding:10 }}>Prioridad</th>
                                                <th style={{textAlign:"center",padding:10 }}>Observaciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    Colaborador
                                                </td>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    <a className="font-weight-bold" href="" onClick={e => e.preventDefault()}>File</a>
                                                </td>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    <b>28/08/2019</b>
                                                </td>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    <b>Colaborador</b>
                                                </td>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    <b>DNI</b>
                                                </td>
                                                <td style={{padding:"10px"}}>
                                                    <span className="text-muted">705485695</span>
                                                </td>
                                                <td style={{padding:"10px"}} className="table-user">
                                                    <Input type="select" className="form-control-sm">
                                                        <option>[Select]</option>
                                                        <option>Sede 1</option>
                                                        <option>Sede 2</option>
                                                    </Input>
                                                </td>
                                                <td style={{padding:"10px"}}>
                                                    <InputGroup>
                                                        <Input className="form-control-sm" placeholder="" type="text"/>
                                                        <InputGroupAddon addonType="append">
                                                            <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                                <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </td>
                                                <td style={{textAlign:"center"}}>
                                                    <InputGroup>
                                                        <Input className="form-control-sm" placeholder="" type="date"/>
                                                        <InputGroupAddon addonType="append">
                                                            <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                                <Button className="btn btn-sm" color="warning">Programar</Button>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </td>
                                                <td>
                                                    <Input type="select" className="form-control-sm">
                                                        <option>[Select]</option>
                                                        <option>Estado 1</option>
                                                        <option>Estado 2</option>
                                                    </Input>
                                                </td>
                                                <td>
                                                    <Input type="select" className="form-control-sm">
                                                        <option>[Select]</option>
                                                        <option>Prioridad 1</option>
                                                        <option>Prioridad 2</option>
                                                    </Input>
                                                </td>
                                                <td>
                                                    glosa
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <br/>


                        </CardBody>
                    <CardFooter>
                        <Row>
                            <Col md="12">
                                <div style={{float:"right"}}>
                                    <Button color="success" className="btn btn-sm" >Guardar</Button>
                                    <Button color="info" className="btn btn-sm" >Terminar Proceso de Búsqueda</Button>
                                </div>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
  }
}
export default Siguimientosolicitud;
