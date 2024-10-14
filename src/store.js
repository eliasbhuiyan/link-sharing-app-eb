import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reduce/userSlice'

export default configureStore({
    reducer: {
        isLoggedUser: userSlice
    },
})