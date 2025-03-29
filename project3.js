const clk = document.getElementById("clock")


setInterval(function(){
    let date = new Date() 
   // console.log(date.toLocaleTimeString())
   clk.innerHTML = date.toLocaleTimeString();
} ,1000)