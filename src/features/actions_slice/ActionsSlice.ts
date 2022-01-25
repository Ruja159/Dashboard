import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getActions} from "../../services/ActionsService";

interface ActionState {
    id: number,
    name: string,
    due: string,
    price: string
}

const initialState: ActionState[] = [];

export const getActionsAsync = createAsyncThunk<any>(
    'actions/fetchActions',
    async (): Promise<any> => getActions(),
);

export const actionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getActionsAsync.pending, ((state, action) => console.log("pending")))
            .addCase(getActionsAsync.fulfilled, (state , action: PayloadAction<any>) => {
              action.payload.map((item: any) => {
                   state.push(item)
               })

            })
            .addCase(getActionsAsync.rejected, ((state,action) => console.log("rejected")))
    }
});

export const {} = actionsSlice.actions;
export default actionsSlice.reducer;
