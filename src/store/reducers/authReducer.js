const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login fail')

      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login ok')

      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout')

      return state
    case 'SIGNUP_SUCCESS':
      console.log('signup')

      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup fail')

      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer
