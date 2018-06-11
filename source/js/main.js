'use strict'
window.addEventListener("DOMContentLoaded", dataTimer);

let queArray = ["0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0", "0","0","0","0","0"];
let salesArr = [];

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

    var timeStamp = parsed.timestamp;
    console.log( intlDate.format( new Date( 1000 * timeStamp ) ) );

    
    // console.log(currentQueue);

///////////////////////////////////////////////////////////////////////////
//                          QUEUE GRAPH                                 //
//////////////////////////////////////////////////////////////////////////

queArray.unshift(currentQueue);
queArray.pop();
// console.log(queArray);

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
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
            fontSize: 16,
        },
        animation: {
            duration: 0
        }
    }
});


///////////////////////////////////////////////////////////////////////////
//                             SALES                                     //
//////////////////////////////////////////////////////////////////////////
    // console.log(parsed.serving);
    // console.log(parsed.serving[0].id);
    // salesArr.push();
    // console.log(salesArr);

}
setInterval(dataTimer, 1000);

///////////////////////////////////////////////////////////////////////////
//                          TIMESTAMP - NOW                              //
//////////////////////////////////////////////////////////////////////////

     var DateOptions = {
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

console.log(beerSorts);
beerList();


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
    console.log("Et element fra jSON",single_view);
    document.querySelector(".singleBeer").style.display = "block";
    
    
    document.querySelector("section .name").textContent = single_view.name;
    // document.querySelector("section .mellem_billede").src = "imgs/medium/"+single_view.billede+"-md.jpg";
    // document.querySelector("section .vindue_pris").textContent = single_view.pris+",-";
    // document.querySelector("section .langbeskrivelse").textContent = single_view.langbeskrivelse;
    }