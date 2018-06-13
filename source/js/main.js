'use strict'
window.addEventListener("DOMContentLoaded", beerList);

let queArray = ["0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0"];

function dataTimer(){
    let data = FooBar.getData();
    let parsed = JSON.parse(data);
    let currentQueue = parsed.queue.length;

    // BARTENDER NAMES AND STATUS //
    let bartenderZeroName = parsed.bartenders[0].name;
    let bartenderZeroStatus = parsed.bartenders[0].status;
    let bartenderOneName = parsed.bartenders[1].name;
    let bartenderOneStatus = parsed.bartenders[1].status;
    let bartenderTwoName = parsed.bartenders[2].name;
    let bartenderTwoStatus = parsed.bartenders[2].status;
    document.querySelector(".bt1 h4").textContent = bartenderZeroName;
    document.querySelector(".bt1 h5").textContent = bartenderZeroStatus;
    document.querySelector(".bt2 h4").textContent = bartenderOneName;
    document.querySelector(".bt2 h5").textContent = bartenderOneStatus;
    document.querySelector(".bt3 h4").textContent = bartenderTwoName;
    document.querySelector(".bt3 h5").textContent = bartenderTwoStatus;
    if(bartenderZeroStatus == "WORKING"){
        document.querySelector(".bt1 h5").style.color = "limegreen";
    }if(bartenderZeroStatus == "READY"){
        document.querySelector(".bt1 h5").style.color = "#303030";
    }if(bartenderOneStatus == "WORKING"){
        document.querySelector(".bt2 h5").style.color = "limegreen";
    }if(bartenderOneStatus == "READY"){
        document.querySelector(".bt2 h5").style.color = "#303030";
    }if(bartenderTwoStatus == "WORKING"){
        document.querySelector(".bt3 h5").style.color = "limegreen";
    }if(bartenderTwoStatus == "READY"){
        document.querySelector(".bt3 h5").style.color = "#303030";
    }

    // console.log(bartenderZeroStatus);
    // console.log(bartenderOneStatus);
    // console.log(bartenderTwoStatus);
    // BARTENDER NAMES AND STATUS //

    let timeStamp = parsed.timestamp;
    // console.log( intlDate.format( new Date( 1000 * timeStamp ) ) );

    
    // console.log(currentQueue);

///////////////////////////////////////////////////////////////////////////
//                          QUEUE GRAPH                                 //
//////////////////////////////////////////////////////////////////////////

queArray.unshift(currentQueue);
queArray.pop();
// console.log(queArray);

let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["NOW", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "", 
        "", "", "", "", "Long ago"],
        datasets: [{
            data: queArray,
            label: "QUEUE",
            backgroundColor: "rgba(255, 111, 0, 0.2)",
            borderColor: "rgba(255, 111, 0, 1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255, 111, 0, 0.4)",
            hoverBorderColor: "rgbargba(255, 111, 0, 1)",
            pointRadius:0,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: 'QUEUE SIZE',
            fontColor: '#303030',
            fontSize: 20,
        },
        animation: {
            duration: 0
        },
        legend: {
            display: false,
        }
    }
});


///////////////////////////////////////////////////////////////////////////
//                                 ALERTS                              //
//////////////////////////////////////////////////////////////////////////

if(parsed.taps[0].level <= "2500"){
    document.querySelector(".sales .AlertTapZero").style.display = "grid";
}
document.querySelector(".sales .AlertTapZero h4").textContent = parsed.taps[0].beer;
if(parsed.taps[1].level <= "300"){
    document.querySelector(".sales .AlertTapOne").style.display = "grid";
}
document.querySelector(".sales .AlertTapOne h4").textContent = parsed.taps[1].beer;
if(parsed.taps[2].level <= "300"){
    document.querySelector(".sales .AlertTapTwo").style.display = "grid";
}
document.querySelector(".sales .AlertTapTwo h4").textContent = parsed.taps[2].beer;
if(parsed.taps[3].level <= "300"){
    document.querySelector(".sales .AlertTapThree").style.display = "grid";
}
document.querySelector(".sales .AlertTapThree h4").textContent = parsed.taps[3].beer;
if(parsed.taps[4].level <= "300"){
    document.querySelector(".sales .AlertTapFour").style.display = "grid";
}
document.querySelector(".sales .AlertTapFour h4").textContent = parsed.taps[4].beer;
if(parsed.taps[5].level <= "300"){
    document.querySelector(".sales .AlertTapFive").style.display = "grid";
}
document.querySelector(".sales .AlertTapFive h4").textContent = parsed.taps[5].beer;
if(parsed.taps[6].level <= "300"){
    document.querySelector(".sales .AlertTapSix").style.display = "grid";
}
document.querySelector(".sales .AlertTapSix h4").textContent = parsed.taps[6].beer;
// console.log(parsed.taps[0].level);
// console.log(parsed.taps[0].capacity);
// console.log(parsed.taps);

