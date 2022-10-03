// import { useAuthContext } from "./useAuthContext"

export const useAdminLogout = () =>{
    // const {dispatch} = useAuthContext()
    const alogout = ()=>{
        //remove user from local storage
        localStorage.removeItem('Admin')

        //dispatch logout action
        // dispatch({type : 'LOGOUT'})
    }
    return {alogout}
}