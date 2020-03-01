const firstSelected = document.querySelector(".first-selected");
const secondSelected = document.querySelector(".second-selected");
const multiSelected = document.querySelector(".multi-selected");
const tolerSelected = document.querySelector(".toler-selected");
const firstOptionsContainer = document.querySelector(".one");
const secondOptionsContainer = document.querySelector(".two");
const multiOptionsContainer = document.querySelector(".three");
const tolerOptionsContainer = document.querySelector(".four");
const result = document.querySelector('.result')

let flag = false
let active = true

const colors = ["black", '#572001', "red", "orange", 'yellow', 'green', 'blue', '#530268', 'grey', 'white', '#C08327', '#A5A5A5'];
const tolerColors = ['#572001', 'red', '#C08327', '#A5A5A5']


values = {
    firstNumber: '',
    firstColor: '',
    secondNumber: '',
    secondColor: '',
    multiNumber: '',
    multiColor: '',
    tolerNumber: '',
    tolerColor: '',
    resist: ''
}


firstSelected.addEventListener("click", () => {
    firstOptionsContainer.classList.add("active");


});
secondSelected.addEventListener("click", () => {
    secondOptionsContainer.classList.add("active");

});
multiSelected.addEventListener("click", () => {
    multiOptionsContainer.classList.add("active");

});
tolerSelected.addEventListener("click", () => {
    tolerOptionsContainer.classList.add("active");

});


window.document.addEventListener('click', () => {

    if (active = !active) {
        firstOptionsContainer.classList.remove("active");
        secondOptionsContainer.classList.remove("active");
        multiOptionsContainer.classList.remove("active");
        tolerOptionsContainer.classList.remove("active");
    }
})


document.querySelectorAll(".one .option").forEach(o => {
    o.addEventListener('click', () => {
        firstSelected.innerHTML = o.querySelector('option').innerHTML;
    })
})
document.querySelectorAll(".two .option").forEach(o => {
    o.addEventListener('click', () => {
        secondSelected.innerHTML = o.querySelector('option').innerHTML;
    })
})
document.querySelectorAll(".three .option").forEach(o => {
    o.addEventListener('click', () => {
        multiSelected.innerHTML = o.querySelector('option').innerHTML;
    })
})
tolerOptionsList = document.querySelectorAll(".four .option").forEach(o => {
    o.addEventListener('click', () => {
        tolerSelected.innerHTML = o.querySelector('option').innerHTML;
    })
})


