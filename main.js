const btnNextSex = document.querySelector("button.btnSex");
const btnNextAge = document.querySelector("button.btnAge");
const btnNextAbroad = document.querySelector("button.btnAbroad");
const btnNextContact = document.querySelector("button.btnContact");
const btnNextSick = document.querySelector("button.btnSick");
const qstSex = document.querySelector("div.sex");
const qstAge = document.querySelector("div.age");
const qstAbroad = document.querySelector("div.abroad");
const qstContact = document.querySelector("div.contact");
const qstSick = document.querySelector("div.sick");
const result1 = document.querySelector("div.result1");
const result2 = document.querySelector("div.result2");
const result3 = document.querySelector("div.result3");

// pobranie odpowiedzi
const ansWoman = document.querySelector("#woman");
const ansMan = document.querySelector("#man");
const ansLow = document.querySelector("#low");
const ansMedium = document.querySelector("#medium");
const ansHigh = document.querySelector("#high");
const ansTrip = document.querySelector("#trip");
const ansHome = document.querySelector("#home");
const ansCont = document.querySelector("#cont");
const ansNoCont = document.querySelector("#noCont");
const sick1 = document.querySelector("#sick1");
const sick2 = document.querySelector("#sick2");
const sick3 = document.querySelector("#sick3");
const sick4 = document.querySelector("#sick4");
const noSick = document.querySelector("#noSick");

// inne zmienne
let score = 0;
const points1 = document.querySelector(".result1 span");
const points2 = document.querySelector(".result2 span");
const points3 = document.querySelector(".result3 span");

const sickArray = [sick1, sick2, sick3, sick4];

const goToAge = () => {
    console.log('działa');

    if(!ansWoman.checked && !ansMan.checked) {
        alert("Wybierz odpowiedź");
        return
    }

    else if(ansMan.checked) {
        score++;
    }
    qstSex.classList.add("hide");
    qstAge.classList.remove("age");

    console.log(`score = ${score}`);
}

btnNextSex.addEventListener("click", goToAge);


const goToAbroad = () => {

    if(!ansLow.checked && !ansMedium.checked && !ansHigh.checked) {
        alert("Wybierz odpowiedź");
        return
    }

    else if(ansMedium.checked) {
        score++;
    }

    else if(ansHigh.checked) {
        score += 2;
    }

    qstAge.classList.add("hide");
    qstAbroad.classList.remove("abroad");

    console.log(`score = ${score}`);
}

btnNextAge.addEventListener("click", goToAbroad);


const goToContact = () => {
    
    if(!ansTrip.checked && !ansHome.checked) {
        alert("Wybierz odpowiedź");
        return
    }

    else if(ansTrip.checked) {
        score++;
    }
    
    qstAbroad.classList.add("hide");
    qstContact.classList.remove("contact");

    console.log(`score = ${score}`);
}

btnNextAbroad.addEventListener("click", goToContact);


const goToSick = () => {

    if(!ansCont.checked && !ansNoCont.checked) {
        alert("Wybierz odpowiedź");
        return
    }

    else if(ansCont.checked) {
        score++;
    }

    qstContact.classList.add("hide");
    qstSick.classList.remove("sick");

    console.log(`score = ${score}`);
}

btnNextContact.addEventListener("click", goToSick);

const goToResult = () => {

    if(!sick1.checked && !sick2.checked && !sick3.checked && !sick4.checked && !noSick.checked) {
        alert("Wybierz odpowiedź");
        return
    }

    for(let i = 0; i < sickArray.length; i++) {
        if(sickArray[i].checked) {
            score++;
        }
    }

    qstSick.classList.add("hide");

    if(score <= 2) {
        result1.classList.remove("result1");
        points1.textContent = `${score}`; 
    }

    if(score > 2 && score <=5) {
        result2.classList.remove("result2");
        points2.textContent = `${score}`;      
    }

    else if(score > 5) {
        result3.classList.remove("result3");
        points3.textContent = `${score}`;      
    }

    console.log(`score = ${score}`);
}

btnNextSick.addEventListener("click", goToResult);
