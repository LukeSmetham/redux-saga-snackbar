import { actionChannel, delay, take, put } from 'redux-saga/effects';
import { QUEUE } from './types';
import { addSnackbar, dismissSnackbar } from './actions';


export default function*() {
    const snackChannel = yield actionChannel(QUEUE);
    while (true) {
        const { data, snackbarType } = yield take(snackChannel);
        yield put(addSnackbar(data, snackbarType));
        yield delay(4000);
        yield put(dismissSnackbar());
        yield delay(500);
    }
}
