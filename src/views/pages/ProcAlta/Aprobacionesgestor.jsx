import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class Aprobacionesgestor extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.ModalRemoneracion = this.ModalRemoneracion.bind(this);
    }

    ModalRemoneracion() {
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
                                    <th>Nro. Solicitud</th>
                                    <th>Estado</th>
                                    <th>Fecha De Creacion</th>
                                    <th>Creador de Solicitud</th>
                                    <th>Cantidad de Recursos</th>
                                    <th>Descripcion de Puesto</th>
                                    <th>Aprobación de Vicepresidencia</th>
                                    <th>Remoneracion</th>
                                    <th>¿Aprobar?</th>
                                    <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-user">
                                            <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>100</a>
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
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" name="aprobacionvic" onClick={this.AprobacionVicepresidencia}/>
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                            <Button className="btn btn-sm" color="info" style={{float:"right", marginTop:"-25px"}}>Enviar</Button>    
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} onClick={this.ModalRemoneracion}>Ingresar{this.props.buttonLabel}</Button>
                                        </td>
                                        <td>
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-user">
                                            <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>100</a>
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
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                            <Button className="btn btn-sm" color="info" style={{float:"right", marginTop:"-25px"}}>Enviar</Button>
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} onClick={this.ModalRemoneracion}>Ingresar{this.props.buttonLabel}</Button>
                                        </td>
                                        <td>
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-user">
                                            <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>100</a>
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
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                            <Button className="btn btn-sm" color="info" style={{float:"right", marginTop:"-25px"}}>Enviar</Button>    
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="warning" style={{float:"right"}} onClick={this.ModalRemoneracion}>Ingresar{this.props.buttonLabel}</Button>
                                        </td>
                                        <td>
                                            <label className="custom-toggle">
                                                <input defaultChecked type="checkbox" />
                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    <CardFooter>
                        <Row>
                            <Col md="12">
                                <Button color="success" className="btn btn-sm" style={{float:"right"}}>Confirmar</Button>
                            </Col>
                        </Row>
                    </CardFooter>
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
                                        <Input  type="select" className="form-control-sm">
                                            <option >Option 1</option>
                                            <option >Option 2</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Remoneración Básica</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Vales</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Asignacion por Movilidad</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="4" style={{marginRight:"0px", marginTop:"-5px"}}>Asignación Otros</Label>
                                <Col md="8">
                                    <FormGroup>
                                        <Input  type="text" className="form-control-sm"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div style={{float:"right"}}>
                                        <Button color="success" className="btn btn-sm" onClick={this.ModalRemoneracion}>Guardar</Button>
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