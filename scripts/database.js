const database = {
    bands: [
        {
            id: 1,
            name: "Mouse Rat",
            numMembers: 5,
            yearFormed: 1999,
            musicGenre: "Rock",
            numOfActs: 2
        },{
            id: 2,
            name: "Duke Silver",
            numMembers: "*redacted*",
            yearFormed: "*redacted*",
            musicGenre: "*redacted*",
            numOfActs: 2
        }, {
            id: 3,
            name: "Neutral Milk Hotel",
            numMembers: 5,
            yearFormed: 1989,
            musicGenre: "Indie-Rock",
            numOfActs: 2
        }],
    venues: [
        {
            id: 1,
            name: "Tom's Bistro",
            address: "5936 Sunset Boulevard in Pawnee, Indiana",
            sqrFootage: "900",
            maxActs: 2
        }, {
            id: 2,
            name: "Pawnee Senior Center",
            address: "4024 Main Street in Pawnee, Indiana",
            sqrFootage: "1500",
            maxActs: 2
        }, {
            id: 3,
            name: "The Snakehole Lounge",
            address: "2621 2nd Avenue North in Pawnee, Indiana",
            sqrFootage: "1400",
            maxActs: 2 
        }],
        bookings: [
        {
            id: 1,
            venue: "Tom's Bistro",
            venueID: 1,
            band: "Mouse Rat",
            bandID: 1,
            date: "12/9/22",
            time: "7pm"
        }, {
            id: 2,
            venue: "Tom's Bistro",
            venueID: 1,
            band: "Duke Silver",
            bandID: 2,
            date: "12/9/22",
            time: "9pm"
        }, {
            id: 3,
            venue: "Pawnee Senior Center",
            venueID: 2,
            band: "Neutral Milk Hotel",
            bandID: 3,
            date: "12/10/22",
            time: "9pm"
        }, {
            id: 4,
            venue: "Pawnee Senior Center",
            venueID: 2,
            band: "Mouse Rat",
            bandID: 1,
            date: "12/10/22",
            time: "9pm"
        }, {
            id: 5,
            venue: "The Snakehole Lounge",
            venueID: 3,
            band: "Duke Silver",
            bandID: 2,
            date: "12/11/22",
            time: "7pm"
        }, {
            id: 6,
            venue: "The Snakehole Lounge",
            venueID: 3,
            band: "Neutral Milk Hotel",
            bandID: 3,
            date: "12/11/22",
            time: "9pm"
        }, {
            id: 7,
            venue: "Tom's Bistro",
            venueID: 1,
            band: "Neutral Milk Hotel",
            bandID: 3,
            date: "12/10/22",
            time: "2pm"
        }, {
            id: 8,
            venue: "Pawnee Senior Center",
            venueID: 2,
            band: "Duke Silver",
            bandID: 2,
            date: "12/10/22",
            time: "2pm"
        }, {
            id: 9,
            venue: "The Snakehole Lounge",
            venueID: 3,
            band: "Mouse Rat",
            bandID: 1,
            date: "12/11/22",
            time: "2pm"
        }
        ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}