import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice } from '@reduxjs/toolkit';

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter(
      (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};

const initialState = {
  commentsArray: COMMENTS
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log('addComment action.payload', action.payload);
      console.log('addComment state.commentsArray', state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload
      };
      state.commentsArray.push(newComment);
    }
  }
});

export const { addComment } = commentsSlice.reducer;

export const commentsReducers = commentsSlice.reducer;