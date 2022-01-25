import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAllTransactions} from "../../services/TransactionService";

interface TransactionState {
    key: string,
    category: {
        title: string,
        subtitle: string,
        icon: string
            }
    profile: {
        counter_party: string,
        image: string
            }
    date: string,
    time: string,
    payment_type: string,
    amount: number
}

const initialState: TransactionState[] = [];

export const getAsyncTransactions = createAsyncThunk<any>(
    'transaction/fetchTransactions',
    async (): Promise<any> => getAllTransactions(),
)

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        updateTransactionState: (state, action: PayloadAction<any>) => {
            console.log(action.payload, "ACTION PAYLOAD")
           state.push(...action.payload)
        },
        reset: () => initialState

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncTransactions.pending, ((state => {console.log("Pending transactions")})))
            .addCase(getAsyncTransactions.fulfilled, (((state, action: PayloadAction<any>) => {
                console.log(action.payload, "TRANSACTION PATLOAD")
               action.payload.map((item: any) => {
                           const updatedData = {
                               key: item.key,
                               category: {
                                   title: item.category.title,
                                   subtitle: item.category.subtitle,
                                   icon: item.category.image
                               },
                               profile: {
                                   counter_party: item.profile.counter_party,
                                   image: item.profile.image
                               },
                               date: new Date(item.date).toLocaleDateString(),
                               time: new Date(item.date).toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',  hour12: true }),
                               payment_type: item.payment_type,
                               amount: item.amount
                           }
                           state.push(updatedData)
                       })
            })))

            .addCase(getAsyncTransactions.rejected, ((state => {console.log("Pending rejected")})))
    }
})

export const {updateTransactionState, reset} = transactionSlice.actions;
export default transactionSlice.reducer;