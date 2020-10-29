const initState={
    projects: [
        {id: '1',title: 'proposal',content: 'dope'},
        {id: '2',title: 'this is where i leave u',content: 'dope'},
        {id: '3',title: 'horrible bosses',content: 'dope'}
    ]
}

const projectReducer =(state=initState,action)=> {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log(action.project)
            
    }
    return state
}
export default projectReducer 