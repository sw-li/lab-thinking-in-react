function SearchBar(props){
    const {showInStock,containKeyword} = props
    return(
        <div className="searchOptions">
           <label> Search : <input type="text" onChange={(event)=>{containKeyword(event.target.value)}}/></label>
           <br />
           <label> Show only products in stock <input type="checkbox" onChange={(event)=>showInStock(event.target.checked)}/> </label>
        </div>
    )
}

export default SearchBar