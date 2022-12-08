import { listOfBands } from "./bands.js"
import { listOfBookings } from "./bookings.js"
import { listOfVenues } from "./venues.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Pawnee Unity Festival</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${listOfBookings()}
</article>
<article class="details">
<section class="venues">
    <h2>Venues</h2>
    ${listOfVenues()}
</section>
    <section class="bands">
        <h2>Bands</h2>
        ${listOfBands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
