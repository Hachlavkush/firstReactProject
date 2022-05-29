import {products} from "../data.json";
import Products from "./Products";

function Shop(props){
    return(
        <div className="shop flex-80">
            <Products data={props.products} 
            selectSizes= {props.selectSizes} 
            handleAddToCart = {props.handleAddToCart}/>
        </div>
    );
}

export default Shop;