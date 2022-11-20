function genTableau() {
    while(arr.length < 24){
        var r = Math.floor(Math.random() * 24) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function opencase(n) {
    const d = new Date();
    let month = d.getMonth();
    let day = d.getDate();

    if (month == 10) {
        if (n <= day) {
            let openedCell = document.getElementsByClassName("cell-" + n)[0];
            openedCell.style.backgroundColor = "green";

            let image = document.createElement("img");
            image.src = "kdo/" + n + ".gif";
            image.width = "250";

            let gifDiv = document.getElementById("kado");
            gifDiv.appendChild(image);
        }
        else {
            alert("Eh oh t'essaierais pas de manger trop de chocolats d'un coup par hasard ?");
        }
    }
    else {
        alert("Eh oh un calendrier de l'avent ça s'ouvre en décembre naméo !");
    }
}

function initCalend() {
    let index = 0
    while (index < 24) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                let cell = document.getElementById("calend").rows[j].cells[i];
                cell.classList.add("cell-" + arr[index]);
                let cellContent = document.createElement("a");
                cellContent.innerHTML = arr[index];
                cellContent.addEventListener('click', () => opencase(cellContent.innerHTML));
                cellContent.href = "#";
                cellContent.style.textDecoration = "none";
                cellContent.style.color = "white";

                cell.appendChild(cellContent);
                index++;
            }
            
        }
        
    }
}

let arr = [];

genTableau();
initCalend();