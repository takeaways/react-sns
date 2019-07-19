import { all, put, takeLatest, fork, delay} from 'redux-saga/effects';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post'

function* watchAddPost(){
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* addPost(){
  try {
    yield delay(2000),
    yield put({
      type:ADD_POST_SUCCESS,
    })
  } catch (e) {
    yield put({
      type:ADD_POST_FAILURE,
      error:e
    })
  }
}

function* watchAddComment(){
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* addComment(action){
  try {
    yield delay(2000),
    yield put({
      type:ADD_COMMENT_SUCCESS,
      data:{
        postId:action.data.postId
      }
    })
  } catch (e) {
    console.log(e);
    yield put({
      type:ADD_COMMENT_FAILURE,
      error:e
    })
  }
}

export default function* postSaga(){
  yield all([
    fork(watchAddPost),
    fork(watchAddComment)
  ])
}
