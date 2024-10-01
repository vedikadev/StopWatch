let hour = 0;
let min = 0;
let sec = 0;
let instanceInt;
let counter = 1;
document.getElementById("start").addEventListener('click', startFunc);
document.getElementById("reset").addEventListener('click', resetFunc);
function startFunc(){
    const stop = document.createElement("button");
    stop.id = "stop";
    stop.innerText = "Stop";
    stop.style.backgroundColor = "rgba(255, 0, 0, 0.448)";
    document.getElementById("btns").append(stop);
    const start = document.getElementById("start")
    document.getElementById("btns").removeChild(start);
    
    const lap = document.createElement("button");
    lap.id = "lap";
    lap.innerText = "Lap";
    document.getElementById("btns").prepend(lap);
    const reset = document.getElementById("reset")
    document.getElementById("btns").removeChild(reset);
    lap.addEventListener('click', lapFunc);
    instanceInt = setInterval(function(){
    sec++;
    if(sec==60){
        min++
        sec = 0;
    }
    if(min==60){
        hour++;
        min = 0;
    }
    let h = hour<10 ? '0'+ hour : hour;
    let m = min<10 ? '0'+ min : min;
    let s = sec<10 ? '0'+ sec : sec;
    document.getElementById("time").innerHTML = `${h}:${m}:${s}`

    }, 1000);


    document.getElementById("stop").addEventListener('click', function(){
        clearInterval(instanceInt)

        const str = document.createElement("button");
        str.id = "start";
        str.innerText = "Start";
        str.style.backgroundColor = "rgba(113, 113, 113, 0.784)";
        document.getElementById("btns").append(str);
        str.addEventListener('click', startFunc);
        const stop = document.getElementById("stop")
        document.getElementById("btns").removeChild(stop);

        const reset = document.createElement("button");
        reset.id = "reset";
        reset.innerText = "Reset";
        document.getElementById("btns").prepend(reset);
        const lap = document.getElementById("lap")
        document.getElementById("btns").removeChild(lap);
        reset.addEventListener('click', resetFunc)
        
    })

}

function resetFunc(){
    hour = 0;
    min = 0; 
    sec = 0;
    let h = hour<10 ? '0'+ hour : hour;
    let m = min<10 ? '0'+ min : min;
    let s = sec<10 ? '0'+ sec : sec;
    document.getElementById("time").innerHTML = `${h}:${m}:${s}`
    counter = 1
    const ul = document.getElementById("ul-item")
    ul.innerHTML = ""
}


document.getElementById("lap").addEventListener('click', lapFunc);
function lapFunc(){
    const ul = document.getElementById("ul-item")
    const li = document.createElement('li');
    li.id = "li-item";
    const div1 = document.createElement("div");
    div1.innerText = `Lap ${counter}`;
    counter++;
    const div2 = document.createElement("div");
    div2.innerText = document.getElementById("time").innerHTML;
    li.append(div1)
    li.append(div2)
    ul.prepend(li)

}
