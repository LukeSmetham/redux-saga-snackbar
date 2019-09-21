import { QUEUE, ADD, DISMISS } from './types';

export const queueSnackbar = (data, snackbarType = 'BasicSnackbar') => ({
    type: QUEUE,
    data,
    snackbarType,
});

export const addSnackbar = (data, snackbarType) => ({
    type: ADD,
    data,
    snackbarType,
});

export const dismissSnackbar = () => ({ type: DISMISS });
