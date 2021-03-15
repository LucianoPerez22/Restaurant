import { Component } from 'react';

import Fondo from './header-background/fondo.png';
import WSP from './header-background/whatsapp.png';
import Instagram from './header-background/instagram.png';

class Cabecera extends  Component {
    constructor(props){
        super(props)
      }

    render() {
        
      return(
            <div className="container text-center" style={{
                backgroundImage: `url(${Fondo})`,
                backgroundSize:'cover',
                border: '1px solid grey'
                //height:'5em'
            }}>
                <div className="text-light">
                    <h1  style={{
                        fontSize: '2em',
                        textShadow: '0px 3px 6px #FFFF00',
                        fontFamily: 'Permanent Marker',
                        fontWeight: 'bold',
                        WebkitTextStrokeWidth:0.5,
                        WebkitTextStrokeColor:'grey',
                        
                    }}>{this.props.nombre}</h1>

                    <h5 style={{
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize:'0.8em'
                    }}>{this.props.direccion}</h5>
                </div>
                <div className="text-light" style={{
                    display: 'flex',
                    alignItems : 'flex-start',
                    justifyContent:'center'
                
                }}>
                    <img src={WSP} />
                    <h5 style={{
                        float:'left',
                        marginLeft:'5px',
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize:'0.8em'
                    }}>{this.props.wsp}</h5>
                </div>

                <div className="text-light" style={{
                    display: 'flex',
                    alignItems : 'flex-start',
                    justifyContent:'center'
                
                }}>
                    <img src={Instagram} />
                    <h5 style={{
                        float:'left',
                        marginLeft:'5px',
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize:'0.8em'
                    }}>{this.props.instagram}</h5>  
                </div>

                <div className="mt-2 text-right text-light">
                        <h5 className="badge badge-info" >{ this.props.mesa } </h5>
                        
                    </div>

            </div>
      )
    }
  }

  export default Cabecera;