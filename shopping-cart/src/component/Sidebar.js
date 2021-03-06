import React from " react";

function Sidebar (props){
    
 let sizes = props.products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    }, []);

    let uniqueSizes =[ ...new Set(sizes)];
    let {seletedSizes} = props;

return(
    <aside className="flex20-sidebar">
        <div className="flex-wrap">
            {
                uniqueSizes.map((size) => (
                <span 
                key={size}
                onClick={ () => props.handleClick(size)} className={`size ${seletedSizes.includes(size) ? 'active' : ""}`}>
                    {size}</span>
                ))
            }
           
        </div>
    </aside>
);
}

export default Sidebar;