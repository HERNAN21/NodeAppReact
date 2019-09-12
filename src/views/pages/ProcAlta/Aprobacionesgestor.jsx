import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
import { server, api_name, listEstrellas, listDisponible, today, listUnidadTiempo } from "variables/general.jsx";
import { runInThisContext } from "vm";
import { setTimeout } from "timers";
import { Link } from "react-router-dom";

class Aprobacionesgestor extends React.Component {


    
    constructor(props) {
        super(props);

        this.state = {
            server:server,
            listado_solicitud:[],
            buscar_listado:{
                num_solicitud:'',
                estado:''
            },
            data_update:{
                id_solicitud:'',
                estado:'',
                estado_vicepresidencia:''
            },

            remoneracion_data_save:{
                solicitud_id:'',
                tipo_moneda:'',
                remoneracion_basico:'',
                vales:'',
                asig_movilidad:'',
                asignacion_otros:'',
                usuario_registro:'HROJAS',
                estado:'0'
            },

            aprobacionvicecheck: true,
            modal: false,

        };

        // this.cargarData=this.cargarData.bind(this);
        this.cargarData=this.cargarData(this);
        this.ModalRemoneracion = this.ModalRemoneracion.bind(this);
        
        
    }
    
    
    
    // this.props.router.push({
    //     pathname: '/other-page',

    //     state: {
    //         id: 7,
    //         color: 'green'
    //     }
    // })