///////////////////////////////////////////////////////////////////////////
//                                 TAP LEVELS                            //
//////////////////////////////////////////////////////////////////////////

document.querySelector(".tapZero").style.width = parsed.taps[0].level / parsed.taps[0].capacity * 100 + "%";
document.querySelector(".tapZeroName").textContent = parsed.taps[0].beer;

document.querySelector(".tapOne").style.width = parsed.taps[1].level / parsed.taps[1].capacity * 100 + "%";
document.querySelector(".tapOneName").textContent = parsed.taps[1].beer;

document.querySelector(".tapTwo").style.width = parsed.taps[2].level / parsed.taps[2].capacity * 100 + "%";
document.querySelector(".tapTwoName").textContent = parsed.taps[2].beer;

document.querySelector(".tapThree").style.width = parsed.taps[3].level / parsed.taps[3].capacity * 100 + "%";
document.querySelector(".tapThreeName").textContent = parsed.taps[3].beer;

document.querySelector(".tapFour").style.width = parsed.taps[4].level / parsed.taps[4].capacity * 100 + "%";
document.querySelector(".tapFourName").textContent = parsed.taps[4].beer;

document.querySelector(".tapFive").style.width = parsed.taps[5].level / parsed.taps[5].capacity * 100 + "%";
document.querySelector(".tapFiveName").textContent = parsed.taps[5].beer;

document.querySelector(".tapSix").style.width = parsed.taps[6].level / parsed.taps[6].capacity * 100 + "%";
document.querySelector(".tapSixName").textContent = parsed.taps[0].beer;

// console.log(parsed.taps[0].level / parsed.taps[0].capacity * 100 + "%");


}
setInterval(dataTimer, 1000);
///////////////////////////////////////////////////////////////////////////
//                          TIMESTAMP - NOW                              //
//////////////////////////////////////////////////////////////////////////

     let DateOptions = {
        //weekday: 'long',
        //month: 'short',
        //year: 'numeric',
        //day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    intlDate = new Intl.DateTimeFormat( undefined, DateOptions );


///////////////////////////////////////////////////////////////////////////
//                                  BEERS                               //
//////////////////////////////////////////////////////////////////////////

let GlobalData = FooBar.getData();
let GlobalJSON = JSON.parse(GlobalData);
let beerSorts = GlobalJSON.beertypes;
let beerTemplate = document.querySelector("#beerTemplate");
let clone;  

// console.log(beerSorts);


function beerList(){
    beerSorts.forEach(function(addBeer) {

        clone = beerTemplate.content.cloneNode(true);

        clone.querySelector(".beer .navn").textContent = addBeer.name;
        clone.querySelector(".beer img").setAttribute("src", ("assets/labels/")+addBeer.label);
        clone.querySelector(".readmore").addEventListener("click",seDetaljer_klik);
        clone.querySelector(".readmore").setAttribute("data-id", addBeer.name);
        addBeer.name;

        document.querySelector("#beerCards").appendChild(clone);
    
    });
}
function seDetaljer_klik(event){

    let mit_id = event.currentTarget.getAttribute("data-id");
    // console.log("KLIK kun ID:",mit_id);
    let single_view = beerSorts.find(       function(element){
        return element.name == mit_id;
    })
    // console.log("Et element fra jSON",single_view);
    document.querySelector(".singleBeer").style.display = "block";
    
    
    document.querySelector("section .name").textContent = single_view.name;
    // document.querySelector("section .mellem_billede").src = "imgs/medium/"+single_view.billede+"-md.jpg";
    // document.querySelector("section .vindue_pris").textContent = single_view.pris+",-";
    // document.querySelector("section .langbeskrivelse").textContent = single_view.langbeskrivelse;

    
    }