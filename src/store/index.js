import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

//cria a store com os reducers combinados
const store = createStore(rootReducer);

export default store;