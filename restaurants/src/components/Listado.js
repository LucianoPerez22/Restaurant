import React from 'react';
import { Component } from 'react';

import ListadoModal from './ListadoModal'

class Listado extends  Component {
    constructor(props){
        super(props)

        this.cant = []
        this.precios = []
        this.listado=[]
        this.pedido_enviar=[]

        this.state={
            datos:[],
            pedido:0,
            cant: this.cant,
            precios: this.precios,
            modal: false,
            
        }

      }

      async componentDidMount() {
          let i = 0;
        await fetch('http://localhost:4000/data')
        .then(res => res.json())
        .then((data) => {
           this.setState({ datos: data })

           for (i = 0; i < this.state.datos.length; i++){
            this.cant.push(0)
           }
          
        })
        .catch(console.log)
      }

      abrirModal = (event) =>{
        this.setState({modal: !this.state.modal })
        
      }

       btnSumar =(el) =>  {
            const aux = this.cant;
            let check = false
            const ele = parseInt(el.target.id)
            let pedidos = this.pedido_enviar
            
            aux[el.target.id] = aux[el.target.id] + 1 ;
            console.log("Soy cant: " + aux)

            this.setState({cant: aux});
            this.setState({pedido: parseFloat(this.state.pedido) + parseFloat(this.precios[el.target.id])})
            
            for(var i = 0; i < this.pedido_enviar.length; i++) {
                if (this.pedido_enviar[i].id== ele) {
                      check = true
                      pedidos[i].cant= parseFloat(pedidos[i].cant)+1
                }
            }
    
            if (check ===false){ 
                console.log("Estoy entrando aca!!!")
                this.pedido_enviar.push({
                    id: el.target.id,
                    cant: aux[ele],
                    nombre: this.listado[ele].nombre, 
                    precio: parseFloat(this.listado[ele].precio) })
            }

            this.pedido_enviar=pedidos
            this.setState({cant: this.cant})
            console.log(this.pedido_enviar)
            
      }
        /* CUANTO SEA 0 NO SEGUIR RESTANDO */
      btnRestar =(el) =>  {
        let aux = this.cant;

        const control = parseInt(aux[el.target.id]) - parseInt(1);


        aux[el.target.id] = control;
        

        if (control > 0){
            //aux[el.target.id]=aux[el.target.id]-1;
            this.cant=aux;

            //this.setState({cant: this.cant})

            this.setState({pedido: parseFloat(this.state.pedido) - parseFloat(this.precios[el.target.id])})  

            for(var i = 0; i < this.pedido_enviar.length; i++) {
                if (this.pedido_enviar[i].id== el.target.id) {
                    this.pedido_enviar[i].cant= control
                }
            }
            
        }
        else if (control <= 0){
            aux[el.target.id]=0
            this.cant=[];
            this.cant=aux;

            //this.setState({cant: this.cant})

            this.setState({pedido: parseFloat(this.state.pedido).toFixed(2) - parseFloat(this.precios[el.target.id]).toFixed(2)})  

            for(var i = 0; i < this.pedido_enviar.length; i++) {
                if (this.pedido_enviar[i].id== el.target.id) {
                    this.pedido_enviar[i].cant= control
                }
            }
           

            let index = this.pedido_enviar.findIndex(item => item.id === el.target.id);

            if(index > -1){
            this.pedido_enviar.splice(index, 1);
            }
           
            console.log("Elemento eliminado")
               
            }   
        
        console.log(this.pedido_enviar)

  }
    render() {  
      return(
            <div className="container text-left" style={{
                border:'1px solid grey'
                }} >
                    {
                    this.state.modal ? <ListadoModal 
                                            abrirModal={this.abrirModal}
                                            datos={this.pedido_enviar}
                                        /> : null       
                    }          
            {  
                this.state.datos.map((data, i) => {
                    this.precios.push(data.precio)
                    this.listado.push({nombre: data.nombre, precio: data.precio})
                    
                    let mostrarImg = `./img/${data.img}`;

                    return (
                        <div key={i} >
                            <div >
                                <div style={{
                                display: 'flex',
                                alignItems : 'flex-start',
                                justifyContent:'space-between'
                            
                            }}>
                                    <h4 className="text-left" style={{
                                    fontSize:'0.9em',
                                    marginTop:'0',
                                    color: 'navy',
                                    textDecoration: 'underline'
                                }}
                                id={'nomb' + data.id}
                                >{data.nombre}</h4>

                                    <p className="text-danger " style={{
                                        fontWeight: 'bold',
                                    }}>$
                                        {data.precio}
                                    </p>
                                </div>
                             
                             <div style={{
                                display: 'flex',
                                alignItems : 'flex-start',
                                justifyContent:'space-start'
                            
                            }}>
                                
                                <img src={mostrarImg} 
                                style={{
                                    width:'80px',
                                    height:'auto',
                                    marginTop:'5px',
                                    border:'1px solid blue',
                                    marginRight:'3px'
                                }}/>
                                
                            
                                <p style={{
                                    fontSize: '0.7em',
                                    
                                }}
                                
                                >
                                {data.descripcion}</p>

                            </div>
                            {this.props.mesa  ? 
                            <div style={{
                                marginTop:'10px',
                                textAlign: 'center'
                            
                            }}>
                                <div>
                                    {
                                        this.state.cant[i] > 0 ? 
                                        <textarea 
                                            placeholder="Agregue observaciones si lo necesita"
                                            rows="2" cols="50"
                                            style={{
                                                width: '80%',
                                                fontSize: '0.7em'
                                            }}
                                            >

                                        </textarea>
                                        : false
                                    }
                                </div>
                                <div style={{
                                    textAlign:'right',
                                    marginTop: '10px'
                            
                                 }}>     
                                    <button className="btn btn-success mr-1" 
                                        value={data.precio}  id={data.id}  
                                        onClick={this.btnRestar}
                                        >-
                                    </button>
                                        
                                    <input type="text" id={'texto'+data.id} 
                                        value={this.state.cant[i] > 0 ?this.state.cant[i] : 0} 
                                        
                                        style={{
                                        width: '2em',
                                        textAlign: 'center',
                                        
                                            }} 
                                        
                                    ></input>
                                    
                                    <button className="btn btn-danger ml-1" 
                                        value={data.precio} 
                                        id={data.id} 
                                        onClick={this.btnSumar}
                                        >+
                                    </button>    

                                </div>

                          </div>
                           : false}
                        
                        <hr style={{
                            border: '1px solid',
                            color: 'tea'
                        }} />
                        
                        {
                            this.state.pedido > 0 ?

                                <button className="btn btn-danger" style={{
                                    position: 'fixed', 
                                    zIndex: 9999,
                                    bottom: '10px', 
                                    right: '30%',
                                    fontSize: '0.8em',
                                    fontWeight: 'normal',
                                    //marginBottom:'10px'
                                }} onClick={ this.abrirModal }
                                >
                                    Enviar Pedido <span className="badge badge-light ">${this.state.pedido}</span></button>
                                
                                : false
                    }
                    </div>
                </div>
                );
                })
                     
            }
            </div>
        )
    }
}

  export default Listado;