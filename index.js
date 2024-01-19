const ytdl = require('ytdl-core');

// Replace 'YOUR_VIDEO_URL' with the actual YouTube video URL
const express = require('express');
const app = express();

app.use(express.json());
app.get('/',(request,response)=>{
    response.json({
        message:"server Online Got to /video"
    })
})
app.get('/video',async (request,response)=>{
    try {
        const videoURL = 'https://www.youtube.com/watch?v=HsTEzhRn19s';
        let info = await ytdl.getInfo(videoURL,{filter:"audioonly"});
        let formate = ytdl.filterFormats(info.formats,'audioandvideo')
        // console.log('Formats with audio found!', info);
        response.send(formate);

    } catch (error) { 
        // console.error('Error:', error.message); 
        response.json({"error":error.message})
    }

})

app.listen(5000,()=>{
    console.log("app is rining on server 5000");
})