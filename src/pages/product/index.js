import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
 state = {
  product: {},
 };



 async componentDidMount(){
  const {id} = this.props.match.params;

  const response = await api.get(`/products/${id}`);

  const { data } = response;

  this.setState({product: data});
 }


 render(){
  const { product } = this.state;
  const { title, description } = product;

  return (
   <div className="product-info">
    <h2>{title}</h2>
    <p>{description}</p>
   </div>
  )
 }
}