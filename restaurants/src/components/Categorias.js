import React,{ Component } from 'react';
class Catogorias extends  Component {
    constructor(props){
        super(props)
        this.state={
            datos:[],
            
        }
        
      }

      async componentDidMount() {
        await fetch('http://localhost:4000/categorias')
        .then(res => res.json())
        .then((data) => {
          this.setState({ datos: data })
          
        })
        .catch(console.log)
      }


    render() {
      return(     
              <div className="container" style={{
                backgroundColor: '#7777F4'
              }}>
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1 w-100 o-hidden">
                        <ul className="nav nav-fill text-uppercase position-relative flex-nowrap "> 
                            {
                                this.state.datos.map((data, i) => {
                                  return (
                                    <li className="nav-item" key={i} >
                                    <a href="#" className="nav-link text-light" style={{
                                      fontSize:'0.8em',
                                      fontWeight: 'bold',
                                    }}>{data.name}</a>
                                </li>

                                    );
                                  })
                            }
                        </ul>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#" className="btn-right btn-link toggle p-2"><i className="ion-chevron-right"></i></a>
                    </div>
                </div>
            </div>
         
         
      )
    }
}

    export default Catogorias;