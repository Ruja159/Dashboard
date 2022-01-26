import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import {getProfile} from "../../services/ProfileService";

interface ProfileState {
    name: string,
    lastName: string,
    profilePicture: string
}

const initialState: ProfileState = {
    name: "",
    lastName:"",
    profilePicture: ""
};

export const getProfileAsync = createAsyncThunk<ProfileState>(
    'profile/fetchProfile',
    async (): Promise<ProfileState> => getProfile(),
);

export const profileSlice = createSlice({
    name: 'profile',
    initialState, 
    reducers: {
       setProfileName: (state, action: PayloadAction<ProfileState>) => {
           const {name, lastName, profilePicture} = action.payload
                state.name = name
                state.lastName = lastName
                state.profilePicture = profilePicture
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileAsync.pending, ((state, action) => console.log("pending")))
            .addCase(getProfileAsync.fulfilled, (state, action: PayloadAction<ProfileState>) => {
                const {name, lastName, profilePicture} = action.payload
                    state.name = name
                    state.lastName = lastName
                    state.profilePicture = profilePicture

            })
            .addCase(getProfileAsync.rejected, ((state,action) => console.log("rejected")))
    }
});

export const { setProfileName } = profileSlice.actions;
export default profileSlice.reducer;
