import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class Registronuevopersonal extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.ModalNuevo = this.ModalNuevo.bind(this);
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
        return (
            <>
             <SimpleHeader name="Aprovaciones Pendientes" parentName="Tables" />
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
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Creador de Solicitud</Label>
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
                                    <tr>
                                        <td className="table-user">
                                            <a className="font-weight-bold" href="#pablo" onClick={this.ModalRemoneracion}>100{this.props.buttonLabel}</a>
                                            {/* onClick={this.ModalRemoneracion} */}
                                            {/* {this.props.buttonLabel} */}
                                        </td>
                                        <td className="table-user">
                                            <b>State</b>
                                        </td>
                                        <td className="table-user">
                                            <b>28/08/2019</b>
                                        </td>
                                        <td className="table-user">
                                            <b>Colaborador</b>
                                        </td>
                                        <td className="table-user">
                                            <b>100</b>
                                        </td>
                                        <td>
                                            <span className="text-muted">Description</span>
                                        </td>
                                        <td>
                                            28/08/2019
                                        </td>
                                        <td>
                                            Sede San Jose
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} >Regresar</Button>
                                        </td>
                                    </tr>
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