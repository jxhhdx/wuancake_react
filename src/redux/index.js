import { createStore, combineReducers } from 'redux'


const testReduce = function(store={}, action) {
    switch(action.type){
        case 'ADD_1':
            return {
                ...store,
                number: action.number + 1
            }
        default:
            return store
    }
}


const rootReducers = combineReducers({
    test: testReduce
})

let store = createStore(rootReducers)

export default store