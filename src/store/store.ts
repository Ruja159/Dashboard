import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile_slice/profileSlice'
import actionsReducer from '../features/actions_slice/ActionsSlice'
import transactionsReducer from '../features/transaction_slice/TranslactionSlice'
import paymentActionsReducer from '../features/payment_actions/paymentActionsSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        actions: actionsReducer,
        transaction: transactionsReducer,
        paymentAction: paymentActionsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;