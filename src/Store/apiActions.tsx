
import { createAction } from '@reduxjs/toolkit'

export const callBegan = createAction<any>("api/callBegan")
export const callSuccess = createAction<any>("api/callSuccess")
export const callFailed = createAction<any>("api/callFailed")