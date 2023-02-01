import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DemoState {
  background: string
  button: string
  font: string
  language: { label: string, value: string } | null
  border: number
  imgUrl: string
  title: string
}

const initialState: DemoState = {
  background: '0878ff26',
  button: '0878ff',
  language: { label: 'Español', value: 'ES' },
  font: '',
  border: 0,
  imgUrl: '',
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
    changeLanguage: (state, action: PayloadAction<{ label: string, value: string } | null>) => {
      state.language = action.payload
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

export const { changeBackground, changeButton, changeFont, changeLanguage, changeBorder, changeImg, changeTitle } = demoSlice.actions

export default demoSlice.reducer
