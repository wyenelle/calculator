
  const Reducer = (state,action) => {
    switch (action.type) {
        case '1':
            console.log(state)

        // case '1':
        //     return {...state,value : state.value.push(1)}
        // case '2':
        //     return {...state,value : state.value.push(2)}
        // case '3':
        //     return {...state,value : state.value.push(3)}
        // case '4':
        //     return {...state,value : state.value.push(4)}
        // case '5':
        //     return {...state,value : state.value.push(5)}
        // case '6':
        //     return {...state,value : state.value.push(6)}
        // case '7':
        //     return {...state,value : state.value.push(7)}    
        // case '8':
        //     return {...state,value : state.value.push(8)}    
         case '9':
           console.log(state)   
        default:
            return state
    }
}

export default Reducer