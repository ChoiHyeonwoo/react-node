//User, Images,Comments는 다른 객체들과 조합해서 Back에서 전달받기 때문에 대문자로 표현(sequalize)
// 1. 데이터 구성 2. 액션구성 (리듀서 구성 시)
export const initialState = {
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [{
        User: {
          nickname: 'nero',
        },
        content: '우와 개정판이 나왔군요~',
      }, {
        User: {
          nickname: 'hero',
        },
        content: '얼른 사고싶어요~',
      }]
    }],
    imagePaths: [],
    postAdded: false,
  };
  
  const ADD_POST = 'ADD_POST';
  
  export const addPost = {
    type: ADD_POST,
  };
  
  const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [],
    Comments: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        return {
          ...state,   // 불변성을 지킴.
          mainPosts: [dummyPost, ...state.mainPosts], // 새 데이터를 앞에다 추가해야 가장 상단에 추가.
          postAdded: true,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };