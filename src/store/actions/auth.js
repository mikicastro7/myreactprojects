import Axios from 'axios'

export const authStart = () => {
    return {
        type: 'AUTH_START'
    }
}

export const authSuccess = (access_token, userId, name) => {
    return {
        type: 'AUTH_SUCCESS',
        access_token: access_token,
        userId: userId,
        name: name
    }
}

export const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    }
}

export const logout = () => {
    return{
        type: 'AUTH_LOGOUT'
    }
}
export const auth = (name, password, password_confirmation) => {
    return dispatch => {
        dispatch(authStart());
        if(password_confirmation == null){
            Axios({
                method: 'post',
                url: '/login',
                data: {
                  name: name,
                  password: password,
                }
            }).then(function (response) {
                dispatch(authSuccess(response.data.access_token, response.data.user.id, response.data.user.name));
            })
            .catch((error) => {
                dispatch(authFail(error.response.data.message))
            });
        } else {
        Axios({
            method: 'post',
            url: '/register',
            data: {
              name: name,
              password: password,
              password_confirmation: password_confirmation
            }
        }).then(response => {
            dispatch(authSuccess(response.data.access_token, response.data.user.id, response.data.user.name));
        })
        .catch(error => {
            
            dispatch(authFail(error.response.data.message));
        });
        }
    }
}
