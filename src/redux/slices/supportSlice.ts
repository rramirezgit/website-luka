import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { subjects } from 'logic'

export interface SupportState {
  subject: { label: string, value: string } | undefined
  name: string
  lastName: string
  email: string
  message: string
  phone: { code: string, number: string }
}

const initialState: SupportState = {
  subject: subjects[0],
  name: '',
  lastName: '',
  email: '',
  message: '',
  phone: { code: '', number: '' }
}

export const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    changeSubject: (state, action: PayloadAction<{ label: string, value: string }>) => {
      state.subject = action.payload
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    changePhoneCode: (state, action: PayloadAction<string>) => {
      state.phone.code = action.payload
    },
    changePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone.number = action.payload
    }
  }
})

export const {
  changeSubject,
  changeName,
  changeLastName,
  changeEmail,
  changeMessage,
  changePhoneCode,
  changePhoneNumber
} = supportSlice.actions

export default supportSlice.reducer
