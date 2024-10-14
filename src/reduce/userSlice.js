import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    },
    reducers: {
        loggedUser: (state, actions) => {
            state.user = actions.payload;
            localStorage.setItem("user", JSON.stringify(state.user))
        },
    },
})

export const { loggedUser } = userSlice.actions

export default userSlice.reducer