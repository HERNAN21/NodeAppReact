import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup, Form, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button,CardTitle,CardText } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";
class Creacionsolicitudbaja extends React.Component {
  render() {
    return (
      <>
        <SimpleHeader name="Creación de Solicitud de Baja" parentName="Forms" />
        <Container className="mt--6" fluid>
        <Card className="mb-4">
            <CardHeader>
              <h3 className="mb-0">Creación de Solicitud de Baja</h3>
            </CardHeader>
            <CardBody>
                <FormGroup>
                {/* className="row" */}
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>DNI / Codigo Trabajador</Label>
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
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Nombres y Apellidos</Label>
                        <Col md="3">
                            <FormGroup>
                                <Input className="form-control-sm" name="" id="example3cols1Input" placeholder="" type="text" disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Descripcion de Puesto</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" name="" id="" type="text" disabled/>
                            </InputGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Tipo de Baja</Label>
                        <Col md="3">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="select">
                                    <option >Option 1</option>    
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Tipo de Cese Formal</Label>
                        <Col md="2">
                        <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                            <option>Text 1</option>
                            <option>Text 2</option>
                        </Input>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Tipo de Cese Real</Label>
                        <Col md="3">
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect" className="form-control-sm" >
                                    <option>Text 1</option>
                                    <option>Text 2</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Código Jefe Directo</Label>
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
                        <Col md="5">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" style={{width:"89%"}} disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Fecha de Cese</Label>
                        <Col md="2">
                        <Input type="date" name="enddate" id="enddate" className="form-control-sm"/>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Fecha y Hora de <br/> Notificación</Label>
                        <Col md="3">
                            <Input type="date" name="notificationdate" id="notificationdate" bsSize="sm" className="form-control-sm"/>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-72px", marginTop:"-5px"}}>Fecha de presentación de <br/> Carta</Label>
                        <Col md="2">
                            <Input type="date" name="datepresentation" id="datepresentation" className="form-control-sm"/>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Observaciones</Label>
                        <Col md="7">
                            <FormGroup>
                                <Input type="textarea" name="glosa" id="glosa" className="form-control-sm" rows="4" cols="50" style={{width:"92%"}}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="7">
                            <div style={{width:"100%"}}>
                                <div style={{float:"right", marginRight: "-90px"}}>
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
export default Creacionsolicitudbaja;
