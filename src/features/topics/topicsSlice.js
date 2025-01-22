import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [] // Initialize empty quizIds array for new topics
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase('quizzes/addQuiz', (state, action) => {
      const { id, topicId } = action.payload;
      // Add safety check
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(id);
      }
    });
  }
});

// Selector
export const selectTopics = (state) => state.topics.topics;

// Export action creators and reducer
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
