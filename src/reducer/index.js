import { combineReducers } from 'redux';
import gifUrls from './reducers';

const rootReducer = combineReducers({
  gifUrls,
});

export default rootReducer;
