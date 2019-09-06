import React from "react";

// reactstrap components
import {Badge,Button,Card,CardHeader,CardBody,CardFooter,Table,Container,Row,Col,FormGroup,Label,InputGroup,Input,InputGroupAddon,InputGroupText
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

import { server, api_name, listEstrellas, listDisponible, today, listUnidadTiempo } from "variables/general.jsx";


class Aprobaciones extends React.Component {
    constructor (props){
        super(props)

        this.state={
            server:server,
            solicitud_aprobaciones:[],
            data_buscar:{
                num_solicitud:'',
                estado:''
            },

        }
        this.cargarData=this.cargarData(this);
    }

    cargarData=(e)=>{
        fetch(this.state.server + api_name+ '/aprobacionespendientes',{
            method: 'POST',
            body: JSON.stringify(this.state.data_buscar),
            headers: {'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(function(data) {
            if (data.respuesta=='success') {
                this.setState({solicitud_aprobaciones:data.result})
            } else {
                console.log(data.respuesta);
            }
        }.bind(this))
    }

    buscarNumeroSolicitud=(e)=>{
        var values=e.target.value;
        this.state.data_buscar.num_solicitud=values;
        this.forceUpdate();
    }






    render() {

        const data_listar=this.state.solicitud_aprobaciones;
        console.log(data_listar);
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
                                            <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.buscarNumeroSolicitud}/>
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
                            <Table className="align-items-center table-flush" responsive size="sm" hover>
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width:'1%', textAlign:"center"}} >Nro. <br/> Solicitud</th>
                                        <th style={{width:'1%', textAlign:"center"}} >Estado</th>
                                        <th style={{width:'5%', textAlign:"center"}} >Fecha <br/> De Creacion</th>
                                        <th style={{width:'5%', textAlign:"center"}} >Creador de Solicitud</th>
                                        <th style={{width:'2%', textAlign:"center"}} >Cantidad <br/> de Recursos</th>
                                        <th style={{width:'10%', textAlign:"center"}} >Descripcion de Puesto</th>
                                        <th style={{width:'5%', textAlign:"center"}} >Remoneración</th>
                                        <th style={{width:'2%', textAlign:"center"}} >¿Aprobar?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data_listar.map((listado,i)=>{
                                            
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <a className="font-weight-bold" href="#pablo" onClick={e => e.preventDefault()}>{listado.id}</a>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <b>{listado.estado}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <b>{listado.fecha_registro}</b>
                                                        </td>
                                                        <td className="table-user">
                                                            <b>{listado.nombres}</b>
                                                        </td>
                                                        <td className="table-user" style={{textAlign:"center"}}>
                                                            <b>{listado.cantidad}</b>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{listado.descripcion}</span>
                                                        </td>
                                                        <td style={{textAlign:"center"}}>
                                                            <span>{listado.remoneracion}</span>
                                                        </td>
                                                        <td>
                                                            <label className="custom-toggle">
                                                                <input defaultChecked type="checkbox" />
                                                                <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"/>
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
                    <CardFooter>
                        <Row>
                            <Col md="12">
                                <Button color="success" className="btn btn-sm" style={{float:"right"}}>Confirmar</Button>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
  }
}

export default Aprobaciones;