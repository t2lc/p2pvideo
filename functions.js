/**
 **************************************************************** **/

function createP2p() {
    var url = window.location.href;
    var actions = url.split('?');

    if(actions[1]!==undefined){
        var destination = actions[1].split('=');
        window.open(destination[1]);
    }
}

function contentIdFn(contentUrl) {
    var l = document.createElement("a");
    l.href = contentUrl;
    return l.pathname;
}

function switchUploadStatus(){
    var status = window.Streamroot.instances[0].dnaUploadEnabled;
    console.log(status);
    if (window.Streamroot.instances[0].dnaUploadEnabled===true){
        window.Streamroot.instances[0].dnaUploadEnabled = false;
        document.getElementById('switchButton').innerHTML = 'Start upload';
        document.getElementById('switchButton').style.backgroundColor = 'rgb(253, 133, 10)';
    }
    else{
        window.Streamroot.instances[0].dnaUploadEnabled = true;
        document.getElementById('switchButton').innerHTML = 'Stop upload';
        document.getElementById('switchButton').style.backgroundColor = 'rgb(160, 0, 73)';
    }

}

function launchPlayer(streamURL){
    var options = {
        html5: {
            hlsjsConfig: {
                "maxBufferSize": 0,
                "maxBufferLength": 30,
                "liveSyncDuration": 30,
            },
            dnaConfig: {
                "contentIdGenerator": contentIdFn
            },

        }
    };
    console.log(streamURL);

    var player = videojs("demoplayer", options);
    console.log(options.html5.dnaConfig.contentIdGenerator);

    player.src(streamURL);
}

