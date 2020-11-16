import Axios from 'axios'

export const authStart = () => {
    return {
        type: 'AUTH_START'
    }
}

export const authSuccess = (access_token, userId) => {
    return {
        type: 'AUTH_SUCCESS',
        access_token: access_token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
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
            }).then(response => {
                console.log(response.data.access_token);
                dispatch(authSuccess(response.data.access_token, response.data.user.id));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
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
            console.log(response.data.access_token);
            dispatch(authSuccess(response.data.access_token, response.data.user.id));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err));
        });
        }
    }
}
