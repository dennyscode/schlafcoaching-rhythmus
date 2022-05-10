Window.smoothScroll = function (old, des, actual) {
    easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = easeInOutQuart(actual / 100);
    delta = des - old;
    delta *= ease;
    delta += old;
    document.querySelector(".sleeperator").scrollTo(0, delta);
    if (actual < 100) {
        window.requestAnimationFrame(function () {
            Window.smoothScroll(old, des, actual);
        });
    }
}

// TS = Tagesschlaf
var sleepTable = {
    "0": {
        "_1st_TS": null,
        "_2nd_TS": null,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": null,
        "text": "No text"
    },
    "3": {
        "dauerTS": 1,
        "_1st_TS": 1,
        "_2nd_TS": 3.5,
        "_3rd_TS": 5.75,
        "_4th_TS": 8,
        "_5th_TS": 10.25,
        "bettzeit": 12,
        "text": "3 Monate alte Babies brauchen 13-16 Stunden Schlaf pro Tag. Der Schlaf verteilt sich gleichmäßig über Tag und Nacht. Dabei wacht das Baby in etwa alle 3-4 Stunden auf zum Trinken. Mit dem 3. Monat beginnen viele Babys kontinuierlich länger zu schlafen in der Nacht. Still-Babys werden 6-12 Mal am Tag gestillt. Flaschenbabys in diesem 500-800 Gramm."
    },
    "4": {
        "dauerTS": 1,
        "_1st_TS": 1.5,
        "_2nd_TS": 4.5,
        "_3rd_TS": 7,
        "_4th_TS": 9.5,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "4 Monate alte Babies brauchen 14-16 Stunden Schlaf am Tag. Davon sind 10-12 Stunden Nachtschlaf und 3-4 Stunden Tagesschlaf über 4 bis 5 Tagesschläfchen verteilt. Die Schläfchen können sehr kurz ausfallen bei der Schlaf-Regression im 4. Monat. Still-Babys sollten 8-12 Mal in 24 Stunden gestillt werden, etwa alle 3-4 Stunden am Tag und alle 3-4 Stunden in der Nacht. Babys, die mit Milchpulver gefüttert werden, sollten etwa 500-800 Gramm zu sich nehmen. Tagsüber alle 3 Stunden und nachts alle 4-6 Stunden. In diesem Alter beträgt die durchschnittliche Wachzeit des Babys zwischen 1-2 Stunden."
    },
    "5": {
        "dauerTS": 1,
        "_1st_TS": 1.5,
        "_2nd_TS": 4.5,
        "_3rd_TS": 7.5,
        "_4th_TS": 10,
        "_5th_TS": null,
        "bettzeit": 12.5,
        "text": `Ein 5 Monate altes Baby benötigt im Durchschnitt 13-15 Stunden Schlaf pro Tag. Nachts wird es 11-12 Stunden schlafen , tagsüber 3 Stunden, in der Regel in drei Schläfchen. Zwei dieser Nickerchen sollten mindestens eine Stunde lang sein; das dritte Nickerchen kann ein kürzeres Nickerchen sein. Schlafenszeit sollte frühestens um 18 Uhr sein. Gestillte 5 Monate alte Babys sollten 8-10 Mal pro 24 Stunden gestillt werden, etwa alle 3 Stunden während des Tages, mit einer längeren Dehnung von 5-8 Stunden in der Nacht. Babys, die mit Muttermilchpulver gefüttert werden, sollten 500-800 Gramm zu sich nehmen und tagsüber etwa alle 3-4 Stunden gefüttert werden, nachts jedoch eine längere Pause von 5-8 Stunden. Die durchschnittliche Wachzeit eines 5 Monate alten Babys liegt bei 2-3 Stunden.`
    },
    "6": {
        "dauerTS": 1,
        "_1st_TS": 2,
        "_2nd_TS": 5.5,
        "_3rd_TS": 9,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Ein 6 monate altes Baby benötigt 13-15 Stunden pro Tag. Nachts werden 11-12 Stunden benötigt, tagsüber 3 Stunden in 3 oder 4 Schläfchen. Zwei dieser Schläfchen sollten mindestens eine Stunde lang sein. Das letzte Schläfchen kann kürzer ausfallen. Die Schlafenszeit sollte frühestens 18 Uhr sein. Still-Babys sollten 8-10 Mal in 24 Stunden gestillt werden. Etwa alle 3 Stunden während des Tages, mit einer längeren Pause von 5-8 Stunden in der Nacht. Flaschenbabys sollten etwa 500-800 Gramm zu sich nehmen. Tagsüber sollten sie etwa alle 3-4 Stunden gefüttert werden und nachts mit einer längeren Pause von 5-8 Stunden. Mit 6 Monaten beginnen viele Eltern mit der Beikost. Die durchschnittliche Wachzeit eines 6 Monate alten Babys liegt bei etwa 2-2,5 Stunden."
    },
    "7": {
        "dauerTS": 1,
        "_1st_TS": 2,
        "_2nd_TS": 6,
        "_3rd_TS": 9.5,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12.5,
        "text": "Ein 7 Monate altes Baby benötigt 13-15 Stunden Schlaf pro Tag. Nachts wird es 11-12 Stunden schlafen, tagsüber 3 Stunden, in zwei oder drei Nickerchen. Zwei dieser Nickerchen sollten mindestens eine Stunden lang sein; das dritte Nickerchen kann ein kürzeres Nickerchen sein. Schlafenszeit sollte frühestes um 18 Uhr sein. Still-Babys sollten etwa 6-10 Mal in 24 Stunden gestillt werden, etwa alle 3 Stunden während des Tages, mit einer längeren Pause von 5-8 Stunden in der Nacht. Flaschenbabys sollten etwa 600-900 Gramm und tagsüber etwa alle 3-4 Stunden gefüttert werden. Im Alter von 7 Monaten wachen viele Flaschenbabys nicht mehr auf, um zu trinken. Die durchschnittliche Wachzeit eines 7 Monate alten Babys beträgt etwa 2 Stunden am Morgen und 2,5 bis 3 Stunden am Nachmittag/Abend."
    },
    "8": {
        "dauerTS": 1,
        "_1st_TS": 2.5,
        "_2nd_TS": 7,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Ein 8 Monate altes Baby benötigt 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 3 Stunden, in zwei oder drei Nickerchen. Zwei dieser Nickerchen sollten mindestens eine Stunde lang sein; das dritte Nickerchen kann ein kürzeres Nickerchen sein (wenn es überhaupt passiert). Schlafenszeit sollte frühestens um 18 Uhr sein. Still-Babys sollten etwa 6-10 Mal pro Tag gestillt werden, etwa alle 3 Stunden während des Tages mit einer längeren Pause von 6-10 Stunden in der Nacht. Viele Still-Babys werden in diesem Alter nur noch einmal pro Nacht gestillt. Flaschenbabys sollten etwa 600-900 Gramm zu sich nehmen und tagsüber etwa alle 3 Stunden gefüttert werden. Die meisten Flaschenbabys wachen meist nicht mehr auf, um zu trinken. Die durchschnittliche Wachzeit eines 8 Monate alten Babys liegt tagsüber zwischen 2,5 und 3 Stunden. [2-3-4 Regel]"
    },
    "9": {
        "dauerTS": 1,
        "_1st_TS": 2.5,
        "_2nd_TS": 7,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Ein 9 Monate altes Baby benötigt 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 3 Stunden, in zwei Nickerchen. Diese Nickerchen sollten jeweils 1 bis 2 Stunden lang sein, wobei der Schlaf tagsüber auf 3 Stunden begrenzt ist. Es gibt jedoch auch Babys mit einem höheren Schlafbedarf. Schlafenszeit sollte frühestens um 18 Uhr sein. Still-Babys sollten etwa 6-10 Mal pro Tag gestillt werden, etwa alle 3 Stunden während des Tages mit einer längeren Pause von 6-10 Stunden in der Nacht. Viele Still-Babys werden in diesem Alter nur noch einmal pro Nacht gestillt. Flaschenbabys sollten etwa 600-900 Gramm zu sich nehmen und tagsüber etwa alle 3 Stunden trinken. Die meisten Flaschenbabys wachen meist nicht mehr auf, um zu trinken. Die durchschnittliche Wachzeit eines 9 Monate alten Babys beträgt tagsüber zwischen 3 und 3,5 Stunden. 2-3-4 Regel"
    },
    "10": {
        "dauerTS": 1,
        "_1st_TS": 3,
        "_2nd_TS": 7,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Ein 10 Monate altes Baby benötigt 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 2-3 Stunden in zwei Nickerchen benötigt. Diese Nickerchen sollten jeweils mindestens 1 Stunde lang sein. Die Schlafenszeit sollte nach 18 Uhr beginnen. Still-Babys sollten etwa 6-10 Mal pro Tag gestillt werden, etwa alle 3 Stunden während des Tages mit einer längeren Pause von 6-10 Stunden in der Nacht. Viele Still-Babys werden in diesem Alter nur noch einmal pro Nacht gestillt, wenn überhaupt. Einige können nachts ganz aufhören zu stillen, aber eine Stillmahlzeit am Morgen schützt die Milchversorgung. Flaschenbabys sollten etwa 600-900 Gramm zu sich nehmen und tagsüber etwa alle 4 Stunden trinken. Die meisten Flaschenbabys wachen nachts meist nicht mehr auf, um zu trinken. Die durchschnittliche Wachzeit eines 10 Monate alten Babys beträgt tagsüber zwischen 3 und 3,5 Stunden. 2-3-4 Regel"
    },
    "11": {
        "dauerTS": 1,
        "_1st_TS": 3,
        "_2nd_TS": 7.5,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Ein 11 Monate altes Baby benötigt 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 2-3 Stunden in zwei Nickerchen benötigt. Diese Nickerchen sollten jeweils mindestens 1 Stunde lang sein. Die Schlafenszeit sollte nach 18 Uhr beginnen. Still-Babys sollten etwa 5-8 Mal pro Tag gestillt werden, etwa alle 3 Stunden während des Tages mit einer längeren Pause von 6-10 Stunden in der Nacht. Viele Still-Babys werden in diesem Alter nur noch einmal pro Nacht gestillt, wenn überhaupt. Einige können nachts ganz aufhören zu stillen, aber eine Stillmahlzeit am Morgen schützt die Milchversorgung. Flaschenbabys sollten etwa 600-900 Gramm zu sich nehmen und tagsüber etwa alle 4 Stunden trinken. Die meisten Flaschenbabys wachen nachts meist nicht mehr auf, um zu trinken. Die durchschnittliche Wachzeit eines 11 Monate alten Babys beträgt tagsüber zwischen 3 und 4 Stunden. 2-3-4 Regel"
    },
    "12": {
        "dauerTS": 1,
        "_1st_TS": 3,
        "_2nd_TS": 7.5,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Kleinkinder im Alter von 12-18 Monaten benötigen 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 2-3 Stunden in zwei Nickerchen benötigt. Diese Nickerchen sollten jeweils mindestens 1 Stunde lang sein. Bieten Sie 3 Mahlzeiten und 3 Zwischenmahlzeiten pro Tag an, wobei Milch zu den Mahlzeiten und zu den Zwischenmahlzeiten vor dem Schlafengehen angeboten werden sollte. Die Schlafenszeit sollte nicht vor 18 Uhr beginnen. Während einige Kleinkinder im Alter von etwa 12 Monaten dazu übergehen, nur noch ein Nickerchen pro Tag zu brauchen, liegt das Durchschnittsalter für diesen Übergang eher bei 15-18 Monaten. Im Alter von 12 bis 18 Monaten ist Ihr Kind durchschnittlich zwischen 3 und 4,5 Stunden wach. 2-3-4 Regel"
    },
    // 13 - 14 Monate:
    "13": {
        "dauerTS": 1,
        "_1st_TS": 3.5,
        "_2nd_TS": 8,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 13,
        "text": "Kleinkinder im Alter von 12-18 Monaten benötigen 13-15 Stunden Schlaf pro Tag. Nachts sollte es 11-12 Stunden schlafen, tagsüber 2-3 Stunden in zwei Nickerchen benötigt. Diese Nickerchen sollten jeweils mindestens 1 Stunde lang sein. Bieten Sie 3 Mahlzeiten und 3 Zwischenmahlzeiten pro Tag an, wobei Milch zu den Mahlzeiten und zu den Zwischenmahlzeiten vor dem Schlafengehen angeboten werden sollte. Die Schlafenszeit sollte nicht vor 18 Uhr beginnen. Während einige Kleinkinder im Alter von etwa 12 Monaten dazu übergehen, nur noch ein Nickerchen pro Tag zu brauchen, liegt das Durchschnittsalter für diesen Übergang eher bei 15-18 Monaten. Im Alter von 12 bis 18 Monaten ist Ihr Kind durchschnittlich zwischen 3 und 4,5 Stunden wach. 2-3-4 Regel"
    },
    // 15 - 18 Monate
    "15": {
        "dauerTS": 1,
        "_1st_TS": 5,
        "_2nd_TS": null,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Kleinkinder im Alter von 15-18 Monaten benötigen 11-15 Stunden Schlaf pro Tag. Nachts sollte es 10-12 Stunden schlafen, tagsüber 1-3 Stunden in einem Nickerchen benötigt. Diese Nickerchen sollten mindestens 1 Stunde lang sein, bestenfalls 2 Stunden. Die Stimmung und das Verhalten Ihres Kleinkindes sind der beste Indikator dafür, ob es genug Schlaf bekommt. Bieten Sie 3 Mahlzeiten und 3 Zwischenmahlzeiten pro Tag an, wobei zu den Mahlzeiten und zum Zubettgehen Milch angeboten werden sollte. Keine Zubettgehzeiten vor 18 Uhr. 2-3-4 Regel"
    },
    // 19 - 23 Monate
    "19": {
        "dauerTS": 1,
        "_1st_TS": 5,
        "_2nd_TS": null,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Kleinkinder im Alter von 1,5 bis 3 Jahren benötigen 11-15 Stunden Schlaf pro Tag. Nachts sollte es 10-12 Stunden schlafen, tagsüber 1-3 Stunden in einem Nickerchen benötigt. Dieses Nickerchen sollte mindestens 1 Stunde lang sein, bestenfalls 2 Stunden. Die Stimmung und das Verhalten Ihres Kleinkindes sind der beste Indikator dafür, ob es genug Schlaf bekommt. Bieten Sie 3 Mahlzeiten und 3 Zwischenmahlzeiten pro Tag an, wobei zu den Mahlzeiten und zum Zubettgehen Milch angeboten werden sollte. Keine Zubettgehzeiten vor 18 Uhr. 2-3-4 Regel"
    },
    // 24 - 35 Monate
    "24": {
        "dauerTS": 1,
        "_1st_TS": 5,
        "_2nd_TS": null,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "bettzeit": 12,
        "text": "Kleinkinder im Alter von 1,5 bis 3 Jahren benötigen 11-15 Stunden Schlaf pro Tag. Nachts sollte es 10-12 Stunden schlafen, tagsüber 1-3 Stunden in einem Nickerchen benötigt. Dieses Nickerchen sollte mindestens 1 Stunde lang sein, bestenfalls 2 Stunden. Die Stimmung und das Verhalten Ihres Kleinkindes sind der beste Indikator dafür, ob es genug Schlaf bekommt. Bieten Sie 3 Mahlzeiten und 3 Zwischenmahlzeiten pro Tag an, wobei zu den Mahlzeiten und zum Zubettgehen Milch angeboten werden sollte. Keine Zubettgehzeiten vor 18 Uhr. 2-3-4 Regel"
    },
    // 36+ Monate
    "36": {
        "dauerTS": 1,
        "_1st_TS": null,
        "_2nd_TS": null,
        "_3rd_TS": null,
        "_4th_TS": null,
        "_5th_TS": null,
        "napTime": 1,
        "bettzeit": 13.5,
        "text": "Kleinkinder/Vorschulkinder im Alter von 3-5 Jahren benötigen etwa 10-12 Stunden Schlaf pro Tag. Dieser Schlaf findet höchstwahrscheinlich ausschließlich nachts statt, obwohl einige Kinder in diesem Alter auch über das 3. Lebensjahr hinaus noch einen Mittagsschlaf von etwa 1 Stunde Dauer halten. Das Alter, in dem Kleinkinder und Vorschulkinder ihren Mittagsschlaf aufgeben, ist sehr unterschiedlich, aber die meisten Kinder hören zwischen 3 und 4 Jahren auf zu schlafen. Keine Zubettgehzeiten vor 19 Uhr. 2-3-4 Regel"
    },
};


