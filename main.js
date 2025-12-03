const widthID = document.getElementById("widthID")
const widthID2 = document.getElementById("widthID2")
const square = document.getElementById("square")
const heightID = document.getElementById("heightID")
const heightID2 = document.getElementById("heightID2")
const ansType = document.getElementById("ansType")
const tempCata = document.getElementById("numCata")
const selection = document.getElementById("selection")
const radii = document.getElementById("radii")
const statis = document.getElementById("statis")
const dropDown = document.getElementById("dropDown")
const helper = document.querySelector(".helper")
let percentage = 0 
let tries = 0
let success = 0
let perim = false
let ans;
let ansText = Number(ansType.value)
let circumfer = false
const ansList = []
let amount = 0
let elevens;

function refresh() {
     selection.innerHTML = ""
    elevens = ansList.slice(-11)
    elevens.forEach((value, index) => {
        const numClone = tempCata.content.cloneNode(true)
        const number = numClone.querySelector("#number")
         const box = numClone.querySelector(".box")
        const truIndex = ansList.length - elevens.length + index
        box.style.backgroundColor = "#59BE50"
        number.innerHTML = truIndex + 1
        selection.appendChild(numClone)
       

        if (String(value).includes("f")) {
            box.style.backgroundColor = "#FD7D7D"

        }
        if (selection.children.length > 10) {
            selection.removeChild(selection.firstChild)
            amount--
        }
    })    
}
function generateSq() {
    radii.innerHTML = ""
    square.style.backgroundColor = "rgba(36, 145, 255, 0.583)"
     square.style.borderRadius = "0px"
     square.style.backgroundImage = ""
     radii.innerHTML = ""
    let height1 = Math.floor(Math.random() * 10 + 1)
let width1 = Math.floor(Math.random() * 10 + 1)
    widthID.innerHTML = width1 + "cm"
    heightID.innerHTML = height1 + "cm"
    widthID2.innerHTML = ""
    heightID2.innerHTML = ""
    square.style.height = height1 * 10  + "px"
    square.style.width = width1 * 10 + "px"
    ans = height1 * width1
    refresh()
    ansType.placeholder = "Area"
}

function generatePeri() {
    radii.innerHTML = ""
     square.style.borderRadius = "0px"
     square.style.backgroundImage = ""
     square.style.backgroundColor = "rgba(36, 145, 255, 0.583)"
    let height1 = Math.floor(Math.random() * 10 + 1)
let width1 = Math.floor(Math.random() * 10 + 1)
    widthID.innerHTML = width1 + "cm"
    heightID.innerHTML = height1 + "cm"
    widthID2.innerHTML = width1 + "cm"
    heightID2.innerHTML = height1 + "cm"
    square.style.height = height1 * 10  + "px"
    square.style.width = width1 * 10 + "px"
    ans = (height1 + width1) * 2
   
    refresh()
    ansType.placeholder = "Perimeter"
}

function generateCircumfer() {
  let radiiValue = Math.floor(Math.random() * 10) + 1

  radii.innerHTML = radiiValue + "cm"
    square.style.borderRadius = "1000px"
    square.style.backgroundImage = "url('circle.png')"
    square.style.backgroundSize = "contain"
    square.style.backgroundRepeat = "no-repeat"
    square.style.backgroundPosition = "center";
    square.style.backgroundColor = "transparent"
    square.style.height = "130px"
    square.style.width = "130px"
    heightID.innerHTML = ""
    widthID.innerHTML = ""
    widthID2.innerHTML = ""
    heightID2.innerHTML = ""
    ans = radiiValue * 2 *  Math.PI
    ans = ans.toFixed(2)
   refresh()
        ansType.placeholder = "Circumference"
}

function submit() {
    
    ansText = Number(ansType.value)
    if (ansText == ans) {
        
         ansList.push(ans)
         
         success++
         tries++
         
    }
    
  
    else {
        
         ansList.push(ans + "f")
         
         tries++
    }
       percentage = (success / tries) * 100
       percentage = percentage.toFixed(1)
       statis.innerHTML = `Score: ${success}/${tries} ${percentage}%`
       
       if (tries > 0 && success < 1) {
            percentage = 0 
            statis.innerHTML = `Score: ${success}/${tries} ${percentage}%`
            
       }
    if (!perim && !circumfer) {
generateSq()
}

else if (perim) {
    generatePeri()
}

else if (circumfer) {
    generateCircumfer()
}
ansType.value = ""
ansType.focus()
}


function slide() {
     const helpTemp = document.getElementById("helpTemp").content.cloneNode(true)
     helper.appendChild(helpTemp)

     dropDown.onclick = function() {
          document.remove(helpTemp)
          dropDown.onclick = slide
     }
}

    if (!perim && !circumfer) {
generateSq()
}

else if (perim) {
    generatePeri()
}

else if (circumfer) {
    generateCircumfer()
}




