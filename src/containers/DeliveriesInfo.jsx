import React from 'react';
import DeliveriesTable from '../components/DeliveriesTable';
import { getDeliveries } from '../api';
import { withRouter } from 'react-router';


 class DeliveriesInfo extends React.Component {
     state = {
         deliveries: []
     }


   componentDidMount() {
       getDeliveries()
       .then(response => {
           if (!response.ok) {
               throw Error(response.statusText);
           }
           return response.json();
       })
       .then(deliveries => {
         this.setState({ deliveries });
       })
       .catch(err => {
         alert('No fue posible cargar sus pedidos.');
         this.props.history.push('/');
       });
   }



  render() {
      return (
          <DeliveriesTable deliveries={this.state.deliveries} />
      );
  }
}

export default withRouter(DeliveriesInfo);