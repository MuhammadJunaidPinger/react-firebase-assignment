// import userReducer from './Reducers/userReducer'
    const reducer = (state = {}, action) => {
        // console.log("reducer--> ", action)
        switch (action.type) {
            case 'UPDATE-USER': {
                return {...state, user: action.user}
            }
            case 'DELETE-USER':{
                return {...state, user: null}
            }
            default: {
                return {...state}
            }
        }
    }
export default reducer;