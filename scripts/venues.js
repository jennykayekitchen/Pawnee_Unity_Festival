import { getBands, getBookings, getVenues } from "./database.js";


const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const listOfVenues = () => {
    let venueHTML = "<ul>"

    for(const venue of venues) {
        venueHTML += `<li id = "venue--${venue.id}">${venue.name}</li>`
    }
    venueHTML += "</ul>"
    return venueHTML
}

//window alert should be presented to the user that displays all of the bands that have booked the venue.
// function that goes through all the bookings, and pulls all the bands that play at each venue
const assignedBands = (venue) => {
    let bandNames = ""
    for (const booking of bookings) {
        if (booking.venueID === venue.id) {
            for (const band of bands) {
                if (booking.bandID === band.id) {
                    bandNames += `\n${band.name} `
                }
            }
        }
    }
    return bandNames
}


//display all the venues a band is playing at when the band is clicked.
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    //const eachBand = filterBandsByBooking(bandId)
                    const allTheBands = assignedBands(venue)

                    window.alert(`The following bands play at ${venue.name}: ${allTheBands}`)
                }
            }
        }
    }
)

