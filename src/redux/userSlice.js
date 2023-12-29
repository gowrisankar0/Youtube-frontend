import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    user:null,
    loading:false,
    error:false
};


const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{

        loginStart:(state)=>{
           state.loading=true
        },

        loginSuccess:(state,action)=>{
            state.loading=false
           state.user=action.payload;
        },

        loginFaliure:(state)=>{
            state.loading=false;
            state.error=true
    
           
        },

        logout:(state)=>{
           state=initialState
        },

        subcriptions:(state,action)=>{
            if(state.user.subscribedUsers.includes(action.payload)){
                state.user.subscribedUsers.splice(state.user.subscribedUsers.findIndex((channelId)=>channelId===action.payload))
            }else{
                state.user.subscribedUsers.push(action.payload)
            }
        }

    }
})


export const {loginStart,loginSuccess,loginFaliure,logout,subcriptions} =userSlice.actions;
export default userSlice.reducer;