    cargarData=(e)=>{
        fetch(this.state.server + api_name+ '/aprobacionespendientes',{
            method: 'POST',
            body: JSON.stringify(this.state.buscar_listado),
            headers: {'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function(data) {
            if (data.respuesta=='success') {
                this.setState({listado_solicitud:data.result})
            } else {
                console.log(data.respuesta);
            }
        }.bind(this))
        
    }

    // Abrir Modal y pasar data
    ModalRemoneracion(data) {
        this.state.remoneracion_data_save.solicitud_id=data.id;
        this.forceUpdate();
        
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    


    // data remonetarion

    dataMoneda =(e)=>{
        this.state.remoneracion_data_save.tipo_moneda=e.target.value;
        this.forceUpdate();
    }

    dataRemoneracion =(e)=>{
        this.state.remoneracion_data_save.remoneracion_basico=e.target.value;
        this.forceUpdate();
    }

    dataVales=(e)=>{
        this.state.remoneracion_data_save.vales=e.target.value;
        this.forceUpdate();
    }
    
    dataAsigMovilidad=(e)=>{
        this.state.remoneracion_data_save.asig_movilidad=e.target.value;
        this.forceUpdate();
    }

    dataAsigOtros=(e)=>{
        this.state.remoneracion_data_save.asignacion_otros=e.target.value;
        this.forceUpdate();
    }
    

    dataRemoneracionSave=(e) =>{
        
        var data_save = this.state.remoneracion_data_save;
        fetch(this.state.server + api_name+ '/remoneracion',{
            method: 'POST',
            body: JSON.stringify(data_save),
            headers: {'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function(data) {
            if (data.respuesta=='success') {
                alert(data.respuesta);
            } else {
                console.log(data.respuesta);
            }
        }.bind(this))
        
    }
    // update estado vicepresidencia

    AprobacionVicepresidencia=(e)=>{
        // aprobacionvic
        var estado=0;
        if (e.target.checked==false) {
            estado=1;
        }
        const data_update={
            id_solicitud: e.target.value,
            estado_vicepresidencia: estado
        }
        fetch(this.state.server + api_name+'/updatestatusvicepresidencia',{
            method: 'PUT',
            body: JSON.stringify(data_update),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function (data) {
            if (data.respuesta=='success') {
                console.log(data.respuesta);
            } else {
                console.log(data.respuesta);
            }
        })

        // this.setState({aprobacionvicecheck: e.target.checked});

    }

    // Update estado
    updateEstado=(e)=>{
        var estado=0;
        if (e.target.checked==false) {
            estado=1;
        }
        const data_update={
            id_solicitud: e.target.value,
            estado: estado
        }
        fetch(this.state.server + api_name+'/updatestatus',{
            method: 'PUT',
            body: JSON.stringify(data_update),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function (data) {
            if (data.respuesta=='success') {
                console.log(data.respuesta);
            } else {
                console.log(data.respuesta);
            }
        })
    }
    



    



    render() {
        const data_list=this.state.listado_solicitud;
        return (
            <>
             <SimpleHeader name="Aprobaciones Pendientes" parentName="Tables" />
                <Container className="mt--6" fluid>
                    <Card>
                        <CardHeader className="border-0" style={{marginBottom:"-50px"}}>
                                <Row>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-150px", marginTop:"-5px"}}>Nro. Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text"/>
                                            <InputGroupAddon addonType="append">
                                            <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-150px", marginTop:"-5px"}}>Estado</Label>
                                    <Col md="2">
                                        <FormGroup>
                                        <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                            <option>State 1</option>
                                            <option>State 2</option>
                                            <option>State 3</option>
                                        </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                        </CardHeader>
                        <CardBody>
                            <Table className="align-items-center table-flush" responsive size="sm">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{textAlign:"center"}} >Nro. <br/> Solicitud</th>
                                        <th style={{textAlign:"center"}} >Estado</th>
                                        <th style={{textAlign:"center"}} >Fecha <br/> De Creacion</th>
                                        <th style={{textAlign:"center"}} >Creador de Solicitud</th>
                                        <th style={{textAlign:"center"}} >Cantidad <br/> de <br/> Recursos</th>
                                        <th style={{textAlign:"center"}} >Descripcion de Puesto</th>
                                        <th style={{textAlign:"center"}} >Aprobación <br/> de Vicepresidencia</th>
                                        <th style={{textAlign:"center"}} >Remoneracion</th>
                                        <th style={{textAlign:"center"}} >¿Aprobar?</th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_list.map((listado, key)=>{
                                            return(
                                                <>
                                                    <tr>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            {/* <a className="font-weight-bold" href='/admin/Requerimiento' >{listado.id}</a> */}
                                                            <Link  className="font-weight-bold" to={{pathname:'/admin/Requerimiento',state:{data:listado}}} >{listado.id}</Link>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.estado}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}} >
                                                            <b>{listado.fecha_registro}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.codigo_user +' - '+ listado.nombres +', '+listado.apellido_paterno+' '+ listado.apellido_materno}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}} >
                                                            <b>{listado.cantidad}</b>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{listado.descripcion}</span>
                                                        </td>
                                                        <td>
                                                            <label className="custom-toggle">
                                                                <input defaultChecked type="checkbox" name="" value={listado.id}  onChange={this.AprobacionVicepresidencia}/>
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                                            </label>
                                                            <Button className="btn btn-sm" color="info" style={{float:"right", marginTop:"-25px"}}>Enviar</Button>    
                                                        </td>
                                                        <td>
                                                            {/* <Button className="btn btn-sm" color="warning" style={{float:"right"}} onClick={this.ModalRemoneracion}>Ingresar</Button> */}
                                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} onClick={()=>this.ModalRemoneracion(listado)}>Ingresar</Button>
                                                        </td>
                                                        <td>
                                                            <label className="custom-toggle">
                                                                <input defaultChecked type="checkbox" value={listado.id} onChange={this.updateEstado} />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    {/* <CardFooter>
                        <Row>
                            <Col md="12">
                                <Button color="success" className="btn btn-sm" style={{float:"right"}}>Confirmar</Button>
                            </Col>
                        </Row>
                    </CardFooter> */}
                </Card>
            </Container>
            {/* Modal Remoneracion */}
             {/* Modal Centro de Costos */}
            <Modal isOpen={this.state.modal} ModalRemoneracion={this.ModalRemoneracion} className={this.props.className} style={{marginTop:"150px"}}>
                {/* <ModalHeader ModalCentroCosto={this.ModalCentroCosto}>Centro de Costos</ModalHeader> */}
                <ModalBody>
                    <Card>
                        <CardHeader style={{textAlign:"center"}}><b>Registrar</b></CardHeader>
                        <CardBody>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Moneda</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="select" className="form-control-sm" onChange={this.dataMoneda}>
                                            <option value="">[Seleccione]</option>
                                            <option value="1">Soles</option>
                                            <option value="2">Dolares</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Remoneración Básica</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm" onKeyUp={this.dataRemoneracion}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Vales</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm" onKeyUp={this.dataVales} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Asignacion por Movilidad</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm" onKeyUp={this.dataAsigMovilidad} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Asignación Otros</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm" onKeyUp={this.dataAsigOtros}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div style={{float:"right"}}>
                                        <Button color="success" className="btn btn-sm" onClick={this.dataRemoneracionSave}>Guardar</Button>
                                        <Button color="danger" className="btn btn-sm" onClick={this.ModalRemoneracion}>Cerrar</Button>
                                    </div>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="success" className="btn btn-sm" onClick={this.ModalRemoneracion}>Guardar</Button>
                    <Button color="danger" className="btn btn-sm" onClick={this.ModalRemoneracion}>Cerrar</Button>
                </ModalFooter> */}
            </Modal>

        </>
    );
  }
}

export default Aprobacionesgestor;