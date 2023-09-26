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
  initialState
});

export const commentsReducers = commentsSlice.reducer;