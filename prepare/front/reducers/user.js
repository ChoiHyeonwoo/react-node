const dummyUser = {
    id: 1,
    nickname: 'hwchoi',
    Posts: [],
    Followings: [],
    Followers: [],
  };
  
  export const initialState = {
    followLoading: false, // 팔로우 시도중
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
  };
  
  export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
  export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
  export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
  
  export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
  export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
  export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
  
  export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
  export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
  export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
  
  export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
  export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
  export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
  
  export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
  export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
  export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
  
  export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
  export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
  export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
  
  export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
  export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
  
  
  export const signUpAction = (data) => {
    return {
      type: SIGN_UP,
      data,
    };
  };
  
  export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
  };
  
  export const loginAction = (data) => {
    return {
      type: LOG_IN,
      data,
    }
  };
  export const logoutAction = {
    type: LOG_OUT,
  };
  export const signUp = (data) => {
    return {
      type: SIGN_UP,
      data,
    }
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        return {
          ...state,
          isLoggedIn: true,
          me: dummyUser,
          loginData: action.data,
        };
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          isLoggedIn: true,
          me: dummyUser,
          loginData: action.data,
        };
      }
      case LOG_IN_FAILURE: {
        return {
          ...state,
          isLoggedIn: true,
          me: dummyUser,
          loginData: action.data,
        };
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state,
          isLoggedIn: false,
          me: null,
        };
      }
      case SIGN_UP: {
        return {
          ...state,
          signUpData: action.data,
        };
      }
      default: {
        return {
          ...state,
        }
      }
    }
  };