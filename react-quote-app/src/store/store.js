import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});

// npm install redux react-redux @reduxjs/toolkit
// all slices => 1 reducer => 1 store
// Provider store={store}
// dispatch = useDispatch za update
// state = useSelector(state => state.auth) za citanje podataka iz slice-a
