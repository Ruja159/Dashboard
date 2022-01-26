import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllPaymentActions} from "../../services/PaymentActionService";
import {profileSlice} from "../profile_slice/profileSlice";

interface PaymentActionState{
    id: number,
    icon: string,
    text: string
}

const initialState: PaymentActionState[] = []

export const getPaymentActionsAsync = createAsyncThunk(
    'paymentActions/getActions',
    async (): Promise<any> => getAllPaymentActions()
)

export const paymentActionSlice = (createSlice({
    name: 'paymentAction',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
            .addCase(getPaymentActionsAsync.pending, (state) => {console.log("pending")})
            .addCase(getPaymentActionsAsync.fulfilled, (state, action) => {
                console.log("PAYMENTA ACTIONS ASYNC")
                action.payload.map((item: any) => {
                    state.push(item)
                })
            })
            .addCase(getPaymentActionsAsync.rejected, (state) => {console.log("rejected")})
    }
}))

export default paymentActionSlice.reducer;
