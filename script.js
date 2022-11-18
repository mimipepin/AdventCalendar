function genTableau() {
    while(arr.length < 24){
        var r = Math.floor(Math.random() * 24) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function initCalend() {
    let index = 0
    while (index < 24) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                let cell = document.getElementById("calend").rows[j].cells[i];
                cell.innerHTML = arr[index];

                

                index++;
            }
            
        }
        
    }
}

let arr = [];

genTableau();
initCalend();