import tagsReducer from "./slices/tagsSlice";
import notesReducer from "./slices/notesSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;// defaults to localStorage for web
 



const persistConfig={
    key:"root",
    storage,
};

//reducerları birleştir
const rootReducer = combineReducers({
     notes:notesReducer,
    tags:tagsReducer,
});

//reducerları persisti tanıt
const persistedReducers=persistReducer(persistConfig,rootReducer)

//store u oluştur
const store =configureStore({
    reducer:persistedReducers,
    middleware :(getDefaltMiddleware)=>getDefaltMiddleware({
        serializableCheck:false,
    }),
});

//useSelector her kullandığımız yerde store tipini tanımlamak için kullanıcaz
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const  persistor=persistStore(store);
export default store;



