import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  readdedUsers: [
    {
      accountName: "Matan",
      machineId: "cf:1e:88:c6:66:db"
    },
    {
      accountName: "Or",
      machineId: "65:c1:a5:67:2b:cb"
    }
  ]
};


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  
});

export const {  } = usersSlice.actions;

export const selectusers = (state) => state.users.value;

export default usersSlice.reducer;