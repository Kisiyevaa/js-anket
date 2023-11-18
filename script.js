const correctArrays=["E","E","E","E"]
const form=document.querySelector("form")
const result=document.querySelector(".result")
form.addEventListener("submit",e=>{
    e.preventDefault()

    let score=0
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnsers.forEach((answer,index)=>{
      if(answer===correctArrays[index]){
        score+=25
      }
    })
    result.classList.remove("d-none")
    let toplam=0
    const print=setInterval(()=>{
        result.querySelector("span").textContent=`${toplam}%`
        if(toplam==score){
            clearInterval(print)
        }else{
            toplam++
        }
    },10)
})