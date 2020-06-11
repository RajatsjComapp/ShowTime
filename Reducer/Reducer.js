const initState ={
    LoggedIn:''
}
export const Reducer = (state=initState,action) =>
{
    switch(action.type)
    {
    case 'logout':
        return {...state,LoggedIn:action.payload}
    case 'login':
        return{...state,LoggedIn:actiopayload}
    }
return state   
}