import { startCarousel, nextBroth, nextProtein } from "./carousel-mobile.js";

//<!-- inicio chamada para a api -->
const url = "https://api.tech.redventures.com.br"

export async function apiGet(extension){
    const requestOptions = {
        method: 'GET',
        headers: {
            "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf",
            'Content-Type': 'application/json',
        },
    };
    let output = await fetch(`${url}/${extension}`, requestOptions)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        return data
    })
    return output
}

export async function apiPost(extension, data){
    const requestOptions = {
        method: 'POST',
        headers: {
            "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    let output = fetch(`${url}/${extension}`, requestOptions)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        return data
    })
    .catch(error => {
        console.error
        ('Error:', error);
    });
    return output
}
//<!--fim chamada para a api -->
async function loadData(){
    const broths = await apiGet('broths')
    const proteins = await apiGet('proteins')
    let brothsContainer = document.getElementById('brothsContainer')
    let brothsMobileContainer = document.getElementById('brothsMobileContainer')
    let proteinsContainer = document.getElementById('proteinsContainer')
    let proteinsMobileContainer = document.getElementById('proteinsMobileContainer')
    let brothsDots = document.getElementById("brothsDots")
    let proteinsDots = document.getElementById("proteinsDots")
    brothsContainer.innerHTML = broths.map((item)=>(`<div id="${item.id}" class="card" data-active="${item.imageActive}" data-inactive="${item.imageInactive}">
                                    <div class="card-icon">
                                        <img src="${item.imageInactive}" />
                                    </div>
                                    <h5 class="text-blue bold text-20">${item.name}</h5>
                                    <p class="text-black">${item.description}</p>
                                    <h6 class="text-red bold text-20">US$ ${item.price}</h6>
                                </div>`)).reduce((a,b)=>a+b,"")
    brothsMobileContainer.innerHTML = broths.map((item)=>(`<div id="${item.id}" class="card" data-active="${item.imageActive}" data-inactive="${item.imageInactive}">
                                    <div class="card-icon">
                                        <img src="${item.imageInactive}" />
                                    </div>
                                    <h5 class="text-blue bold text-20">${item.name}</h5>
                                    <p class="text-black">${item.description}</p>
                                    <h6 class="text-red bold text-20">US$ ${item.price}</h6>
                                </div>`)).reduce((a,b)=>a+b,"")
    proteinsContainer.innerHTML = proteins.map((item)=>(`<div id="${item.id}" class="card" data-active="${item.imageActive}" data-inactive="${item.imageInactive}">
                                    <div class="card-icon">
                                        <img src="${item.imageInactive}" />
                                    </div>
                                    <h5 class="text-blue bold text-20">${item.name}</h5>
                                    <p class="text-black">${item.description}</p>
                                    <h6 class="text-red bold text-20">US$ ${item.price}</h6>
                                </div>`)).reduce((a,b)=>a+b,"")
    proteinsMobileContainer.innerHTML = proteins.map((item)=>(`<div id="${item.id}" class="card" data-active="${item.imageActive}" data-inactive="${item.imageInactive}">
                                    <div class="card-icon">
                                        <img src="${item.imageInactive}" />
                                    </div>
                                    <h5 class="text-blue bold text-20">${item.name}</h5>
                                    <p class="text-black">${item.description}</p>
                                    <h6 class="text-red bold text-20">US$ ${item.price}</h6>
                                </div>`)).reduce((a,b)=>a+b,"")
    proteinsDots.innerHTML = broths.map((item)=>(`<div class="dot"></div>`)).reduce((a,b)=>a+b,"")
    brothsDots.innerHTML = broths.map((item)=>(`<div class="dot"></div>`)).reduce((a,b)=>a+b,"")
    

    let brothsList = Array.prototype.slice.call(brothsContainer.childNodes)
    brothsList.forEach((item)=>{
        item.addEventListener('click', ()=>selectBroth(item));
    })

    let brothsMobileList = Array.prototype.slice.call(brothsMobileContainer.childNodes)
    brothsMobileList.forEach((item)=>{
        item.addEventListener('click', ()=>selectBroth(item));
    })

    let proteinsList = Array.prototype.slice.call(proteinsContainer.childNodes)
    proteinsList.forEach((item)=>{
        item.addEventListener('click', ()=>selectProtein(item));
    })

    startCarousel()
}

async function scrollStart() {
    setInterval(()=>{
        nextBroth()
        nextProtein()
    },5000)
}




