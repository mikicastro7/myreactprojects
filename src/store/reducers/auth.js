import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        access_token: action.access_token,
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'AUTH_START': return authStart(state, action);
        case 'AUTH_SUCCESS': return authSuccess(state, action);
        case 'AUTH_FAIL': return authFail(state, action);
        default:
            return state;
    }
};

export default reducer;