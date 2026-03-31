//Append ?lang=de to addressBar and read it's value
let addressBarParams = new URLSearchParams(window.location.search)
let lang = addressBarParams.get("lang")

//Change between locales inside HTML file, just hide elements you don't need
if (lang === 'en') {

    document.querySelector("#back-link").href = '/'

    document.querySelectorAll('[data-lang="en"]').forEach((element) => {
        element.style.display = ''
    })

    document.querySelectorAll('textarea').forEach((element) => {
        element.placeholder = 'Type your answer here'
    })
}

if (lang === 'de') {

    document.querySelector("#back-link").href = '/de/'

    document.querySelectorAll('[data-lang="de"]').forEach((element) => {
        element.style.display = ''
    })
    document.querySelectorAll('textarea').forEach((element) => {
        element.placeholder = 'Geben Sie hier Ihre Antwort ein'
    })
}

if (lang === 'ru') {

    document.querySelector("#back-link").href = '/'

    document.querySelectorAll('[data-lang="ru"]').forEach((element) => {
        element.style.display = ''
    })
    document.querySelectorAll('textarea').forEach((element) => {
        element.placeholder = 'Напишите ответ в этом поле'
    })

    document.querySelector("#budget-check-1").value = '300 000 РУБЛЕЙ'
    document.querySelector("#budget-check-2").value = '500 000 РУБЛЕЙ'
    document.querySelector("#budget-check-3").value = '1 МЛН РУБЛЕЙ'
    document.querySelector("#budget-check-4").value = 'БОЛЬШЕ 1 МЛН РУБЛЕЙ'
}






let mainForm = document.getElementById("mainForm");
let prevButton = document.querySelector(".prev-question");
let nextButtons = document.querySelectorAll(".next-question");
let formCounter = document.querySelector(".current-question");
let progressBar = document.querySelector(".progress-bar");
let currentPos = 0;
let currentIndex = 1;
let questionNumber = 9;

console.log(localStorage.getItem("userMail"))

gsap.set(prevButton, {autoAlpha: 0});


document.addEventListener('keyup', event => {
    if (event.key === "Enter") {
        console.log('Enter was pressed. Yay!');
        event.preventDefault();
    } else {
        console.log(`${event.code} was pressed.`);
    }
});

document.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault(); 
    }
})





//Cloud function to send form
mainForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // REPLACE THIS with your actual Cloud Function URL from the GCP Console
            const FUNCTION_URL = "https://radiance-ru-brief-1096616366730.asia-east1.run.app";




            const payload = {
                client: localStorage.getItem("userName"),
                usertext: localStorage.getItem("userText"),
                userMail: localStorage.getItem("userMail"),
                worktype: returnCheckboxes('step-3'),
                addinfo: document.getElementById('field5').value,
                budget: returnCheckboxes('step-5'),
                references: document.getElementById('field6').value,
                yearbudget: document.getElementById('field7').value,
                marketing: document.getElementById('field9').value,
                lastfield: document.getElementById('field10').value
            };

            try {
                const response = await fetch(FUNCTION_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    //formAnimation.restart()
                    console.log("✅ Email sent successfully!" + response.statusText)
                    window.location.href = "/brief/success/"
                    mainForm.reset()
                } else {
                    //formAnimation.restart()
                    console.log(response.statusText)
                }
            } catch (err) {
                //formAnimation.restart()
                console.error(err)
            }
        })

function returnCheckboxes(stepId) {
        let step = document.getElementById(stepId);
        let checkboxes = step.querySelectorAll('.checkbox-input');
        let data = []

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                data.push(checkbox.value)
            }
            console.log(data)
        })
        console.log(data);

        return data;
}


    
prevButton.addEventListener("click", (event) => { previousQuestion() }, true);

nextButtons.forEach((element) => {
    element.addEventListener("click", (event) => { nextQuestion() }, true);
});


function nextQuestion() {
        
    let windowHeight = mainForm.offsetHeight / (questionNumber - 1);

    console.log(windowHeight + "px");
    if (currentIndex > 0 ) {
        gsap.to(prevButton, {autoAlpha: 0.5});
    }
    
    currentPos = currentPos - windowHeight;
    gsap.to(mainForm, {
        y: currentPos
    });

    currentIndex = currentIndex + 1;
    gsap.to(progressBar, {
        width: window.innerWidth / questionNumber * currentIndex
    });
    formCounter.innerHTML = currentIndex;
    console.log(windowHeight);
}

function previousQuestion() {
    
    let windowHeight = mainForm.offsetHeight / (questionNumber - 1);

    if (currentIndex == 2 ) {
        gsap.to(prevButton, {autoAlpha: 0});
    }
    
    if (currentPos < 0) {
        console.log(currentPos);
        currentPos = currentPos + windowHeight;
        gsap.to(mainForm, {
            y: currentPos
        });

        currentIndex = currentIndex - 1;
        gsap.to(progressBar, {
            width: window.innerWidth / questionNumber * currentIndex
        });

        formCounter.innerHTML = currentIndex;
        //console.log(currentIndex);
    }
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}



window.addEventListener('resize', function(event) {
    //windowHeight = window.innerHeight;
}, true);