export function selectBroth(element){
    let brothsContainer = document.getElementById('brothsContainer')
    let brothsMobileContainer = document.getElementById('brothsMobileContainer')
    let list = Array.prototype.slice.call(brothsContainer.childNodes)
    let listMobile = Array.prototype.slice.call(brothsMobileContainer.childNodes)
    list.forEach((item)=>{
        if(item.id === element.id){
            item.className="active-card"
            item.childNodes[1].childNodes[1].src = item.dataset.active
        }else{
            item.className="card"
            item.childNodes[1].childNodes[1].src = item.dataset.inactive
        }
    })
    listMobile.forEach((item)=>{
        if(item.id === element.id){
            item.className=item.className.replace("active-",'')
            item.className=item.className.replace("card",'active-card')
            item.childNodes[1].childNodes[1].src = item.dataset.active
        }else{
            item.className=item.className.replace("active-",'')
            item.childNodes[1].childNodes[1].src = item.dataset.inactive
        }
    })
    isOrderReady()
}

export function selectProtein(element){
    let proteinsContainer = document.getElementById('proteinsContainer')
    let proteinsMobileContainer = document.getElementById('proteinsMobileContainer')
    let list = Array.prototype.slice.call(proteinsContainer.childNodes)
    let listMobile = Array.prototype.slice.call(proteinsMobileContainer.childNodes)
    list.forEach((item)=>{
        if(item.id === element.id){
            item.className="active-card"
            item.childNodes[1].childNodes[1].src = item.dataset.active
        }else{
            item.className="card"
            item.childNodes[1].childNodes[1].src = item.dataset.inactive
        }
    })
    listMobile.forEach((item)=>{
        if(item.id === element.id){
            item.className=item.className.replace("active-",'')
            item.className=item.className.replace("card",'active-card')
            item.childNodes[1].childNodes[1].src = item.dataset.active
        }else{
            item.className=item.className.replace("active-",'')
            item.childNodes[1].childNodes[1].src = item.dataset.inactive
        }
    })
    isOrderReady()
}

function isOrderReady(){
    let proteinsContainer = document.getElementById('proteinsContainer')
    let brothsContainer = document.getElementById('brothsContainer')
    let brothslist = Array.prototype.slice.call(brothsContainer.childNodes)
    brothslist = brothslist.filter((item)=>item.className==="active-card")
    let proteinslist = Array.prototype.slice.call(proteinsContainer.childNodes)
    proteinslist = proteinslist.filter((item)=>item.className==="active-card")
    let orderButton = document.getElementById("orderButton")

    if(brothslist.length === 1 && proteinslist.length === 1){
        orderButton.className = "active-button"
        orderButton.childNodes[1].src = orderButton.dataset.active
        orderButton.addEventListener('click', ()=>sendOrder());
        return true
    }else{
        orderButton.className = "inactive-button"
        orderButton.childNodes[1].src = orderButton.dataset.inactive
        return false
    }
}

async function sendOrder(){
    if(!isOrderReady()){
        window.alert("There is something wrong with your order! Refresh tha page and try it again.")
        return false
    }

    let proteinsContainer = document.getElementById('proteinsContainer')
    let brothsContainer = document.getElementById('brothsContainer')
    let brothslist = Array.prototype.slice.call(brothsContainer.childNodes)
    brothslist = brothslist.filter((item)=>item.className==="active-card")
    let proteinslist = Array.prototype.slice.call(proteinsContainer.childNodes)
    proteinslist = proteinslist.filter((item)=>item.className==="active-card")

    const response = await apiPost('orders',{
        brothId: brothslist[0].id,
        proteinId: proteinslist[0].id,
    })

    let ticket = document.getElementById("orderTicket")
    ticket.className="ticket"
    ticket.innerHTML = `
                <div class="ticket-container">
                    <div
                        class="background ticket-cover"
                        style="
                            background-image: url('./src/imgs/pattern-azul.png');
                        "
                    >
                    <div class="ticket-header text-red bold ">ramenGO!</div>
                        <div class="order-img">
                            <img
                                class="h-full"
                                src="${response.image}"
                            />
                        </div>
                        <div class="bold text-center text-27">Your order:</div>
                        <div class="bold text-center text-yellow text-32">
                            ${response.description}
                        </div>
                    </div>
                    <div class="ticket-data">
                        <div class="ticket-icon">
                            <img class="h-full" src="./src/imgs/garoto.svg" />
                        </div>
                        <div
                            class="line center text-center text-yellow bold text-20"
                        >
                            どもありがとうございます。
                        </div>
                        <div
                            class="line center text-center text-red bold text-32"
                        >
                            Your order is being prepared
                        </div>
                        <div class="line center text-center text-black">
                            Hold on, when you least expect you will be eating
                            your rámen.
                        </div>
                        <div class="line center mt-32">
                            <div class="line center text-center">
                                <div
                                    id="orderButton"
                                    order
                                    class="active-button-230"
                                    onclick="location.reload()"
                                    onMouseOver="this.style.backgroundColor='#C5C5C5'" 
                                    onMouseOut="this.style.backgroundColor='#1820EF'
                                    "
                                >
                                    PLACE NEW ORDER
                                    <img
                                        src="./src/imgs/icon/Btn/yellowArrow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}



scrollStart()
loadData()