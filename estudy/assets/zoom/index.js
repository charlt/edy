(function(){

    // it's option if you want to change the WebSDK dependency link resources.
    // ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.2/lib', '/av'); // CDN version default
    // ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/1.7.2/lib', '/av'); // china cdn option 
    // ZoomMtg.setZoomJSLib('http://localhost:9999/node_modules/@zoomus/websdk/dist/lib', '/av'); // Local version default    
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    var datosDocente = JSON.parse(localStorage.getItem('docente'));
    var identity = JSON.parse(localStorage.getItem('identity'));
    var url = JSON.parse(localStorage.getItem('urlLeave'));    
    var passwordZoom = JSON.parse(localStorage.getItem('passwordZoom'));    
    
    
    var meetConfig = {
        apiKey: datosDocente['apikey'],
        apiSecret: datosDocente['apisecret'],
        meetingNumber: datosDocente['idmeeting'],
        userName: `${identity.primer_apellido} ${identity.segundo_apellido} ${identity.nombre}`,
        passWord: passwordZoom,
        leaveUrl: url,
        role: 0
    };

    var signature = ZoomMtg.generateSignature({
        meetingNumber: meetConfig.meetingNumber,
        apiKey: meetConfig.apiKey,
        apiSecret: meetConfig.apiSecret,
        role: meetConfig.role,
        success: function(res){
        }
    });

    ZoomMtg.init({
        leaveUrl: meetConfig.leaveUrl,
        success: function () {
            ZoomMtg.join({
                meetingNumber: meetConfig.meetingNumber,
                userName: meetConfig.userName,
                signature: signature,
                apiKey: meetConfig.apiKey,
                userEmail: '',
                passWord: meetConfig.passWord,
                success: function(res){
                    //localStorage.removeItem('docente');
                }, error: function(res) {
                }
            });
        }, error: function(res) {
            console.log(res);
        }
    });
})();