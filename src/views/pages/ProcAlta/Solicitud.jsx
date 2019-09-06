import React from "react";
import {Card, CardHeader,CardBody,Label, FormGroup, Form, Input, Container, Row, Col, InputGroup, InputGroupAddon,InputGroupText,Button,CardTitle,CardText } from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

// Components 
import Select from 'react-select';


// Import api node js
import { server, api_name, listEstrellas, listDisponible, today, listUnidadTiempo } from "variables/general.jsx";
import 'react-block-ui/style.css';


//  /puesto



class Solicitud extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            server:server,
            puesto:[],
            modalidad:[],
            equipo:[],
            accesos:[],
            plazo:[],
            descripcion_modalidad: '',
            user_aprobador_jefe:[],
            codigo_aprobador:'',
            codigo_jefe:'',
            nombres_aprobador:'',
            nombres_jefe:'',
            script_modalidad:"",

            datasolicitud:{
                id_aprobador:'',
                id_jefe_directo: '',
                id_puesto:'',
                id_puesto_tipo:'',
                cantidad: '',
                id_modalidad:'',
                id_modalidad_tipo:'',
                fecha_estimada_inicio:'',
                id_plazo:'',
                id_plazo_tipo:'',
                detalle_solicitud:[],
                nombre_cliente:'',
                descripcion_servicio:"",
                volumen_motivo:"",
                inicio_estimado_tiempo:'',
                estimacion_duracion_tiempo:'',
                observaciones:'', 
                descripcion:'',
                remoneracion:'',
                usuario_registro:'HROJAS',
                estado:'1',
            }

        };
        
        
        fetch(this.state.server + api_name + '/service_grupo')
        .then(response=>response.json())
        .then(function(data){
            var puesto=[];
            var modalidad=[];
            var equipos=[];
            var accesos=[];
            var plazo=[];
            for (let i = 0; i < data.length; i++) {
                const datos = data[i];
                if(datos.grupo=='PUESTO'){
                    puesto.push(datos);
                }else if(datos.grupo=='MODALIDAD'){
                    modalidad.push(datos);
                }else if(datos.grupo=='EQUIPO'){
                    equipos.push(datos);
                }else if(datos.grupo=='ACCESOS'){
                    accesos.push(datos);
                }else if(datos.grupo=='PLAZO'){
                    plazo.push(datos);
                }
            }
            this.setState({puesto:puesto});
            this.setState({modalidad:modalidad});
            this.setState({equipo:equipos});
            this.setState({accesos:accesos});
            this.setState({plazo:plazo});
        }.bind(this));

        fetch(this.state.server + api_name + '/aprobador/'+this.state.codigo_aprobador)
        .then(response=>response.json())
        .then((user_aprobador_jefe)=>this.setState({user_aprobador_jefe}));

        // Insert data solicitud
        
        this.inputchange = this.inputchange.bind(this);
        this.buscar_user_apro = this.buscar_user_apro.bind(this);
        
        this.inputJefe=this.inputJefe.bind(this);
        this.buscar_user_jefe=this.buscar_user_jefe.bind(this);

        this.btnguardar=this.btnguardar.bind(this);



        
    }

    inputchange (event){
        this.setState({codigo_aprobador:event.target.value});
    }

    inputJefe(event){
        this.setState({codigo_jefe: event.target.value});
    }

    buscar_user_apro =(e)=>{
        // Cargar data user apro
        var data =this.state.user_aprobador_jefe;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.codigo==this.state.codigo_aprobador){
                this.setState({nombres_aprobador: element.nombres});
                // this.setState({id_aprobador:element.id})
                // console.log(element.id);
                this.state.datasolicitud.id_aprobador=element.id;
                this.forceUpdate();
            }
        }
    }
    // cargar user jefe
    buscar_user_jefe =(e)=>{
        var data =this.state.user_aprobador_jefe;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.codigo==this.state.codigo_jefe){
                this.setState({nombres_jefe: element.nombres});
                this.state.datasolicitud.id_jefe_directo=element.id;
                this.forceUpdate();
            }
        }
    }

    dataPuesto=(e)=>{
        this.state.datasolicitud.id_puesto='';
        this.state.datasolicitud.id_puesto_tipo='';
        const data = this.state.puesto;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.id==e.target.value){
                this.state.datasolicitud.id_puesto=element.id;
                this.state.datasolicitud.id_puesto_tipo=element.grupo;
            }
        }
        this.forceUpdate();

    }

    dataCantidad=(e)=>{
        this.state.datasolicitud.cantidad=e.target.value;
        this.forceUpdate();
    }

    modalidadDes=(e)=>{
        const data = this.state.modalidad;
        this.setState({descripcion_modalidad: ''});
        this.setState({script_modalidad: ''})
        this.state.datasolicitud.id_modalidad='';
        this.state.datasolicitud.id_modalidad_tipo='';
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.id==e.target.value){
                this.setState({descripcion_modalidad: element.detalle});
                this.state.datasolicitud.id_modalidad=element.id;
                this.state.datasolicitud.id_modalidad_tipo=element.grupo;
            }
        }

        // Limpiar data
        this.state.datasolicitud.nombre_cliente='';
        this.state.datasolicitud.descripcion_servicio='';
        this.state.datasolicitud.volumen_motivo='';
        this.state.datasolicitud.inicio_estimado_tiempo='';
        this.state.datasolicitud.estimacion_duracion_tiempo='';
        this.state.datasolicitud.observaciones='';
        this.forceUpdate();

        if(e.target.value==12){
            
            const components =(<>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Nombre Cliente</Label>
                            <Col md="3">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataNombreCliente}/>
                                </InputGroup>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Descripción de Servicio</Label>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataDescripcionServicio}/>
                                </FormGroup>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col md="12">
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Inicio Estimado del contrato</Label>
                        <Col md="3">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="date" onChange={this.dataInicioEstimadoTiempo}/>
                            </InputGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>DUracion estimado del tiempo</Label>
                        <Col md="4">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataEstimacionDuracionTiempo}/>
                            </FormGroup>
                        </Col> 
                    </Row>
                </Col>
            </Row>
            </>);
            this.setState({script_modalidad: components})
        }if(e.target.value==13){
            const components =(<>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Nombre Cliente</Label>
                            <Col md="3">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataNombreCliente} />
                                </InputGroup>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Ventas Actuales (Volumen)</Label>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataDescripcionServicio} />
                                </FormGroup>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col md="12">
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Ventas estimadas (volumen)</Label>
                        <Col md="3">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataVolumenMotivo} />
                            </InputGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Fecha estimada del incremento de volumen</Label>
                        <Col md="4">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="date" onChange={this.dataInicioEstimadoTiempo} />
                            </FormGroup>
                        </Col> 
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Duración estimada del pico de volumen</Label>
                        <Col md="3">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataEstimacionDuracionTiempo} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>);
            this.setState({script_modalidad: components})
        }else if(e.target.value==14){
            const components =(<>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Nombre de la persona a reemplazar</Label>
                            <Col md="3">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataNombreCliente} />
                                </InputGroup>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Motivo de la Suplencia</Label>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataVolumenMotivo} />
                                </FormGroup>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Fecha de Inicio de la suplencia</Label>
                            <Col md="3">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="date" onChange={this.dataInicioEstimadoTiempo} />
                                </InputGroup>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Duración estimada de la suplencia</Label>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataEstimacionDuracionTiempo} />
                                </FormGroup>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
            </>);
            this.setState({script_modalidad: components})
        }if(e.target.value==15){
            const components =(<>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Nombre del cliente o clientes</Label>
                            <Col md="3">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataNombreCliente} />
                                </InputGroup>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Descripción de servicios que se incrementarán</Label>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="text" onKeyUp={this.dataDescripcionServicio} />
                                </FormGroup>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col md="12">
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Motivo del incremento</Label>
                        <Col md="3">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataVolumenMotivo} />
                            </InputGroup>
                        </Col>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"0px", marginTop:"-5px"}}>Fecha estimada de inicio de campaña</Label>
                        <Col md="4">
                            <FormGroup>
                                <Input className="form-control-sm" id="example3cols1Input" placeholder="" type="date" onChange={this.dataInicioEstimadoTiempo} />
                            </FormGroup>
                        </Col> 
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Row>
                        <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Duración estimada de la campaña</Label>
                        <Col md="3">
                            <InputGroup>
                                <Input className="form-control-sm" placeholder="" type="text" onChange={this.dataEstimacionDuracionTiempo} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>);
            this.setState({script_modalidad: components})
        }else if(e.target.value==16){
            const components =(<>
                <Row>
                    <Col md="12">
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"15px", marginTop:"-5px"}}>Observaciones</Label>
                            <Col md="8">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" onKeyUp={this.dataObservaciones} />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>);
            this.setState({script_modalidad: components})
        }

        
    }
    
    dataDate =(e)=>{
        this.state.datasolicitud.fecha_estimada_inicio=e.target.value;
        this.forceUpdate();
    }

    dataPlazo =(e)=>{
        const data = this.state.plazo;
        this.state.datasolicitud.id_plazo='';
        this.state.datasolicitud.id_plazo_tipo='';
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.id==e.target.value){
                this.state.datasolicitud.id_plazo=element.id;
                this.state.datasolicitud.id_plazo_tipo=element.grupo;
            }
        }
        this.forceUpdate();
    }

    // Equipo y acceso

    dataEquipo =(e)=>{
        var data = this.state.equipo;
        if (e.target.checked==true) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (element.id==e.target.value) {
                    var d={id_grupo:e.target.value,id_grupo_tipo:element.grupo};
                    this.state.datasolicitud.detalle_solicitud.push(d);
                    console.log(element)
                }
            }
        }else{
            // Remove equipo
            const datos_detall=this.state.datasolicitud.detalle_solicitud;
            for (let i = 0; i < datos_detall.length; i++) {
                if (datos_detall[i].id_grupo===e.target.value) {
                    datos_detall.splice(datos_detall.indexOf(datos_detall[i]),1);
                }
            }
        }
        console.log(this.state.datasolicitud.detalle_solicitud);
        // console.log(e.target.value);
        // console.log(e.target.checked);
        this.forceUpdate();
    }

    dataAccesos =(e)=>{
        var data = this.state.accesos;
        if (e.target.checked==true) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (element.id==e.target.value) {
                    var d={id_grupo:e.target.value,id_grupo_tipo:element.grupo};
                    this.state.datasolicitud.detalle_solicitud.push(d);
                    console.log(element)
                }
            }
        }else{
            // Remove equipo
            const datos_detall=this.state.datasolicitud.detalle_solicitud;
            for (let i = 0; i < datos_detall.length; i++) {
                if (datos_detall[i].id_grupo===e.target.value) {
                    datos_detall.splice(datos_detall.indexOf(datos_detall[i]),1);
                }
            }
        }
        console.log(this.state.datasolicitud.detalle_solicitud);
        // console.log(e.target.value);
        // console.log(e.target.checked);
        this.forceUpdate();
    }

    // Sustentacion
    dataNombreCliente=(e)=>{
        this.state.datasolicitud.nombre_cliente=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.nombre_cliente);
    }

    dataDescripcionServicio=(e)=>{
        this.state.datasolicitud.descripcion_servicio=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.descripcion_servicio);
    }

    dataVolumenMotivo=(e)=>{
        this.state.datasolicitud.volumen_motivo=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.volumen_motivo);
    }

    dataInicioEstimadoTiempo =(e)=>{
        this.state.datasolicitud.inicio_estimado_tiempo=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.inicio_estimado_tiempo);
    }

    dataEstimacionDuracionTiempo =(e)=>{
        this.state.datasolicitud.estimacion_duracion_tiempo=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.estimacion_duracion_tiempo);
    }

    dataObservaciones=(e)=>{
        this.state.datasolicitud.observaciones=e.target.value;
        this.forceUpdate();
        console.log(this.state.datasolicitud.observaciones);
    }

    btnguardar=(event)=>{
        fetch(this.state.server + api_name + '/solicitudes',{
            method: 'POST', 
            body:  JSON.stringify(this.state.datasolicitud),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=>res.json())
        .then(function (data){
            console.log(data);
            alert(data.respuesta)
        });
    }
    
    


    

    render() {
        const misEquipos=this.state.equipo;
        const misAccesos = this.state.accesos;
        const misPlazos=this.state.plazo;

        return (
        <>
            <SimpleHeader name="Creación de Solicitud de alta" parentName="Forms" />
            <Container className="mt--6" fluid>
            <Card className="mb-4">
                <CardHeader>
                <h3 className="mb-0">Creación de Solicitud de Alta</h3>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                    {/* className="row" */}
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Codigo Aprobador</Label>
                            <Col md="2">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" value={this.state.codigo_aprobador} onChange={this.inputchange}/>
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                        <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.buscar_user_apro}/>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="" placeholder="" type="text" disabled value={this.state.nombres_aprobador}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Código Jefe Directo</Label>
                            <Col md="2">
                                <InputGroup>
                                    <Input className="form-control-sm" placeholder="" type="text" value={this.state.codigo_jefe} onChange={this.inputJefe}  />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText className="form-control-sm" style={{margin:0, padding:0}}>
                                        <Button className="fas fa-search btn btn-sm " style={{width:"100%"}} onClick={this.buscar_user_jefe}/>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Input className="form-control-sm" id="" placeholder="" type="text" disabled value={this.state.nombres_jefe}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span><b>Datos del Requerimiento</b></span>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Descripción de Puesto</Label>
                            <Col md="2">
                                {/* <Select options={this.state.puesto} className="form-control-sm" isClearable isSearchable placeholder="Perfil"/> */}
                                <Input type="select" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" style={{width: "90%"}} onChange={this.dataPuesto} >
                                    <option value="">[seleccione]</option>
                                    {
                                        this.state.puesto.map((v, i)=>{
                                            return(<>
                                                <option value={v.id}>{v.descripcion}</option>
                                            </>);
                                        })
                                    }
                                </Input>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-100px", marginTop:"-5px"}}>Cantidad de Recurso</Label>
                            <Col md="3">
                                <Input type="text" name="cantidad" id="exampleSelect" className="form-control-sm" style={{width: "90%"}} onKeyUp={this.dataCantidad} />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Modalidad</Label>
                            <Col md="2">
                                {/* <Select options={this.state.modalidad} className="form-control-sm" isClearable isSearchable placeholder="Modalidad" onChange={this.modalidadDes}/> */}

                                <Input type="select" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" style={{width: "90%"}} onChange={this.modalidadDes}>
                                    <option value="">[seleccione]</option>
                                    {
                                        this.state.modalidad.map((v, i)=>{
                                            return(<>
                                                <option value={v.id}>{v.descripcion}</option>
                                            </>);
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Input type="text" value={this.state.descripcion_modalidad} name="" id="" className="form-control-sm" placeholder="Descripción de la modalidad" disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Fecha Estimada de Incio</Label>
                            <Col md="2">
                                <Input type="date" name="select" id="exampleSelect" className="form-control-sm" onChange={this.dataDate}/>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"29px", marginTop:"-5px"}}>Plazo</Label>
                            <Col md="3">
                                {/* <Select options={this.state.plazo} className="form-control-sm" isClearable isSearchable placeholder="Plazo"/> */}
                                <Input type="select" name="select" id="exampleSelect" bsSize="sm" className="form-control-sm" style={{width: "90%"}} onChange={this.dataPlazo}>
                                    <option value="">[seleccione]</option>
                                    {
                                        misPlazos.map((v, i)=>{
                                            return(<>
                                                <option value={v.id}>{v.descripcion}</option>
                                            </>);
                                        })
                                    }
                                </Input>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Label className="form-control-label" htmlFor="example-text-input" md="2" style={{marginRight:"-70px", marginTop:"-5px"}}>Equipo</Label>
                            <Col md="2">
                                <Card body style={{padding:"5px", margin:"5px"}}>
                                    {
                                        misEquipos.map((v, i) => {
                                            return(<>
                                                <FormGroup check style={{width:"90%"}}>
                                                    <Label check>
                                                        <Input type="checkbox" value={v.id} id="" onClick={this.dataEquipo} />{' '}
                                                        {v.descripcion}
                                                    </Label>
                                                </FormGroup>
                                            </>);
                                        })
                                    }
                                </Card>
                            </Col>
                            <Label className="form-control-label" htmlFor="example-text-input" md="1" style={{marginRight:"10px", marginTop:"-5px"}}>Acceso</Label>
                            <Col md="3">
                                <Card body style={{padding:"5px", margin:"5px"}}>
                                    {
                                        misAccesos.map((v, i) => {
                                            return(<>
                                                <FormGroup check style={{width:"90%"}}>
                                                    <Label check>
                                                        <Input type="checkbox" value={v.id} id="" onClick={this.dataAccesos} />{' '}
                                                        {v.descripcion}
                                                    </Label>
                                                </FormGroup>
                                            </>);
                                        })
                                    }
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="7">
                                <span><b>Motivos que sustentan la Contratación</b></span>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="8">
                                <div style={{borderStyle: "dashed", padding:"10px", width:"93.5%"}}>    
                                {   
                                    this.state.script_modalidad
                                }
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="7">
                                <div style={{width:"100%"}}>
                                    <div style={{float:"right", marginRight: "-55px"}}>
                                        <Button color="warning" className="btn btn-sm">Limpiar</Button>
                                        <Button color="success" className="btn btn-sm" onClick={this.btnguardar}>Guardar</Button>
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
export default Solicitud;
