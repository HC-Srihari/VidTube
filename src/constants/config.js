
export const YOUTUBE_API_KEY = String(import.meta.env.VITE_API_KEY);
// let YOUTUBE_API_KEY;
// const key1 = String(import.meta.env.VITE_API_KEY1);
// const key2 = String(import.meta.env.VITE_API_KEY2);
// const key3 = String(import.meta.env.VITE_API_KEY3);

// const arr=[key1,key2,key3]

// function getApiKey(){

//     arr.map((key)=>{
//         const getTestData = async()=>{
//             try {
//                 const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=10&key=${key}`;
//                 const data = await fetch(url);
//                 if (!data.ok) {
//                 throw new Error('Failed to fetch recommended videos');
//                 }else{
//                     YOUTUBE_API_KEY = key
//                 }
//                 const json = await data.json();
//                 console.log(json);
//                 setResponse(json.items);
//             } catch (error){
//                 console.log(error);
//             }
    
//             getTestData()
//             if(YOUTUBE_API_KEY)
//                 return YOUTUBE_API_KEY
        
//     }
//     })
// }
