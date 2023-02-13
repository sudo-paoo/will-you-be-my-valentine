async function CopyandOpen() {
    navigator.clipboard.writeText("d291bGQgeW91IGJlIG15IHZhbGVudGluZT8/");
    await sleep(1000)
    window.open("https://www.rapidtables.com/web/tools/base64-decode.html", "_blank");
}


function hoverr() {
    let im = document.getElementById("imgs");
    let h = document.getElementById("head").innerHTML = "Would you be my valentine??";
    im.src = ("./img/wy.jpeg")
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    var t = document.getElementById("noButton");
    var i = Math.floor(Math.random() * 100)+1;
    var j = Math.floor(Math.random() * 250)+1;
    t.style.left = i+"px";
    t.style.top = j+"px";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function yes() {
    let i = document.getElementById("imgs");
    let h = document.getElementById("head").innerHTML = "<33";
    i.src = ("./img/valentine (1).jpeg");
    alert("soerrr?")
    alert("bbgurl HAHAHAHA")
    alert("anong plano sa 14?");
    await sleep(2500);
    i.src="./img/last.jpeg"
}

function no() {
    let im = document.getElementById("imgs");
    let h = document.getElementById("head").innerHTML = "Would you be my valentine??";
    im.src = ("./img/wy.jpeg")
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    var t = document.getElementById("noButton");
    var i = Math.floor(Math.random() * 100)+1;
    var j = Math.floor(Math.random() * 250)+1;
    t.style.left = i+"px";
    t.style.top = j+"px";

}
