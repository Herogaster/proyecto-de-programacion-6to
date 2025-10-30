let p = localStorage.getItem('total');
console.log(p);
let span = document.getElementById("span");
span.textContent = p;
if(p >= 7)
    {
     let img = document.createElement("img");
     img.src = "https://media.tenor.com/PIViNMNiLSMAAAAj/momo-el-momo.gif"
        let div = document.querySelector(".momo");
        div.appendChild(img);
    }else{
            let img = document.createElement("video");
            img.setAttribute('controls','');
            img.width="640"; 
            img.height="360";
            
            img.setAttribute('loop','');
            img.setAttribute('autoplay','');
     img.src = "pedazo de fracasado.mp4"
        let div = document.querySelector(".momo");
        div.appendChild(img);
    }