const initState ={
    LoggedIn:false
}
export const Reducer = (state=initState,action) =>
{
    switch(action.type)
    {
        case 'logout':
        return{
            LoggedIn:action.payload
        }
        case 'Login':
        return
        {
            LoggedIn:action.payload
        }
           
    }
    return state
}