import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlices";
import cardsReducer from "../features/cards/cardsSlice";

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['topics', 'quizzes', 'cards'] // Only persist these reducers
};

// Combine reducers
const rootReducer = combineReducers({
  topics: topicsReducer,
  quizzes: quizzesReducer,
  cards: cardsReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
export default store;
