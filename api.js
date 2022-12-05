let miParrafo = document.querySelector('p')

document.querySelector('button')
    .addEventListener('click',pressButton);

function pressButton() {
    let data = fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(result => result.json())
        .then(data => {
            miParrafo.innerText = data.text
        })
}