minusMonth = function(input) {
    var val = input.textContent;
};

var getTime = function(input) {
    var fullHours, minutes;
    if (`${input}`.toString().includes(":") == true || `${input}`.toString().includes(".") == true ) { 
        if(`${input}`.toString().includes(":") == true ) {
            input = input.split(":");
            fullHours = parseInt(input[0]);
            minutes = parseInt(input[1]);
        } else if (`${input}`.toString().includes(".") == true) {
            input = input.toString().split(".");
            fullHours = parseInt(input[0]);
            minutes = parseFloat('0.'+input[1])*60;
        }
    } else {
        fullHours = input;
        minutes = 0;
    }
    var time = new Date(0,0,0, fullHours, minutes)
    var output = time.getHours() + ":" + (time.getMinutes() === 0 ? "00" : time.getMinutes());
    return output;
}

var calcPieChart = function(input) {
    let countEvents = 1;  // sums sleep/awake events starting with nightsleep from midnight
    if (input._1st_TS !== undefined) {
        countEvents += 2
    }
    if (input._2nd_TS !== undefined) {
        countEvents += 2
    }
    if (input._3rd_TS !== undefined) {
        countEvents += 2
    }
    if (input._4th_TS !== undefined) {
        countEvents += 2
    }
    if (input._5th_TS !== undefined) {
        countEvents += 2
    }
    countEvents += 1; // add nightsleep event until midnight

    return countEvents;
}

