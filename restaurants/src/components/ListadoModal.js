import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ListadoModal extends React.Component {
  
  constructor(props){
    super(props)
    this.total=0

    this.state = {
      buttonLabel:'',
      className:'',
      enviar: false,
      modal:true
    } 
  }
  
  componentDidMount() {
    this.setState({enviar: this.props.abrirModal})
}
   
    toggle = () => {
      this.setState({enviar : !this.state.enviar})
      const { abrirModal } = this.props
        abrirModal(this.state.enviar)
    }

    render(){
    return (
      <div>
        <Modal isOpen={this.state.enviar} toggle={this.toggle} className={this.state.className}>
          <ModalHeader 
            className="bg-primary text-light"
            toggle={this.toggle}
            style={{
              fontSize: '0.7em'
            }}
            >Su Pedido!!!</ModalHeader>
          <ModalBody>
          <table className="table">
            <thead>
                <tr>
                    <th style={{fontSize: '0.8em'}}>Cant</th>
                    <th style={{fontSize: '0.8em'}}>Plato</th>
                    <th style={{fontSize: '0.8em'}}>P.U.</th>
                    <th style={{fontSize: '0.8em'}}>Total</th>
                  </tr>
              </thead>

              <tbody>
             {
               this.props.datos.map((data,i)=>{
                this.total = parseFloat(this.total) + (parseFloat(data.precio) * parseFloat(data.cant))
                 return(
                   
                          <tr>
                            <td style={{fontSize: '0.7em'}}>{data.cant}</td>
                            <td style={{fontSize: '0.7em'}}>{data.nombre}</td>
                            <td style={{fontSize: '0.7em'}}>${data.precio}</td>
                            <td style={{fontSize: '0.7em'}}>${parseFloat(data.precio) * parseFloat(data.cant)}</td>
                          </tr>
                        
                 )
               })
             }
             </tbody>
             </table>

              <div className="text-right text-danger" style={{ marginRight:'1.7em'}}>
                  <h6 style={{fontSize: '0.8em', fontWeight: 'bold'}}>Total    ${this.total/3}</h6>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Enviar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Revisar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  }

  export default ListadoModal;
