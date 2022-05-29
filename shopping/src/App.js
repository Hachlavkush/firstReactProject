import React from 'react';
import Home from './Home';
import cart from './cart';
import {cartProvider} from 'react-use-cart';


function App() {
     return (
       < >
         <cartProvider>
           <Home />
           <cart />
           </cartProvider>
           </>
       );
}

export default App;
