
const initSatte = {

    users: [
        {id:1, name: 'John'},
        {id:2, name: 'Phung'},
        {id:3, name: 'Addres'}
    ]
}

const rootReducer = (state = initSatte, action) => {
    switch (action.type) {
        case 'delete_user':
          console.log('delete user is', action);
          return state;
       
        default:
          return state;
    }

    
}

export default rootReducer;