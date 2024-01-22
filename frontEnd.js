const videoTag = document.querySelector('iframe');

console.log('fetching');
fetch('http://localhost:5000/video/').then(resopnse =>resopnse.json()).then(data=>{
        
    // const blob = new Blob([data]);
    const videoData = data.arraydata[0].data;
    const blob = new Blob([new Uint8Array(videoData)], { type: 'video/mp4' });

// Create a URL for the Blob
const url = URL.createObjectURL(blob);

    // videoTag.url = url
    const newIframe = `<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    const body = document.querySelector('body')
    body.innerHTML = newIframe;
    
    // const url = URL.createObjectURL((data.arraydata[0].data));

    // videoTag.src = data.url
})