import { getBands, getBookings, getVenues } from "./database.js";


const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const listOfBands = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }
    bandHTML += "</ul>"
    return bandHTML
}


//window alert should be presented to the user that displays all of the venues at which the band is playing.

//function that goes through each booking and pulls out the venues
const assignedVenues = (band) => {
    let venueNames = ""
    for (const booking of bookings) {
        if (booking.bandID === band.id) {
            for (const venue of venues) {
                if (booking.venueID === venue.id) {
                    venueNames += `\n${venue.name} `
                }
            }
        }
    }
    return venueNames
}



//display all the venues a band is playing at when the band is clicked.
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    //const eachBand = filterBandsByBooking(bandId)
                    const allTheVenues = assignedVenues(band)

                    window.alert(`${band.name} plays at the following venues: ${allTheVenues}`)
                }
            }
        }
    }
)


