export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
export const LOAD_HASH_POSTS_REQUEST = 'LOAD_HASH_POSTS_REQUEST';
export const LOAD_HASH_POSTS_SUCCESS = 'LOAD_HASH_POSTS_SUCCESS';
export const LOAD_HASH_POSTS_FAILURE = 'LOAD_HASH_POSTS_FAILURE';
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const ADD_DUMMY = 'ADD_DUMMY';
export const initialState = {
  mainPosts:[
    {
      content:'',
      createdAt:new Date(),
      User:{
        id:1,
        nickname:"GeonilJang",
      },
      content:"welcome",
      img:'',
    },
  ], //state <-- 이거를 어떻게 바꿀지 정하는게 reducer
  imagePath:[],
  addPostErrorReason:'',
  isAddingPost:false,
  postAdded:false,
}

const dummyPost =   {
    content:'',
    createdAt:new Date(),
    User:{
      id:2,
      nickname:"Suzy",
    },
    content:"i am a model",
    img:'',
  }


const addPost = {
  type:ADD_POST_REQUEST,
}

const addDummy = {
  type:ADD_DUMMY,
  data:{
    content:'Hello',
    UserId:1,
    User:{
      nickname:"GeonilJang"
    }
  }
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:{
      return {
        ...state,
        isAddingPost:true,
        addPostErrorReason:'',
        postAdded:false,
      }
    }
    case ADD_POST_SUCCESS:{
      return {
        ...state,
        isAddingPost:false,
        mainPosts:[dummyPost, ...state.mainPosts],
        postAdded:true,
      }
    }
    case ADD_POST_FAILURE:{
      return {
        ...state,
        isAddingPost:false,
        addPostErrorReason:action.error,
      }
    }
    case ADD_DUMMY:{
      return {
        ...state,
        mainPosts:[dummyPost, ...state.mainPosts],
      }
    }
    default:{
      return {
        ...state,
      }
    }
  }
}

export default reducer;


/*
r
  setState((prevState) => {
    return {
    field: {...prevState.field}
  }
})





*/
