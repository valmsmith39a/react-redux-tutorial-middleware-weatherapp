import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  // Redux promise middleware sees the action coming in, looks at
  // payload property. If the payload is a promise, redux-promise then
  // stops action and once request finishes, it dispatches new action with same // type but with the payload of the data

  switch(action.type) {
    case FETCH_WEATHER:
      // Never manipulate current state directly inside a reducer
      // Should return a new instance of state
      // Concat returns a new array with old and new elements

      return [ action.payload.data, ...state ];
  }
  return state;
}
