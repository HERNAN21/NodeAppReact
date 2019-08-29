import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup,Table, CardFooter, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
class Registrocandidatos extends React.Component {
  render() {
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
                                            <Input className="form-control-sm" placeholder="" type="text"/>
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-110px", marginTop:"-5px"}}>Creador de Solicitud</Label>
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
                                        <th>Cantidad de Recursos</th>
                                        <th>Descripcion de Puesto</th>
                                        <th>Archivo DP</th>
                                        <th>Remoneración</th>
                                        <th>Cantidad de Candidatos</th>    
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
                                            Archivo
                                        </td>
                                        <td>
                                            Remoneracion en soles
                                        </td>
                                        <td>
                                            12
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
                                            Archivo
                                        </td>
                                        <td>
                                            Remoneracion en soles
                                        </td>
                                        <td>
                                            12
                                        </td>
                                    </tr>
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
                        <Button className="btn btn-sm" color="primary" >Agregar Candidato <b>+</b></Button>
                        <br/>
                        <span><b>Solicitud 100</b></span>
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
