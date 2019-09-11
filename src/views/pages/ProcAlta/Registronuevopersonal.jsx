import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
import { server, api_name} from "variables/general.jsx";

var  format = require("date-format");

class Registronuevopersonal extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            server:server,
            api_name:api_name,
            modal: false,
            data_solicitud_list:[],
            buscar_listado:{
                num_solicitud:'',
                creador_solicitud:''
            }
        };


        this.cargarData=this.cargarData.bind(this);
        this.ModalNuevo = this.ModalNuevo.bind(this);
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
                // console.log(data.result);
            } else {
                console.log(data.respuesta);
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
        this.state.buscar_listado.num_solicitud=e.target.value
        this.forceUpdate();
        this.cargarData();
    }


    ModalNuevo() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    AprobacionVicepresidencia(){
        // aprobacionvic

    }



    render() {
        const data_list=this.state.data_solicitud_list;
        return (
            <>
             <SimpleHeader name="Registro de Nuevo Personal" parentName="Tables" />
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
                                                <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.btnCargarData} />
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Creador de Solicitud</Label>
                                    <Col md="2">
                                        <InputGroup>
                                            <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataBuscarCreadorSolicitud} />
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
                                    <th>Creador de Solicitud</th>
                                    <th>Descripcion de Puesto</th>
                                    <th>Cantidad de Recursos</th>
                                    <th>Fecha Ingreso</th>
                                    <th>Ubicación</th>
                                    <th>Regresar Estado</th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_list.map((listado,key)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="table-user">
                                                            <a className="font-weight-bold" href="#pablo" onClick={this.ModalNuevo}>{listado.id}{this.props.buttonLabel}</a>
                                                            {/* onClick={this.ModalRemoneracion} */}
                                                            {/* {this.props.buttonLabel} */}
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.estado}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{format.asString('dd/MM/yyyy', new Date(listado.fecha_registro))}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.codigo_user+' - ' +listado.nombres+', '+listado.apellido_paterno+' '+listado.apellido_materno}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.puesto_des}</b>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{listado.glosa}</span>
                                                        </td>
                                                        <td>
                                                            {listado.inicio_estimado_tiempo}
                                                        </td>
                                                        <td>
                                                            por ver 
                                                            {listado.direccion}
                                                        </td>
                                                        <td>
                                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} >Regresar</Button>
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
                    </CardFooter> */}
                </Card>
            </Container>
            {/* Modal Nuevo Registro */}
             {/* Modal Centro de Costos */}
            <Modal isOpen={this.state.modal} ModalNuevo={this.ModalNuevo} className={this.props.className} style={{marginTop:"150px"}}>
                {/* <ModalHeader ModalCentroCosto={this.ModalCentroCosto}>Centro de Costos</ModalHeader> */}
                <ModalBody>
                    <Card>
                        {/* <CardHeader style={{textAlign:"center"}}><b>Registrar</b></CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col md="12">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Candidato</th>
                                                <th>Código de Posición</th>
                                                <th>¿Asignar?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Candidato 1</td>
                                                <td><Input className="form-control-sm" type="text"></Input></td>
                                                <td style={{textAlign:"center"}}><Input type="checkbox"></Input> </td>
                                            </tr>
                                            <tr>
                                                <td>Candidato 2</td>
                                                <td> <Input className="form-control-sm" type="text"></Input> </td>
                                                <td style={{textAlign:"center"}}><Input type="checkbox"></Input> </td>
                                            </tr>
                                            <tr>
                                                <td>Candidato 3</td>
                                                <td><Input className="form-control-sm" type="text"></Input></td>
                                                <td style={{textAlign:"center"}}><Input type="checkbox"></Input> </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>

                                        </tfoot>
                                    </Table>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="12">
                                    <div style={{float:"right"}}>
                                        <Button color="success" className="btn btn-sm" onClick={this.ModalNuevo}>Asignar Cargo</Button>
                                        <Button color="danger" className="btn btn-sm" onClick={this.ModalNuevo}>Cerrar</Button>
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

export default Registronuevopersonal;