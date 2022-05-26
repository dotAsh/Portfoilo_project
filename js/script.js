/*type js starts */
let t_js_list = document.querySelectorAll(".tyj")
let arr = Array.from(t_js_list)


arr.map((item)=>{
    let line  = item.dataset.var
    let i = 0
    function type_js(){
        item.innerHTML += line.charAt(i)
        i++
        if(i == line.length+1){
            i = 0

            item.innerHTML = ""
        }
    }
    let stop = setInterval(()=>{
        type_js()
    },250)
})
/*type js ends*/

/*veno box starts */
let b = document.querySelector("body")
let img_b = document.querySelector(".img_b")

b.addEventListener("click",function(e){

    if(e.target.classList[0] == "veno"){
        img_b.classList.add("veno_box")
        img_b.innerHTML += `<img src="${e.target.dataset.var}" alt="img_1">
        <button class="close"><i class="fa-solid fa-xmark"></i></button>`
    }else{
        img_b.classList.remove("veno_box")
        img_b.innerHTML =""
    }
})
/*veno box ends*/

/*counter up starts*/
let h_1 = document.querySelectorAll(".cu")
let arr2 = Array.from(h_1)

arr2.map((item)=>{
    let i = 0
    let n = parseInt(item.innerHTML)
    function counter_up(){
        i++
        if(i>=n){
            clearInterval(stop2)
        }
        item.innerHTML = i
    }
    let stop2 = setInterval(()=>{
        counter_up()
    },100)
})
/*counter up ends*/