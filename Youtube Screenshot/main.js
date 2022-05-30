document.onkeydown = (evt) => {
    if (evt.shiftKey && evt.code == 'KeyA') {
        let video = document.getElementsByTagName("video")[0];
        if (video.paused || video.ended) {
            return;
        }
        video.pause();
        let c1 = document.createElement("canvas");
        c1.width = video.videoWidth;
        c1.height = video.videoHeight;
        let context = c1.getContext("2d");
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        video.play();
        c1.toBlob((t) => {
            let z = URL.createObjectURL(t);
            const link = document.createElement('a');
            link.href = z;
            var d = new Date();
            var x = d.toLocaleString('en-US').split(',');
            var date = x[0].trim();
            var time = x[1].trim();
            var date_final = date.replaceAll('/', '_');
            var time_final = time.substring(0, time.length - 2).replaceAll(":", "_");
            console.log("youtubeScreenshot_" + date_final + "_" + time_final);
            link.download = "youtubeScreenshot_" + date_final + "_" + time_final;
            link.dispatchEvent(
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                })
            );
        }, 'image/jpeg', 1);
    }
};
