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


// export const get = createAsyncThunk(
//   'http://127.0.0.1:8000/accounts/readd',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  // reducers: {
  //   getReadded: (state)=> {
  //     return state.readdedUsers
  //   }
  // }
  
});

export const { getReadded } = usersSlice.actions;

export const selectUsers = (state) => state.users.readdedUsers;

export default usersSlice.reducer;