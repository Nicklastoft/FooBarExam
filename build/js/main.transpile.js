'use strict';

window.addEventListener("DOMContentLoaded", beerList);

var queArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

function dataTimer() {
    var data = FooBar.getData();
    var parsed = JSON.parse(data);
    var currentQueue = parsed.queue.length;

    // BARTENDER NAMES AND STATUS //
    var bartenderZeroName = parsed.bartenders[0].name;
    var bartenderZeroStatus = parsed.bartenders[0].status;
    var bartenderOneName = parsed.bartenders[1].name;
    var bartenderOneStatus = parsed.bartenders[1].status;
    var bartenderTwoName = parsed.bartenders[2].name;
    var bartenderTwoStatus = parsed.bartenders[2].status;
    document.querySelector(".bt1 h4").textContent = bartenderZeroName;
    document.querySelector(".bt1 h5").textContent = bartenderZeroStatus;
    document.querySelector(".bt2 h4").textContent = bartenderOneName;
    document.querySelector(".bt2 h5").textContent = bartenderOneStatus;
    document.querySelector(".bt3 h4").textContent = bartenderTwoName;
    document.querySelector(".bt3 h5").textContent = bartenderTwoStatus;
    if (bartenderZeroStatus == "WORKING") {
        document.querySelector(".bt1 h5").style.color = "limegreen";
    }if (bartenderZeroStatus == "READY") {
        document.querySelector(".bt1 h5").style.color = "#303030";
    }if (bartenderOneStatus == "WORKING") {
        document.querySelector(".bt2 h5").style.color = "limegreen";
    }if (bartenderOneStatus == "READY") {
        document.querySelector(".bt2 h5").style.color = "#303030";
    }if (bartenderTwoStatus == "WORKING") {
        document.querySelector(".bt3 h5").style.color = "limegreen";
    }if (bartenderTwoStatus == "READY") {
        document.querySelector(".bt3 h5").style.color = "#303030";
    }

    ///////////////////////////////////////////////////////////////////////////
    //                          QUEUE GRAPH                                 //
    //////////////////////////////////////////////////////////////////////////

    queArray.unshift(currentQueue);
    queArray.pop();
    Chart.defaults.global.defaultFontFamily = 'europa';
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["NOW", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Long ago"],
            datasets: [{
                data: queArray,
                label: "QUEUE",
                backgroundColor: "rgba(255, 111, 0, 0.2)",
                borderColor: "rgba(255, 111, 0, 1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(255, 111, 0, 0.4)",
                hoverBorderColor: "rgbargba(255, 111, 0, 1)",
                pointRadius: 0
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'QUEUE SIZE',
                fontColor: '#303030',
                fontSize: 20
            },
            animation: {
                duration: 0
            },
            legend: {
                display: false
            }
        }
    });

    ///////////////////////////////////////////////////////////////////////////
    //                                 ALERTS                              //
    //////////////////////////////////////////////////////////////////////////

    if (parsed.taps[0].level <= "200") {
        document.querySelector(".sales .AlertTapZero").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapZero h4").textContent = parsed.taps[0].beer;
    if (parsed.taps[1].level <= "200") {
        document.querySelector(".sales .AlertTapOne").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapOne h4").textContent = parsed.taps[1].beer;
    if (parsed.taps[2].level <= "200") {
        document.querySelector(".sales .AlertTapTwo").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapTwo h4").textContent = parsed.taps[2].beer;
    if (parsed.taps[3].level <= "200") {
        document.querySelector(".sales .AlertTapThree").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapThree h4").textContent = parsed.taps[3].beer;
    if (parsed.taps[4].level <= "200") {
        document.querySelector(".sales .AlertTapFour").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapFour h4").textContent = parsed.taps[4].beer;
    if (parsed.taps[5].level <= "200") {
        document.querySelector(".sales .AlertTapFive").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapFive h4").textContent = parsed.taps[5].beer;
    if (parsed.taps[6].level <= "200") {
        document.querySelector(".sales .AlertTapSix").style.display = "grid";
    }
    document.querySelector(".sales .AlertTapSix h4").textContent = parsed.taps[6].beer;

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
}
setInterval(dataTimer, 1000);

///////////////////////////////////////////////////////////////////////////
//                                  BEERS                               //
//////////////////////////////////////////////////////////////////////////

var GlobalData = FooBar.getData();
var GlobalJSON = JSON.parse(GlobalData);
var beerSorts = GlobalJSON.beertypes;
var beerTemplate = document.querySelector("#beerTemplate");
var clone = void 0;

// console.log(beerSorts);


function beerList() {
    beerSorts.forEach(function (addBeer) {

        clone = beerTemplate.content.cloneNode(true);

        clone.querySelector(".beer .navn").textContent = addBeer.name;
        clone.querySelector(".beer img").setAttribute("src", "assets/labels/" + addBeer.label);
        clone.querySelector(".readmore").addEventListener("click", seDetaljer_klik);
        clone.querySelector(".readmore").setAttribute("data-id", addBeer.name);
        addBeer.name;

        document.querySelector("#beerCards").appendChild(clone);
    });
}
function seDetaljer_klik(event) {

    var mit_id = event.currentTarget.getAttribute("data-id");
    var single_view = beerSorts.find(function (element) {
        return element.name == mit_id;
    });
    document.querySelector(".singleBeer").style.display = "block";

    document.querySelector("section .name").textContent = single_view.name;
    document.querySelector("section img").src = "assets/labels/" + single_view.label;
    document.querySelector("section .category").innerHTML = "<strong>Category: </strong>" + single_view.category;
    document.querySelector("section .pouringspeed").innerHTML = "<strong>Pouring speed: </strong>" + single_view.pouringSpeed;
    document.querySelector("section .popularity").innerHTML = "<strong>Popularity: </strong>" + single_view.popularity;
    document.querySelector("section .alcohol").innerHTML = "<strong>Alcohol: </strong>" + single_view.alc + " %";

    document.querySelector("section .desc .aroma").innerHTML = "<strong>Aroma: </strong>" + single_view.description.aroma;
    document.querySelector("section .desc .appearance").innerHTML = "<strong>Appearance: </strong>" + single_view.description.appearance;
    document.querySelector("section .desc .flavor").innerHTML = "<strong>Flavor: </strong>" + single_view.description.flavor;
    document.querySelector("section .desc .mouthfeel").innerHTML = "<strong>Mouthfeel: </strong>" + single_view.description.mouthfeel;
    document.querySelector("section .desc .overall").innerHTML = "<strong>Overall Impression: </strong>" + single_view.description.overallImpression;
}
