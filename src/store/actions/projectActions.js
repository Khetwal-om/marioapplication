export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        // async call
        const firestore=getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Matrix',
            authorLastName: 'Keyboards',
            authorId: 123434,
            createdAt: new Date()
        })



        dispatch({type: 'CREATE_PROJECT',project: project})
    }    


}