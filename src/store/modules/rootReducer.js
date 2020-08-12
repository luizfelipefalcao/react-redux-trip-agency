import { combineReducers } from 'redux';

import reserve from './reserve/reducer';

//combina todos os reducers aqui para servir quando for criada a store
export default combineReducers({
    reserve
})