import {call, put, takeEvery, takeLatest } from "redux-saga/effects"

import {REQUEST_TOP_MOVIES,recieveTopMovies} from './actions'
import {fetchData} from './api'

function* getTopMovies(action){
    try{
const data = yield call(fetchData);
yield put(recieveTopMovies(data));
    } catch(e){
        console.log(e);
    }


}

export default function* mySaga(){
    yield takeLatest(REQUEST_TOP_MOVIES,getTopMovies)
}

