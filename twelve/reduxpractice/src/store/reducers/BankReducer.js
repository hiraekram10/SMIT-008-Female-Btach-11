const Initial_state = {
    balance:10000,
    list:[]
}

const cahDeposite=(state=Initial_state,action)=>{
    
    if(action.type ==='deposite'){
        return {...state,balance:state.balance + 20000}
    }
    return state
}

export default cahDeposite

