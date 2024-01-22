const ytdl = require('ytdl-core');
const cors = require('cors')
// Replace 'YOUR_VIDEO_URL' with the actual YouTube video URL
const express = require('express');
const axios = require('axios')
const app = express();

app.use(express.json());
app.use(cors())

app.get('/',(request,response)=>{
    response.json({
        message:"server Online Got to /video"
    })
})
app.get('/video',async (request,response)=>{
    try {
        const videoURL = 'https://www.youtube.com/watch?v=HsTEzhRn19s';
        let info = await ytdl.getInfo(videoURL);
        let formate = ytdl.filterFormats(info.formats,'audioandvideo')
        // console.log('Formats with audio found!', info);
        const axiosResponse = await axios.get(formate[0].url, { responseType: 'arraybuffer' });
        response.json({arraydata:[axiosResponse.data]});

    } catch (error) { 
        // console.error('Error:', error.message); 
        response.json({"error":error.message})
    }

})

app.listen(5000,()=>{
    console.log("app is rining on server 5000");
})