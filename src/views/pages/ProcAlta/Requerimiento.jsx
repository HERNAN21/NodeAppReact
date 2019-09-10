import React from "react";
import { Card, CardHeader,CardBody,Label, FormGroup, Form, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button,CardTitle,CardText,Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class Requerimiento extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data_solicitud:this.props.location.state,
            modal: false
        };
        this.ModalCentroCosto = this.ModalCentroCosto.bind(this);
        
        // const { data } = this.props.location.state;
        // console.log(data);
        
    }

    componentDidMount () {
        // const { handle } = this.props.match.params

        // fetch(`https://api.twitter.com/user/${handle}`)
        // .then((user) => {
        //     this.setState(() => ({ user }))
        // })
    }

    ModalCentroCosto() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


  render() {
    var data_list=this.state.data_solicitud['data'];
    console.log(this.state.data_solicitud['data']);
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
                                <Input className="form-control-sm" placeholder="" type="text" disabled value={data_list.codigo_user}/>
                            </InputGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" disabled value={data_list.nombres+', '+data_list.apellido_paterno+' '+data_list.apellido_materno } />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Código Jefe Directo</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" disabled value={data_list.codigo_jefe_dir}/>
                            </InputGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" disabled value={data_list.nombre_jefe +','+data_list.apellido_paterno_jefe+' '+ data_list.apellido_materno_jefe} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Descripción de Puesto</Label>
                        <Col md="2">
                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" disabled value={data_list.descripcion} />
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Cantidad de Recurso</Label>
                        <Col md="1">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" className="form-control-sm" style={{width: "90%"}} disabled value={data_list.cantidad} />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-35px", marginTop:"-5px"}}>Modalidad</Label>
                        <Col md="2">
                        <Input type="text" name="select" id="exampleSelect" className="form-control-sm" disabled value={data_list.id_modalidad_tipo} />
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
                            <Input type="date" name="select" id="exampleSelect" className="form-control-sm" disabled value={data_list.fecha_estimada_inicio}/>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-85px", marginTop:"-5px"}}>Plazo</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" style={{width: "90%"}} disabled value={data_list.id_plazo_tipo}/>
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
                        <Col md="3">
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="3" style={{marginRight:"-25px", marginTop:"-5px"}}>Glosa</Label>
                                <Col md="9">
                                    <FormGroup>
                                        <Input type="textarea" name="text" id="exampleText" className="form-control-sm" rows="4" cols="50"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6" style={{marginLeft:"-23px"}}>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-30px", marginTop:"-5px"}}>Sociedad</Label>
                                <Col md="4">
                                    <FormGroup>
                                        <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                                    </FormGroup>
                                </Col>
                                <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-30px", marginTop:"-5px"}}>Líder de UO</Label>
                                <Col md="4">
                                    <FormGroup>
                                        <Input type="select" name="text" id="exampleText" className="form-control-sm">
                                            <option>Dir 1</option>
                                            <option>Dir 2</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-30px", marginTop:"-5px"}}>Código UO</Label>
                                <Col md="4">
                                    <FormGroup>
                                        <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                                    </FormGroup>
                                </Col>
                                <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-30px", marginTop:"-5px"}}>Descripción UO</Label>
                                <Col md="4">
                                    <FormGroup>
                                        <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        
                        </Col>

                    </Row>
                    
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-25px", marginTop:"-5px"}}>Cod. Divición</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Cod. Sub Divición</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>SCTR</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-25px", marginTop:"-5px"}}>Área de Personal</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text"/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            {/* <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup> */}
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Cod. Área Personal</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" disabled/>
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Área Nomina</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" disabled/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-25px", marginTop:"-5px"}}>Relación Laboral</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text"/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            {/* <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm"/>
                            </FormGroup> */}
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Cod. Laboral</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" disabled/>
                            </FormGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"-30px", marginTop:"-5px"}}>Adjuntar archivo DP</Label>
                        <Col md="2">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text"/>
                                <InputGroupAddon addonType="append">
                                <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                    <Button className="fas fa-search btn btn-sm " style={{width:"100%"}}/>
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            {/* <FormGroup>
                                <Input type="text" name="text" id="exampleText" className="form-control-sm" disabled/>
                            </FormGroup> */}
                        </Col>
                    </Row>

                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-120px", marginTop:"-5px"}}>Relación Laboral</Label>
                        <Col md="2">
                            {/* <Button color="primary" className="fas fa-plus btn btn-sm" style={{width:"30%"}}></Button> */}
                            <Button color="primary" className="fas fa-plus btn btn-sm" style={{width:"30%"}} onClick={this.ModalCentroCosto}>{this.props.buttonLabel}</Button>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginLeft:"-65px", marginTop:"-5px"}}>Ubicación</Label>
                        <Col md="2">
                            <FormGroup>
                                <Input type="select" name="text" id="exampleText" className="form-control-sm">
                                <option>Dir 1</option>
                                <option>Dir 2</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <div style={{width:"100%",marginLeft:"10px"}}>
                                <Button color="warning" className="btn btn-sm" style={{width:"45%"}}>Limpiar</Button>
                                <Button color="success" className="btn btn-sm" style={{width:"45%"}}>Guardar</Button>
                            </div>
                        </Col>
                    </Row>

                </FormGroup>
            </CardBody>
          </Card>
        </Container>
        {/* Modal Centro de Costos */}
        <Modal isOpen={this.state.modal} ModalCentroCosto={this.ModalCentroCosto} className={this.props.className} style={{marginTop:"150px"}}>
            {/* <ModalHeader ModalCentroCosto={this.ModalCentroCosto}>Centro de Costos</ModalHeader> */}
            <ModalBody>
                <Card>
                    <CardHeader style={{textAlign:"center"}}><b>Centro de Costos</b></CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="5" style={{textAlign:"center"}}>
                                CECO
                            </Col>
                            <Col md="5" style={{textAlign:"center"}}>
                                DESC CECO
                            </Col>
                            <Col md="2" style={{textAlign:"center"}}>
                                %
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="5">
                                <FormGroup>
                                    <Input className="form-control-sm " />
                                </FormGroup>
                            </Col>
                            <Col md="5">
                                <FormGroup>
                                    <Input  className="form-control-sm"/>
                                </FormGroup>
                            </Col>
                            <Col md="2">
                                <FormGroup>
                                    <Input  className="form-control-sm"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="5">
                                <FormGroup>
                                    <Input className="form-control-sm " />
                                </FormGroup>
                            </Col>
                            <Col md="5">
                                <FormGroup>
                                    <Input  className="form-control-sm"/>
                                </FormGroup>
                            </Col>
                            <Col md="2">
                                <FormGroup>
                                    <Input  className="form-control-sm"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div style={{float:"right"}}>
                                    <Button color="danger" className="btn btn-sm" onClick={this.ModalCentroCosto}>Cerrar</Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </ModalBody>
            {/* <ModalFooter>
                <Button color="primary" onClick={this.ModalCentroCosto}>Do Something</Button>
                <Button color="danger" className="btn btn-sm" onClick={this.ModalCentroCosto}>Cerrar</Button>
            </ModalFooter> */}
        </Modal>
      </>
    );
  }
}
export default Requerimiento;
