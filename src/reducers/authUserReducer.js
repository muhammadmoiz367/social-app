import {SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED, SIGNOUT_ERROR} from '../actionConstants'

const initialState={
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: []
}

export default function User(state=initialState, action){
    switch(action.type){
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_USER:
            return{
                ...state,
                authenticated: true,
                credentials: action.data
            }
        case SIGNOUT_ERROR:
            return{
                ...state,
                errors: action.err
            }
        default:
            return state
    }
}