import {createSlice} from '@reduxjs/toolkit'

const videoSlice = createSlice({
    name:'video',
    initialState:{
        videoList :[],
        videoId:'',
        channelId:'',
        categoryId:'',
        searchQuery:'',
        categoryFlag:false
    },
    reducers:{
        addVideos: (state,action)=>{
            state.videoList = action.payload
            // console.log(state.videoList);
        },
        setVideoId:(state,action)=>{
            state.videoId = action.payload
        },
        setChannelId:(state,action)=>{
            state.channelId = action.payload
        },
        setCategoryId:(state,action)=>{
            state.categoryId = action.payload
        },
        setSearchQuery:(state,action)=>{
            state.searchQuery = action.payload
        },
        setCategoryFlag:(state,action)=>{
            if(action.payload === state.categoryId){

                state.categoryFlag = !state.categoryFlag
            }else{
                state.categoryFlag = true
                state.categoryId = action.payload
            }
        }
        ,
        setCategoryFlagFalse:(state)=>{
            state.categoryFlag = false
        }
        
        

    }
})

export const {
  addVideos,
  setVideoId,
  setCategoryId,
  setChannelId,
  setSearchQuery,
  setCategoryFlag,
  setCategoryFlagFalse,
} = videoSlice.actions;
export default videoSlice.reducer