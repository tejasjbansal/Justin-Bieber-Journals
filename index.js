for(var i=0;i<7;i++){
    document.querySelectorAll(".set button")[i].addEventListener("click",function(){
        if(this.style.color=="black"){
            this.style.color="rgb(36, 56, 63)";
        }else{
            this.style.color="black";
        }
        
        var clickbutton = this.innerHTML;
        var activebutton  = document.querySelector("#" + clickbutton);
        activebutton.classList.add("pressed");
        setTimeout(function(){
            activebutton.classList.remove("pressed");
        },100);
        var audio1= document.getElementById("myaudio1");
        var audio2= document.getElementById("myaudio2");
        var audio3= document.getElementById("myaudio3");
        var audio4= document.getElementById("myaudio4");
        var audio5= document.getElementById("myaudio5");
        var audio6= document.getElementById("myaudio6");
        var audio7= document.getElementById("myaudio7");
        switch (clickbutton){
            case "Heartbreaker":
                
                if(audio1.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio1.play();
                }   
                else{
                    audio1.pause();
                }
                break;
            case "HoldTight":
                
                if(audio2.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio2.play();
                }
                    
                else{
                    audio2.pause();
                }
                break;
            case "Recovery":
                
                if(audio3.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio3.play();
                }
                    
                else{
                    audio3.pause();
                }
                break;
            case "BadDay":
                
                if(audio4.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio4.play();
                }
                    
                else{
                    audio4.pause();
                }
                break;
            case "RollerCoster":
                
                if(audio5.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio5.play();
                }
                    
                else{
                    audio5.pause();
                }
                break;
            case "OneLife":
                
                if(audio6.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio6.play();
                }
                    
                else{
                    audio6.pause();
                }
                break;
            case "Swapitout":
                
                if(audio7.paused){
                    for(var i=0;i<7;i++)
                    document.querySelectorAll("audio")[i].pause();
                    audio7.play();
                }
                    
                else{
                    audio7.pause();
                }
                break;
            default:
                console.log("errpr");
        }
    });  
      
}


