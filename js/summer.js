// ACCORDION

var accordionVis = document.querySelector('.accordion-visible')
var accordionVar = document.querySelector('.accordion-var')
var arrow = document.querySelector('.fa-arrow-down')

accordionVis.addEventListener('click', (e) => {
    e.preventDefault()

    if (accordionVar.style.display == 'none' || accordionVar.style.display == '') {
        accordionVar.style.display = 'block';
        arrow.style.animation = 'spin 0.5s linear 1'
    } else {
        accordionVar.style.display = 'none'
        // arrow.style.transform = ''
        arrow.style.animation = 'spin 1s linear 1'
    }

})


// DISPLAYING SLIDER VALUE
var slider = document.getElementById("boxRange");
var boxOutput = document.getElementById("boxValue");
boxOutput.innerHTML = slider.value;

slider.oninput = function () {
    boxOutput.innerHTML = this.value;
}

var slider = document.getElementById("bagRange");
var bagOutput = document.getElementById("bagValue");
bagOutput.innerHTML = slider.value;

slider.oninput = function () {
    bagOutput.innerHTML = this.value;
}

var slider = document.getElementById("weekRange");
var weekOutput = document.getElementById("weekValue");
weekOutput.innerHTML = slider.value;

slider.oninput = function () {
    weekOutput.innerHTML = this.value;
}


var calcPrice = document.getElementById('calcPrice')
var price = document.getElementById('price')
var showAfter = document.getElementById('show-after')

calcPrice.addEventListener('click', (e) => {
    e.preventDefault()
    const numBoxes = parseInt(boxOutput.innerHTML)
    const numBags = parseInt(bagOutput.innerHTML)
    const numWeeks = parseInt(weekOutput.innerHTML)

    const costOfBoxes = costForBoxes(numBoxes)
    const costOfBags = costForBags(numBags)
    const costPerWeek = costOfBoxes + costOfBags

    let totalWeekCost = costPerWeek * numWeeks

    let finalTotal;

    // Rules for if only 1 box
    if (numBoxes == 1 && numBags == 0) {
        totalWeekCost *= 2
    }

    if (numBoxes == 2 && numBags == 0) {
        totalWeekCost *= 1.25
    }

    // Rules for if only 1 bag
    if (numBags == 1 && numBoxes == 0) {
        totalWeekCost += 3 * numWeeks
    }

    if (numWeeks == 2) {
        finalTotal = Math.floor(totalWeekCost + 10)
    }

    if (numWeeks == 3) {
        finalTotal = Math.floor(totalWeekCost + 8)
    }

    if (numWeeks > 3) {
        finalTotal = Math.floor(totalWeekCost + 5)
    }

    price.innerHTML = `${numBoxes}x boxes and ${numBags}x bags for ${numWeeks} weeks is <b>£${finalTotal}</b>.`
    calcPrice.innerHTML = 'Recalculate Price'
    showAfter.style.display = 'block'
})


const costForBoxes = (num) => {
    return num * 3.5
}

const costForBags = (num) => {
    return num * 4.5
}