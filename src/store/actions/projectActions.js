export const createProject = (project) => {
    return (dispatch,getState,{getFirebae,getFirestore})=>{
        // async call




        dispatch({type: 'CREATE_PROJECT',project: project})
    }    


}