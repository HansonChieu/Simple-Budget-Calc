const monthBtn = document.getElementById("monthlyBtn");
const yearBtn = document.getElementById("yearlyBtn");

function yearBtnDisable(){
    monthBtn.addEventListener("click", function(){
        yearBtn.disabled=!yearBtn.disabled;
        console.log("Disabled yearly button");
});
}

function monthBtnDisable(){ 
    yearBtn.addEventListener("click", function(){
        monthBtn.disabled=!monthBtn.disabled;
        console.log("Disabled monthly button");
    });
}
    

yearBtnDisable();
monthBtnDisable();