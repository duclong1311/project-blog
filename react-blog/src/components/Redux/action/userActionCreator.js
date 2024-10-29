export const FETCH_USER_LOGIN_SUCESS = 'FETCH_USER_LOGIN_SUCESS';
export const FETCH_USER_PERSONAL_POST = 'FETCH_USER_PERSONAL_POST';

export const doLogin = (data) => {
    return {
        type: FETCH_USER_LOGIN_SUCESS,
        payload: data
    }
}

export const fetchPersonalPost = (data) => {
    return {
        type: FETCH_USER_PERSONAL_POST,
        payload: data
    }
}