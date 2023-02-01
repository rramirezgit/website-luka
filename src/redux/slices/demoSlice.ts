import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DemoState {
  background: string
  button: string
  font: string
  border: number
  imgUrl: string
  title: string
}

const initialState: DemoState = {
  background: '0878ff26',
  button: '0878ff',
  font: '',
  border: 0,
  imgUrl: 'https://cdn.dribbble.com/users/113499/screenshots/14147543/media/2462401306aa800a3a5910d9c921956a.png?compress=1&resize=400x300',
  title: 'Esto es una prueba'
}

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    changeBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload
    },
    changeButton: (state, action: PayloadAction<string>) => {
      state.button = action.payload
    },
    changeFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload
    },
    changeBorder: (state, action: PayloadAction<number>) => {
      state.border = action.payload
    },
    changeImg: (state, action: PayloadAction<string>) => {
      state.imgUrl = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    }
  }
})

export const { changeBackground, changeButton, changeFont, changeBorder, changeImg, changeTitle } = demoSlice.actions

export default demoSlice.reducer
