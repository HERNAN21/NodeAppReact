import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class Validarenvioalta extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.ModalValidacion = this.ModalValidacion.bind(this);
    }

    ModalValidacion() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }




    render() {
        return (
            <>
             <SimpleHeader name="Validación y Envió de Alta" parentName="Tables" />
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
                                        <th>Datos de Ingreso</th>
                                        <th>Ficha de Ingreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-user">
                                            <a className="font-weight-bold" href="#pablo" onClick={this.ModalRemoneracion}>100{this.props.buttonLabel}</a>
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
                                        <td>
                                            1
                                        </td>
                                        <td className="table-user">
                                            <b>Analista</b>
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="warning" onClick={this.ModalValidacion}>Validar</Button>
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm" color="primary">
                                                <i class="fa fa-download" aria-hidden="true">  Descargar</i>
                                            </Button>
                                        </td>
                                    </tr>
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
                                        Enviar a Excellia
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Container>
            {/* Modal Nuevo Registro */}
             {/* Modal Centro de Costos */}
            <Modal size="lg" isOpen={this.state.modal} ModalValidacion={this.ModalValidacion} className={this.props.className} style={{marginTop:"150px" }}>
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
                                                <th>Propuesto</th>
                                                <th>Negociado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Row>
                                                        <Col md="12">
                                                            <p>
                                                                <span>
                                                                    Remoneración
                                                                </span>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="12">
                                                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{ marginTop:"-5px"}}>Moneda:</Label>
                                                        </Col><br/>
                                                        <Col md="12">
                                                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{ marginTop:"-5px"}}>Básico:</Label>
                                                        </Col>
                                                        <Col md="12">
                                                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{ marginTop:"-5px"}}>Vales:</Label>
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td>
                                                    <Row>
                                                        <Col md="12">
                                                            <p>
                                                                <span>Remoneración</span>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"25px", marginTop:"-5px"}}>Moneda:</Label>
                                                        <Col md="9">
                                                            <InputGroup>
                                                                <Input className="form-control-sm" placeholder="" type="select" name="moneda" id="moneda">
                                                                    <option >Soles</option>
                                                                    <option >Dolar</option>
                                                                </Input>
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"25px", marginTop:"-5px"}}>Básico:</Label>
                                                        <Col md="9">
                                                            <InputGroup>
                                                                <Input className="form-control-sm" placeholder="" type="text" name="basico" id="basico"/>
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"25px", marginTop:"-5px"}}>Vales:</Label>
                                                        <Col md="9">
                                                            <InputGroup>
                                                                <Input className="form-control-sm" placeholder="" type="text" name="vales" id="vales" />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"25px", marginTop:"-5px"}}>Fecha Inicio:</Label>
                                                    </Row>
                                                </td>
                                                <td>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"28px", marginTop:"-5px"}}>Fecha Inicio:</Label>
                                                        <Col md="9">
                                                            <InputGroup>
                                                                <Input className="form-control-sm" placeholder="" type="date" name="startdate" id="startdate" />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Row>
                                                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginTop:"-5px"}}>Ficha de Ingreso:</Label>
                                                    </Row>
                                                </td>
                                                <td>
                                                    <Row>
                                                        <Col md="9">
                                                            <InputGroup>
                                                                <Input className="form-control-sm" placeholder="" type="file" name="startdate" id="startdate" />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </td>
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
                                        <Button color="success" className="btn btn-sm" onClick={this.ModalValidacion}>Guardar</Button>
                                        <Button color="danger" className="btn btn-sm" onClick={this.ModalValidacion}>Cerrar</Button>
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

export default Validarenvioalta;