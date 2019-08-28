import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup, Form, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button,CardTitle,CardText } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
class Requerimiento extends React.Component {
  render() {
    return (
      <>
        <SimpleHeader name="Datos de Requerimiento" parentName="Forms" />
        <Container className="mt--6" fluid>
        <Card className="mb-4">
            <CardHeader>
              {/* <h3 className="mb-0">Creación de Solicitud de Alta</h3> */}
            </CardHeader>
            <CardBody>
                <FormGroup>
                {/* className="row" */}
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Codigo Aprobador</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" disabled/>
                            </InputGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Código Jefe Directo</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" disabled/>
                            </InputGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Descripción de Puesto</Label>
                        <Col md="2">
                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" disabled/>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Cantidad de Recurso</Label>
                        <Col md="1">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" className="form-control-sm" style={{width: "90%"}} disabled />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-35px", marginTop:"-5px"}}>Modalidad</Label>
                        <Col md="2">
                        <Input type="text" name="select" id="exampleSelect" className="form-control-sm" disabled />
                        </Col>

                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="3" style={{marginRight:"-70px",marginTop:"-10px"}}>Especificación de la Modalidad Contractual </Label>
                        <Col md="6">
                            <FormGroup>
                                <Input type="text" name="" id="" className="form-control-sm"  disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Fecha Estimada de Incio</Label>
                        <Col md="2">
                            <Input type="date" name="select" id="exampleSelect" className="form-control-sm" disabled/>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-85px", marginTop:"-5px"}}>Plazo</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" style={{width: "90%"}} disabled />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-50px", marginTop:"-5px"}}>Equipo</Label>
                        <Col md="2">
                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" disabled/>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px",marginTop:"-5px"}}>Accesos</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" disabled />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Tipo de Contratacion</Label>
                        <Col md="4">
                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" style={{width: "93.5%"}} disabled/>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-71px", marginTop:"-5px"}}>Motivo / sustento</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm"  disabled />
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md="9">
                            <div style={{borderStyle: "dashed", padding:"10px", width:"93.5%"}}>
                            <Row>
                                <Col md="12">
                                    <Row>
                                        <Col md="4">
                                            <Label>Nombre Cliente</Label>
                                            <InputGroup>
                                                <Input className="form-control-sm" placeholder="" type="text" disabled/>
                                            </InputGroup>
                                        </Col>
                                        <Col md="4">
                                            <Label>Ventas Actuales (Volumen)</Label>
                                            <InputGroup>
                                                <Input className="form-control-sm" placeholder="" type="text" disabled/>
                                            </InputGroup>
                                        </Col>
                                        <Col md="4">
                                            <Label>Venta Estimada (Volumen)</Label>
                                            <InputGroup>
                                                <Input className="form-control-sm" placeholder="" type="text" disabled/>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    {/* Section Enabled */}
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Glosa</Label>
                        <Col md="7">
                            <FormGroup>
                                <Input type="textarea" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-65px", marginTop:"-5px"}}>Sociedad</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{ marginTop:"-5px"}}>Líder de UO</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-71px", marginTop:"-5px"}}>Codigo UO</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-65px", marginTop:"-5px"}}>Descripcion UO</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                       
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-71px", marginTop:"-5px"}}>Cod. Divición</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-65px", marginTop:"-5px"}}>Cod. Sub Divición</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{ marginTop:"-5px"}}>SCTR</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label>Área de Personal</Label>
                        <Col md="2">
                            <Input className="form-control-sm"></Input>
                        </Col>
                    </Row>

                    <br/>
                    <Row>
                        <Col md="7">
                            <div style={{width:"100%"}}>
                                <div style={{float:"right", marginRight: "-55px"}}>
                                    <Button color="warning" className="btn btn-sm">Limpiar</Button>
                                    <Button color="success" className="btn btn-sm">Guardar</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                </FormGroup>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}
export default Requerimiento;
