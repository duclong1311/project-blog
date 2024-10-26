import { FETCH_USER_LOGIN_SUCESS } from "../action/userActionCreator";

const INITIAL_STATE = {
    account: {
        access_token: '',
        username: '',
    },
    isAuthenticated: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCESS:
            console.log('check action', action);
            return {
                ...state, account: {
                    access_token: action?.payload?.token,
                    username: action?.payload?.username,
                },
                isAuthenticated: true
            };
        default:
            return state;

    }
}

export default userReducer;