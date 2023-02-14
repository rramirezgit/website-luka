import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { languages, fonts, currency } from 'logic'

export interface DemoState {
  background: string
  button: string
  font: { label: string, value: string } | undefined
  language: { label: string, value: string } | undefined
  currency: { label: string, value: string } | undefined
  border: number | number[]
  imgUrl: string
  title: string
}

const initialState: DemoState = {
  background: 'B9D8F8',
  button: '0878FF',
  language: languages[0],
  font: fonts[0],
  currency: currency[0],
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
    changeFont: (
      state,
      action: PayloadAction<{ label: string, value: string } | undefined>
    ) => {
      state.font = action.payload
    },
    changeLanguage: (
      state,
      action: PayloadAction<{ label: string, value: string } | undefined>
    ) => {
      state.language = action.payload
    },
    changeCurrency: (
      state,
      action: PayloadAction<{ label: string, value: string } | undefined>
    ) => {
      state.currency = action.payload
    },
    changeBorder: (state, action: PayloadAction<number | number[]>) => {
      state.border = action.payload
    },
    changeImg: (state, action: PayloadAction<string>) => {
      state.imgUrl = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    resetState: () => initialState
  }
})

export const {
  changeBackground,
  changeButton,
  changeFont,
  changeLanguage,
  changeCurrency,
  changeBorder,
  changeImg,
  changeTitle,
  resetState
} = demoSlice.actions

export default demoSlice.reducer
