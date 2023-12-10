var con = document.querySelector("#container")
var love = document.querySelector("i")
var icon = document.querySelector(".ri-heart-3-line")

con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)"
    love.style.opacity = 1
    // setTimeout(function(){
    //     love.style.opacity = 0
    // },800)
    setTimeout(function(){
    
    
        
        love.style.transform = "translate(-50%,-50%) scale(0)"
     },800)

     setTimeout(function(){
        icon.style.color= "red"
        icon.style.transform = "translate(-50%,-50%) scale(1)"
     },400)

})
icon.addEventListener("click",function(){
    icon.style.color = "black"
})




