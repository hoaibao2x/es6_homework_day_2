import GlassService from "./GlassService.js";

let glassSer = new GlassService();
let getELE = id => document.getElementById(id);

let getList = () => {
    glassSer.getGlassList()
        .then((result) => {
            showOnUI(result.data);
        })
        .catch((error) => {
            console.log(error);
        })
}
getList();

let showOnUI = list => {
    let content = "";
    list.map(item => {
        let { id, src } = item;
        content += `
            <button onclick= "getGlassInfo('${id}')" class= "glass-image-btn">
                <img src= "img/${src}" />
            </button>
        `;
        getELE("vglassesList").innerHTML = content;
    })
}

let getGlassInfo = id => {
    glassSer.getGlassDetail(id)
        .then((result) => {
            getELE("glassesInfo").style.display = "block";
            let data = result.data;
            let { src, virtualImg, brand, name, color, price, description } = data;
            let content = "";

            content += `
                    <img class= "glass-virtual-image" src= "img/${virtualImg}" />
                    <span class= "glass-name-color">${name} - ${brand} (${color})</span>
                    <span class= "glass-price">$${price}</span>
                    <span class= "glass-status"> Stocking</span>
                    <span>${description}</span>                
            `
            getELE("glassesInfo").innerHTML = content;
        })
        .catch(error => {
            console.log(error);
        })
}
window.getGlassInfo = getGlassInfo;


let hideGlass = () => getELE("glassesInfo").style.display = "none";
window.hideGlass = hideGlass;

let showGlass = () => getELE("glassesInfo").style.display = "block";
window.showGlass = showGlass;