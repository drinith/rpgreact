import {createStore,combineReducers} from 'redux'
import pontosReducer from './Pontos/Pontos.reducer'

const rootReducer = combineReducers({
    pontos:pontosReducer
})

const store = createStore(rootReducer)

export default store