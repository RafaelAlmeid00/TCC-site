import { createAction } from '@reduxjs/toolkit';

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');
export const toggleNotification = createAction('TOGGLE_NOTIFICATION');
