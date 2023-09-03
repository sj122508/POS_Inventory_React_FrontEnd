

const initialState = {
  isLogin: "false"
};

export const SetLogin = () => {
    return async (dispatch) => {
        console.log('HELLO')
        dispatch({type:"LOGIN_SUCCESS"})
    }
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
        console.log('HERE')
      return {
        ...state,
        isLogin: "true",
      };
    default:
      return state;
  }
};

export default LoginReducer;
