const init = () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", e => {
    e.preventDefault()
    console.log(e) // we use this console.log for confirming we are selecting the right things. 
    // we can confirm the console.log by typing something on the form then submitting
    let input = e.target.children[1].value
    console.log(input)
    // this allows us to target the input with the id of searchById.

    // from here we need to access our data through fetch
    // fetch("http://localhost:3000/movies")
    // note the fetch url we used only allows for all the movie data to be loaded without considering the id we passed into the form. we therefore need to tailor it to each id we type using interpolation
    fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    // .then(data => console.log(data)) // this line confirms that we can access our data by logging it
    .then(data => movieData(data))

  })
}

function movieData(data) {
    const titleElement = document.querySelector("h4")
    const summaryElement = document.querySelector("p")
    // console.log(titleElement)
    // console.log(summaryElement)

    // console.log(data.title)
    // console.log(data.summary)

    // i used this console logs for debugging my work

    titleElement.textContent = data.title
    summaryElement.textContent = data.summary
}


document.addEventListener('DOMContentLoaded', init);

