var body = document.querySelector('body')
var divsettingsmenu = document.querySelector("div.configmenu")


function opensettings(){
    divsettingsmenu.classList.add("opened")
        setTimeout(() => {
            document.addEventListener("mouseup",()=>{
                document.addEventListener("mousemove",(e)=>{
                    console.log(e.screenX,e.screenY)
                    if((e.screenX >1640 && e.screenY > 1012) || (e.screenX < 292 && e.screenY < 187)){
                        divsettingsmenu.classList.remove("opened")
                    }
                })
    
    
            
            })
        
        }, 1000);

}

