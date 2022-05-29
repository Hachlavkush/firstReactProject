function OrderBy(props) {
    return(
        <div className="sort">
            Order By
            <select value={props.seletedOrder} onChange = {props.handleOrderBy}>
                <option value=''>Select</option>
                <option value= 'Lowest'>Lowest to highest</option>
                <option value= 'Highest'>Highest to lowest</option>
            </select>
        </div>
    );
}

export default OrderBy;