const createClockPie = function(length, rotate, sleep="inactive") {
    const el = document.createElement('div');
    el.setAttribute('class', 'pie animate');
    el.setAttribute("style", `--p:${length};--c:${sleep === "inactive" ? "lightgreen" : "purple"};--r:${rotate}deg`)
    el.setAttribute("data-rotate", `${rotate}deg`)
    return el
}

const addToPie = async function(clockPieArray) {

    var i = 0;                  //  set your counter to 1

    function myLoop() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
            document.querySelector('[data-function=js-times-pie]').appendChild(clockPieArray[i]);   //  your code here
            i++;                    //  increment the counter
            if (i < clockPieArray.length) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, 1250)
    }

    myLoop();                   //  start the loop
}

const readZeitObj = function(input) {
    let clockPieElements = [];
    Object.keys(input).forEach((el, index) => {
        let calcProperties;
        if(index === 0) {
            calcProperties = calcAngleForPieChart("0:00", input[el].wakeUp)
            clockPieElements.push(createClockPie(calcProperties.length, calcProperties.rotate))
        }

        if(input[el].angleStart !== 'NaN:NaN') {
            if (el === "bettzeit") {
                calcProperties = calcAngleForPieChart(input[el].angleStart);
                clockPieElements.push(createClockPie(calcProperties.length, calcProperties.rotate))
            } else {
                calcProperties = calcAngleForPieChart(input[el].angleStart, input[el].dauerTS);
                clockPieElements.push(createClockPie(calcProperties.length, calcProperties.rotate))
            }
        }
    })
    addToPie(clockPieElements)

}



