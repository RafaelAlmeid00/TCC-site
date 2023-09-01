import { createSlice } from '@reduxjs/toolkit';
import { openModal, closeModal, toggleNotification } from './actions';

const initialState = {
  modalOpen: false,
  isNotificationVisible: false,
};

const rootReducer = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openModal, (state) => {
        state.modalOpen = true;
      })
      .addCase(closeModal, (state) => {
        state.modalOpen = true;
      })
      .addCase(toggleNotification, (state) => {
        state.isNotificationVisible = !state.isNotificationVisible;
      });
  },
});

export default rootReducer.reducer;
