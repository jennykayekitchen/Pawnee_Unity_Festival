import { getBookings, getBands } from "./database.js";

const bookings = getBookings()
const bands = getBands()

export const listOfBookings = () => {
    let bookingHTML = "<ul>"

    for(const booking of bookings) {
        bookingHTML += `<li id = "booking--${booking.id}">${booking.band} is playing at ${booking.venue} on ${booking.date}.</li>`
    }
    bookingHTML += "</ul>"
    return bookingHTML
}

// window alert should be presented to the user that displays all of the band information 
//(name, genre, year formed, number of members)

//function that pulls out the band from each booking and puts the band info in HTML
const assignedBandInfo = (booking) => {
    let bandInfo = ""
        for (const band of bands) {
            if (booking.bandID === band.id) {
                    bandInfo += `\nBand Name: ${band.name}\nNumber of Members: ${band.numMembers}\nMusical Genre: ${band.musicGenre}\nFormed: ${band.yearFormed}`
                }
            }
            return bandInfo
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)) {
                    //const eachBand = filterBandsByBooking(bandId)
                    const allTheBandInfo = assignedBandInfo(booking)

                    window.alert(`${allTheBandInfo}`)
                }
            }
        }
    }
)
