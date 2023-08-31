import { createSlice } from '@reduxjs/toolkit';
import { openModal, closeModal, toggleNotification } from './actions';

const initialState = {
  modalOpen: false,
  isNotificationVisible: true,
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
        state.modalOpen = false;
      })
      .addCase(toggleNotification, (state) => {
        state.isNotificationVisible = !state.isNotificationVisible;
      });
  },
});

export default rootReducer.reducer;
