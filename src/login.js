import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {SetLogin} from './reducers/features/loginReducer'

function Login() {
    const {isLogin} = useSelector(state => state.Login)

//     const { activities, isLoadingActivities } = useSelector(
//     (state) => state.Activity
//   );
    const dispatch = useDispatch()

  return (
    <div>
         <button
          onClick={() => dispatch(SetLogin())}
        >
          Login
        </button>
        <span>{isLogin} Hello</span>
    </div>
  )
}

export default Login