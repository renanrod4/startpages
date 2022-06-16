var input = document.querySelector("input#searchinput")
var defaultengine = "duck" 
var actualengine = document.querySelector("div.searchengine")
actualengine.innerHTML = '<span class="tooltiptext">'+defaultengine+'</span><img src="/images/'+defaultengine+'.png" alt="'+ defaultengine +'">'
engines = ["duck","google","bing"]
engineid = 1
redirect = false
function search(){
    redirect = true

    if(redirect == true){
        console.log("a")
        if (defaultengine == "google"){
            location.href = "https://google.com/search?q="+input.value
        }else if (defaultengine == "duck"){
            location.href = "https://duckduckgo.com?q="+input.value
        }else if (defaultengine == "bing"){
            location.href = "https://www.bing.com/search?q="+input.value
        }
    }
}
function setengine(){
    engineid+=1
    if(engineid==engines.length+1){
        engineid = 1
    }
    console.log(engineid)
    defaultengine = engines[engineid-1] 
    actualengine.innerHTML = '<span class="tooltiptext">'+defaultengine+'</span><img src="/images/'+defaultengine+'.png" alt="'+ defaultengine +'">'

}
