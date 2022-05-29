import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.png';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgsrc: 'img1',
        },
        {
            id: 2,
            imgsrc: 'img2',
        },
        {
            id: 3,
            imgsrc: 'img3',
        },
        {
            id: 4,
            imgsrc: 'img4',
        },
        {
            id: 5,
            imgsrc: 'img5',
        },
        {
            id: 6,
            imgsrc: 'img6',
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgsrc, setTempimgsrc] = useState('');

    const getImg = (imgsrc) => {
     setTempimgsrc(imgsrc);
     setModel(true);        
    }
 return(
     <>
     <div className={model? "model open": "model"}>
         <img src={tempimgsrc} />
         <CloseIcon onClick = {() => setModel(false)}/>
     </div>
     
    
     <div className='gallery'>
     
         {data.map((item, index) => {
             return(
                     <div className='pics' key={index} onClick={()=> getImg(item.imgsrc)}>
                         <img src={item.imgsrc} className='img'/>
                     </div>
                   )
               })
         
     }
     
     </div>
     </>
 )
}

export default Gallery