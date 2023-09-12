//console.log("hello")
//console.error
//onclick="alert('Aludni akarok')"

/*document.querySelector('h1').onclick = function () {
  alert('Aludni akarok!')
}

document.querySelector('h2').onclick = function () {
  alert('Hello!')
}*/

const helloh1 = document.querySelector('#hello')

const container = document.querySelector('#container')

helloh1.addEventListener('click', () => {
  let card = document.createElement('div')
  card.innerText = Math.floor(Math.random() * 6) + 1
  container.append(card)
  card.classList.add('card')
})