document.querySelectorAll(".one option").forEach((fOption, index) => {

    fOption.style.backgroundColor = colors[index]
    fOption.style.border = '3px solid #4f4f50'
    fOption.style.borderRadius = '10px'
    if (fOption.style.backgroundColor === 'yellow' || fOption.style.backgroundColor === 'white') {
        fOption.style.color = 'black'
    }

    fOption.addEventListener('click', (e) => {
        if (e.target.text === 'violet') {
            values.firstColor = '#530268'
        } else if (e.target.text === 'brown') {
            values.firstColor = '#572001'
        } else {
            values.firstColor = e.target.text
        }
        values.firstNumber = e.target.value
        firstSelected.style.border = `1px solid ${values.firstColor}`
        firstSelected.style.boxShadow = `0 0 20px ${values.firstColor}`
        document.querySelector('.Fband').style.backgroundColor = values.firstColor

        if (flag) {
            showResult()
        } else if (!flag) return
    })
})
document.querySelectorAll(".two option").forEach((sOption, index) => {

    sOption.style.backgroundColor = colors[index]
    sOption.style.border = '3px solid #4f4f50'
    sOption.style.borderRadius = '10px'
    if (sOption.style.backgroundColor === 'yellow' || sOption.style.backgroundColor === 'white') {
        sOption.style.color = 'black'
    }
    sOption.addEventListener('click', (e) => {
        if (e.target.text === 'violet') {
            values.secondColor = '#530268'
        } else if (e.target.text === 'brown') {
            values.secondColor = '#572001'
        } else {
            values.secondColor = e.target.text
        }

        values.secondNumber = e.target.value
        secondSelected.style.border = `1px solid ${values.secondColor}`
        secondSelected.style.boxShadow = `0 0 20px ${values.secondColor}`
        document.querySelector('.Sband').style.backgroundColor = values.secondColor

        if (flag) {
            showResult()
        } else if (!flag) return
    })
})
document.querySelectorAll(".three option").forEach((mOption, index) => {
    mOption.style.backgroundColor = colors[index]
    mOption.style.border = '3px solid #4f4f50'
    mOption.style.borderRadius = '10px'
    if (mOption.style.backgroundColor === 'yellow' || mOption.style.backgroundColor === 'white') {
        mOption.style.color = 'black'
    }
    mOption.addEventListener('click', (e) => {
        if (e.target.text === 'violet') {
            values.multiColor = '#530268'
        } else if (e.target.text === 'brown') {
            values.multiColor = '#572001'
        } else if (e.target.text === 'gold') {
            values.multiColor = '#C08327'
        } else if (e.target.text === 'silver') {
            values.multiColor = '#A5A5A5'
        } else {
            values.multiColor = e.target.text
        }

        values.multiNumber = e.target.value
        multiSelected.style.border = `1px solid ${values.multiColor}`
        multiSelected.style.boxShadow = `0 0 20px ${values.multiColor}`
        document.querySelector('.multi').style.backgroundColor = values.multiColor

        if (flag) {
            showResult()
        } else if (!flag) return
    })
})
document.querySelectorAll(".four option").forEach((tOption, index) => {
    tOption.style.backgroundColor = tolerColors[index]
    tOption.style.border = '3px solid #4f4f50'
    tOption.style.borderRadius = '10px'
    tOption.addEventListener('click', (e) => {
        if (e.target.text === 'violet') {
            values.tolerColor = '#530268'
        } else if (e.target.text === 'gold') {
            values.tolerColor = '#C08327'
        } else if (e.target.text === 'brown') {
            values.tolerColor = '#572001'
        } else if (e.target.text === 'silver') {
            values.tolerColor = '#A5A5A5'
        } else {
            values.tolerColor = e.target.text
        }
        flag = true
        values.tolerNumber = e.target.value

        tolerSelected.style.border = `1px solid ${values.tolerColor}`
        tolerSelected.style.boxShadow = `0 0 20px ${values.tolerColor}`
        document.querySelector('.tol').style.backgroundColor = values.tolerColor
        showResult()
    })
})



function showResult() {

    values.resist = ((values.firstNumber + values.secondNumber) * values.multiNumber)

    switch (values.multiColor) {
        case 'black':
            result.textContent = `${values.resist} Ω  ± ${values.tolerNumber}%`
            break;
        case '#572001':
            result.textContent = `${values.resist} Ω  ± ${values.tolerNumber}%`
            break;
        case 'red':
            result.textContent = `${values.resist / (values.multiNumber * 10)}k Ω  ± ${values.tolerNumber}%`
            break;
        case 'orange':
            result.textContent = `${values.resist / (values.multiNumber)}k Ω  ± ${values.tolerNumber}%`
            break;
        case 'yellow':
            result.textContent = `${values.resist / (values.multiNumber * 0.1)}k Ω  ± ${values.tolerNumber}%`
            break;
        case 'green':
            result.textContent = `${values.resist / (values.multiNumber * 10)}M Ω  ± ${values.tolerNumber}%`
            break;
        case 'blue':
            result.textContent = `${values.resist / values.multiNumber}M Ω  ± ${values.tolerNumber}%`
            break;
        case '#530268':
            result.textContent = `${values.resist / (values.multiNumber * 0.1)}M Ω  ± ${values.tolerNumber}%`
            break;
        case 'gray':
            result.textContent = `${values.resist / (values.multiNumber * 10)}G Ω  ± ${values.tolerNumber}%`
            break;
        case 'white':
            result.textContent = `${values.resist / values.multiNumber}G Ω  ± ${values.tolerNumber}%`
            break;
        case '#C08327':
            result.textContent = `${Math.round((values.resist+Number.EPSILON)*100)/100} Ω  ± ${values.tolerNumber}%`
            break;
        case '#A5A5A5':
            result.textContent = `${values.resist} Ω  ± ${values.tolerNumber}%`
            break;
    }
}