import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        geminiSuggestions:[]
    },
    reducers:{
        // eslint-disable-next-line no-unused-vars
        toggleGPTSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        getGeminiSuggestions:(state,actions)=>{
            state.geminiSuggestions=actions.payload
        }
    }
})
export const {toggleGPTSearchView,getGeminiSuggestions}=gptSlice.actions
export default gptSlice.reducer;