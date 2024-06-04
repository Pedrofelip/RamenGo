import { selectBroth, selectProtein } from "./index.js"
export async function startCarousel(){
    let brothsMobileContainer = document.getElementById('brothsMobileContainer')
    let brothsListMobile = Array.prototype.slice.call(brothsMobileContainer.childNodes)
    let proteinsMobileContainer = document.getElementById('proteinsMobileContainer')
    let proteinsListMobile = Array.prototype.slice.call(proteinsMobileContainer.childNodes)
    let brothsDots = document.getElementById("brothsDots")
    let proteinsDots = document.getElementById("proteinsDots")
    
    let leftB = document.getElementById("leftComandB")
    let middleB = document.getElementById("middleComandB")
    let rightB = document.getElementById("rightComandB")
    let leftP = document.getElementById("leftComandP")
    let middleP = document.getElementById("middleComandP")
    let rightP = document.getElementById("rightComandP")

    brothsMobileContainer.dataset.selected = 0
    proteinsMobileContainer.dataset.selected = 0

    brothsListMobile.forEach((item)=>{
        item.className=`${item.className} position-0`
    })

    proteinsListMobile.forEach((item)=>{
        item.className=`${item.className} position-0`
    })
    
    brothsDots.childNodes[0].className = `active-${brothsDots.childNodes[0].className}`
    proteinsDots.childNodes[0].className = `active-${proteinsDots.childNodes[0].className}`

    leftB.addEventListener('click', ()=>previousBroth());
    middleB.addEventListener('click', ()=>selectBroth(brothsListMobile[brothsMobileContainer.dataset.selected]));
    rightB.addEventListener('click', ()=>nextBroth());
    leftP.addEventListener('click', ()=>previousProtein());
    middleP.addEventListener('click', ()=>selectProtein(proteinsListMobile[proteinsMobileContainer.dataset.selected]));
    rightP.addEventListener('click', ()=>nextProtein());
}

export function nextProtein(){
    let proteinsMobileContainer = document.getElementById('proteinsMobileContainer')
    let middle = document.getElementById("middleComandP")
    let dots = Array.prototype.slice.call(document.getElementById("proteinsDots").childNodes)

    let listMobile = Array.prototype.slice.call(proteinsMobileContainer.childNodes)
    listMobile.forEach((item)=>{
        item.className= item.className.replace(`position-${proteinsMobileContainer.dataset.selected}`,'')
    })

    if(listMobile.length-1 == proteinsMobileContainer.dataset.selected){
        proteinsMobileContainer.dataset.selected = 0
    }else{
        proteinsMobileContainer.dataset.selected = Number(proteinsMobileContainer.dataset.selected)+1
    }

    listMobile.forEach((item)=>{
        item.className=`${item.className}position-${proteinsMobileContainer.dataset.selected}`
        console.log(item.className)
    })

    dots.forEach((item,idx)=>{
        item.className = item.className.replace('active-','')
        if(idx == proteinsMobileContainer.dataset.selected){
            item.className= `active-${item.className}`
        }
    })
    

    middle.addEventListener('click', ()=>selectProtein(listMobile[proteinsMobileContainer.dataset.selected]));
}
function previousProtein(){
    let proteinsMobileContainer = document.getElementById('proteinsMobileContainer')
    let middle = document.getElementById("middleComandP")
    let listMobile = Array.prototype.slice.call(proteinsMobileContainer.childNodes)
    let dots = Array.prototype.slice.call(document.getElementById("proteinsDots").childNodes)

    listMobile.forEach((item)=>{
        item.className= item.className.replace(`position-${proteinsMobileContainer.dataset.selected}`,'')
    })


    if(0 == proteinsMobileContainer.dataset.selected){
        proteinsMobileContainer.dataset.selected = listMobile.length-1
    }else{
        proteinsMobileContainer.dataset.selected = Number(proteinsMobileContainer.dataset.selected)-1
    }

    listMobile.forEach((item)=>{
        item.className=`${item.className}position-${proteinsMobileContainer.dataset.selected}`
        console.log(item.className)
    })

    dots.forEach((item,idx)=>{
        item.className = item.className.replace('active-','')
        if(idx == proteinsMobileContainer.dataset.selected){
            item.className= `active-${item.className}`
        }
    })

    middle.addEventListener('click', ()=>selectProtein(listMobile[proteinsMobileContainer.dataset.selected]));

}

export function nextBroth(){
    let brothsMobileContainer = document.getElementById('brothsMobileContainer')
    let middle = document.getElementById("middleComandB")
    let listMobile = Array.prototype.slice.call(brothsMobileContainer.childNodes)
    let dots = Array.prototype.slice.call(document.getElementById("brothsDots").childNodes)

    listMobile.forEach((item)=>{
        item.className= item.className.replace(`position-${brothsMobileContainer.dataset.selected}`,'')
    })


    if(listMobile.length-1 == brothsMobileContainer.dataset.selected){
        brothsMobileContainer.dataset.selected = 0
    }else{
        brothsMobileContainer.dataset.selected = Number(brothsMobileContainer.dataset.selected)+1
    }

    listMobile.forEach((item)=>{
        item.className=`${item.className}position-${brothsMobileContainer.dataset.selected}`
        console.log(item.className)
    })
    
    dots.forEach((item,idx)=>{
        item.className = item.className.replace('active-','')
        if(idx == brothsMobileContainer.dataset.selected){
            item.className= `active-${item.className}`
        }
    })

    middle.addEventListener('click', ()=>selectBroth(listMobile[brothsMobileContainer.dataset.selected]));
}

function previousBroth(){
    let brothsMobileContainer = document.getElementById('brothsMobileContainer')
    let middle = document.getElementById("middleComandB")
    let listMobile = Array.prototype.slice.call(brothsMobileContainer.childNodes)
    let dots = Array.prototype.slice.call(document.getElementById("brothsDots").childNodes)

    listMobile.forEach((item)=>{
        item.className= item.className.replace(`position-${brothsMobileContainer.dataset.selected}`,'')
    })


    if(0 == brothsMobileContainer.dataset.selected){
        brothsMobileContainer.dataset.selected = listMobile.length-1
    }else{
        brothsMobileContainer.dataset.selected = Number(brothsMobileContainer.dataset.selected)-1
    }

    listMobile.forEach((item)=>{
        item.className=`${item.className}position-${brothsMobileContainer.dataset.selected}`
        console.log(item.className)
    })
    
    dots.forEach((item,idx)=>{
        item.className = item.className.replace('active-','')
        if(idx == brothsMobileContainer.dataset.selected){
            item.className= `active-${item.className}`
        }
    })

    middle.addEventListener('click', ()=>selectBroth(listMobile[brothsMobileContainer.dataset.selected]));
}