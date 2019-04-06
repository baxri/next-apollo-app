import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import Combined Reducers
import reducers from '../reducers/index';


export default () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }

// export default function configureStore() {
//     const enhancer = compose(
//         // applyMiddleware(
            
//         // )
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
//     const store = createStore(reducers, enhancer)
//     return store
// }