const calcAngleForPieChart = function(pre, length=0) {
    const rotate = 360/24 * (parseInt(pre.split(":")[0]) + parseFloat(pre.split(":")[1])/60);
    let lengthRaw;
    if (length === 0) {
        lengthRaw = 100 / 24 * (24 - (parseFloat(pre.split(":")[0]) + parseInt(pre.split(":")[1])/60));
    } else {
        lengthRaw = 100 / 24 * parseFloat(length);
    }

    return {"rotate": rotate, "length": lengthRaw}
}

document.addEventListener("DOMContentLoaded", function() {      
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    //Javascipt is asyncronous so you can't pause/block code execution
    //You can delay doing something with setTimeout

    const filterAgeForTable = function(age) {
        if (age >= 0 && age < 3) {
            return 0;
        }
        if (age >= 13 && age < 15) {
            return 13;
        }
        if (age >= 15 && age < 19) {
            return 15;
        }
        if (age >= 19 && age < 24) {
            return 19;
        }
        if (age >= 24 && age < 35) {
            return 19;
        }
        if (age >= 36) {
            return 36;
        }

        return age
    }

    const generate_button = document.querySelector("[data-function=js-sleep-generate]");
    if (generate_button !== undefined) {
        generate_button.onclick = function(e) {
            const container = document.querySelector('[data-function=js-times-pie]');
            if (container !== undefined) {
                while(container.firstChild){
                    container.removeChild(container.firstChild);
                }
            }
            
            var time = document.querySelector("[data-function=js-time]").value;
            var age = filterAgeForTable(parseInt(document.querySelector("[data-function=js-age]").value));
            var ele = sleepTable[age],
            _1st_TS = ele._1st_TS,
            _2nd_TS = ele._2nd_TS,
            _3rd_TS = ele._3rd_TS,
            _4th_TS = ele._4th_TS,
            _5th_TS = ele._5th_TS,
            dauerTS = ele.dauerTS,
            bettzeit = ele.bettzeit,
            text = ele.text;

            if(_1st_TS === null) {
                document.querySelector("[data-function=js-sleep-1st]").style.display = 'none';
            } else {
                document.querySelector("[data-function=js-sleep-1st]").style.display = 'block';
            }

            if(_2nd_TS === null) {
                document.querySelector("[data-function=js-sleep-2nd]").style.display = 'none';
            } else {
                document.querySelector("[data-function=js-sleep-2nd]").style.display = 'block';
            }

            if(_3rd_TS === null) {
                document.querySelector("[data-function=js-sleep-3rd]").style.display = 'none';
            } else {
                document.querySelector("[data-function=js-sleep-3rd]").style.display = 'block';
            }

            if(_4th_TS === null) {
                document.querySelector("[data-function=js-sleep-4th]").style.display = 'none';
            } else {
                document.querySelector("[data-function=js-sleep-4th]").style.display = 'block';
            }

            if(_5th_TS === null) {
                document.querySelector("[data-function=js-sleep-5th]").style.display = 'none';
            } else {
                document.querySelector("[data-function=js-sleep-5th]").style.display = 'block';
            }

            document.querySelector("[data-function=js-sleep-wakeup]").textContent = getTime(parseFloat(time));
            const zeit_1st_Ts = getTime(parseFloat(time) + parseFloat(ele._1st_TS));
            document.querySelector(".js-sleep-calcs__erster-ts").textContent = zeit_1st_Ts;
            const zeit_2nd_Ts = getTime(parseFloat(time) + parseFloat(ele._2nd_TS));
            document.querySelector(".js-sleep-calcs__zweiter-ts").textContent = zeit_2nd_Ts;
            const zeit_3rd_Ts = getTime(parseFloat(time) + parseFloat(ele._3rd_TS));
            document.querySelector(".js-sleep-calcs__dritter-ts").textContent = zeit_3rd_Ts;
            const zeit_4th_Ts = getTime(parseFloat(time) + parseFloat(ele._4th_TS));
            document.querySelector(".js-sleep-calcs__vierter-ts").textContent = zeit_4th_Ts;
            const zeit_5th_TS = getTime(parseFloat(time) + parseFloat(ele._5th_TS));
            document.querySelector(".js-sleep-calcs__fuenfter-ts").textContent = zeit_5th_TS;
            const zeitBett = getTime(parseFloat(time) + parseFloat(ele.bettzeit));
            document.querySelector(".js-sleep-calcs__bettzeit").textContent = zeitBett;
            document.querySelector("[data-function=js-sleep-calc-text]").textContent = ele.text;

            const zeitenObj = {
                _1st_TS: {
                    "angleStart": zeit_1st_Ts,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                    "wakeUp": time,
                },
                _2nd_TS: {
                    "angleStart": zeit_2nd_Ts,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                },
                _3rd_TS: {
                    "angleStart": zeit_3rd_Ts,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                },
                _4th_TS: {
                    "angleStart": zeit_4th_Ts,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                },
                _5th_TS: {
                    "angleStart": zeit_5th_TS,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                },
                bettzeit: {
                    "angleStart": zeitBett,
                    "angleEnd": null,
                    "rotate": null,
                    "dauerTS": dauerTS,
                }
            };

            

            readZeitObj(zeitenObj);
            //Javascipt is asyncronous so you can't pause/block code execution
            //You can delay doing something with setTimeout
            (async () => {
                const logo = document.querySelector("[data-function=js-loading-logo]");
                if (generate_button.dataset.active === undefined) {
                    logo.classList.toggle("loading-logo--active")
                }
                if(logo.classList.contains("loading-logo--hide")) {
                    logo.classList.remove("loading-logo--hide")
                }
                const el = document.querySelector("[data-function=js-sleep-output]");
                if (!el.classList.contains("sleep-output--hidden")) {
                    el.classList.add("sleep-output--hidden")
                    el.classList.remove("sleep-output--active")
                }
                await delay(2000);

            })();
            setTimeout(function(){
                const logo = document.querySelector("[data-function=js-loading-logo]");
                const el = document.querySelector("[data-function=js-sleep-output]");
                // logo.classList.toggle("loading-logo--active")
                logo.classList.toggle("loading-logo--hide")
                // if (el.classList.contains("sleep-output--hidden")) {
                    if (generate_button.dataset.active === undefined) {
                        el.classList.toggle("sleep-output--active");
                    }
                    generate_button.setAttribute("data-active", "true")
                    if(!logo.classList.contains("loading-logo--hide")) {
                        logo.classList.add("loading-logo--hide")
                    }
                    if (el.classList.contains("sleep-output--hidden")) {
                        el.classList.remove("sleep-output--hidden")
                        el.classList.add("sleep-output--active")
                    }
                // }
            }, 2000);//wait 2 seconds
            
            e.preventDefault();
            link = e.target.getAttribute("href").substr(1);
            // block = document.getElementById(link).offsetTop;
            block = document.querySelector(".sleeperator").clientHeight;
            client = document.querySelector(".sleeperator").scrollTop;
        
            Window.smoothScroll(client, block, 0)
        }
    }
});
