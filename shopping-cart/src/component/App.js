import React from "react";
import Cart from "./Cart";
import Shop from "./Shop";
import Sidebar from "./Sidebar"
import {products} from "../data.json";
import './Component/App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        seletedSizes: [],
        cartItems: [],
    };
   }
    
   componentDidMount(){
     if(localStorage.carts){
       this.setState({cartItems: JSON.parse(localStorage.carts) || [] });
     }
     window.addEventListener(
       'beforeunload',
        this.handleUpdateLocalStorage);
   }

   componentWillUnmount(){
     window.removeEventListener('beforeunload',
     this.handleUpdateLocalStorage);
   }

   handleUpdateLocalStorage = ()=> {
     localStorage.setItem("carts", JSON.stringify(this.state.cartItems));
   };

   handleAddToCart = (p) => {
     let isPresent = this.state.cartItems.findIndex(product => product.id === p.id) !== -1;
     if(isPresent){
      this.incrementQuantity(p.id);
     } else{
     this.setState(prevState => ({
       cartItems: prevState.cartItems.concat({...p, quantity: 1}),
     }));
    }
    
   } ;

   incrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedcartItems = prevState.cartItems.map(p => {
        if(p.id === id ){
          return{
            ...p, 
            quantity: p.quantity + 1
          };
           }
           return p;
      });
      return {
        cartItems: updatedcartItems,
      };
    });
  };

  decrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedcartItems = prevState.cartItems.map(p => {
        if(p.id === id ){
          return{
            ...p, 
            quantity: p.quantity - 1
          };
           }
           return p;
      })
      return {
        cartItems: updatedcartItems,
      };
    });
  };

  deleteItems = (id) => {
    this.setState((prevState) => {
      let updatedcartItems = prevState.cartItems.filter(p => {
        return p.id !== id;
      });
      return {
        cartItems: updatedcartItems,
      };
    });
  };


   handleClick = (size) => {
       if(this.state.seletedSizes.includes(size)){
           this.setState(prevState => ({
               seletedSizes: prevState.seletedSizes.filter((s) => s !== size),
          }));
       } else{
    this.setState(prevState => ({
        seletedSizes: prevState.seletedSizes.concat(size),
   }));
   }
   };
  render(){
  return (
    <div className="wrapper flex space-between">
     <Sidebar 
     products = {products} 
     seletedSizes = {this.state.seletedSizes} 
     handleClick = {this.handleClick}/>

     <Shop 
     products = {products}
     seletedSizes = {this.state.seletedSizes} 
     handleAddToCart = {this.handleAddToCart} />

     <Cart cartItems = {this.state.cartItems}
     incrementQuantity={this.incrementQuantity}
     decrementQuantity={this.decrementQuantity}
     deleteItems={this.deleteItems}/>
     </div>
  );
}
}
export default App;
