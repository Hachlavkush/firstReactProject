import React from "react";
import itemcard from "./itemcard";
import data from './data';


const Home = ()  => {
    return (
       <div>
            <h1 className="text-center mt_3">All Items</h1>
            <section className="py-4 container">
                <div className="row justyfy-content-center">
                    {data.productData.map((item, index) => {
                         return(
                             <itemcard
                             img={item.img}
                             titlt={item.title} 
                             desc={item.desc} 
                             price={item.price}
                             item={item}
                             key={index}
                             />
                         )
                    })}
              
                </div>

            </section>
       </div>
    );
};

export default Home;