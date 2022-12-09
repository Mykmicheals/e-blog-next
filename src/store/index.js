import { createSlice, configureStore } from '@reduxjs/toolkit'

const authState = {
    isLoggedIn: false,
    username: '',
    token: '',
    email: ''
}

const initialNews = {
    news: [],
    posts: []
}


const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        setUsername(state, action) {
            state.username = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
    }
})


const newsSlice = createSlice({
    name: 'news',
    initialState: initialNews,
    reducers: {
        storeNews(state, action) {
            state.news = action.payload
        },
        storePosts(state, action) {
            state.posts = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        news: newsSlice.reducer
    }
})

export const authActions = authSlice.actions
export const newsActions = newsSlice.actions
export default store