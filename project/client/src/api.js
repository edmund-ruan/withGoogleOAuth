import axios from 'axios'


export const registration = async (name, email, password) => {
    try {
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password)
        const response = await axios({
            method: "POST",
            url: "/register",
            data: data
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message ? error.response.data.message : "Unable to register")
    }
}


export const login = async (email, password) => {
    try {
        const data = new FormData();
        data.append("email", email);
        data.append("password", password)
        const response = await axios({
            method: "POST",
            url: "/login",
            data: data
        });
        console.log(response);
        return response.data; 
    } catch (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.message);
        throw new Error(error.response.data.message ? error.response.data.message : "Unable to login")
    }
}

export const checkIsLoggedIn = async () => {
    try {
        const response = await axios({
            method: "get",
            url: "/is_logged_in",
        });
        const isLoggedIn = response.data.isLoggedIn;
        return isLoggedIn;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const findApartments = async (city, state) => {
    try {
        const response = await axios({
            method: "get",
            url: "/fetch_apartment_data_from_location",
            params: {
                "city": city,
                "state": state
            }
        });
        const apartments = response.data.apartments;
        return apartments;
    } catch (error) {
        throw new Error(error.response.data.message ? error.response.data.message : "Unable to find apartments")
    }
}

export const findRestaurants = async (location) => {
    try {
        const data = new FormData();
        data.append("location", location)
        const response = await axios({
            method: "post",
            url: "/fetch_restaurant_data_from_location",
            data: data
        });
        const restaurants = response.data.businesses;
        return restaurants;
    } catch (error) {
        throw new Error(error.response.data.message ? error.response.data.message : "Unable to find apartments");
    }
}

export const delete_cookie = () => {
    document.cookie = 'session=; Max-Age=-99999999;';  
}


export const fakeData = [
    {
        "addressLine1": "1100 River Hills Rd",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-06-19T15:27:49.092Z",
        "daysOnMarket": 175,
        "formattedAddress": "1100 River Hills Rd, Austin, TX 78733",
        "id": "1100-River-Hills-Rd,-Austin,-TX-78733",
        "lastSeen": "2021-12-11T14:27:22.326Z",
        "latitude": 30.327841,
        "listedDate": "2021-06-19T15:27:49.092Z",
        "longitude": -97.85098,
        "price": 9500000,
        "propertyType": "Land",
        "rawAddress": "1100 River Hills Rd, Austin, Texas 78733",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78733"
    },
    {
        "addressLine1": "5512 Cuesta Verde",
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-09-15T18:03:46.875Z",
        "daysOnMarket": 87,
        "formattedAddress": "5512 Cuesta Verde, Austin, TX 78746",
        "id": "5512-Cuesta-Verde,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.326Z",
        "latitude": 30.33327,
        "listedDate": "2021-09-15T18:03:46.875Z",
        "longitude": -97.796233,
        "price": 9250000,
        "propertyType": "Single Family",
        "rawAddress": "5512 Cuesta Verde, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 9876,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "5705 Scenic View Dr",
        "bedrooms": 7,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-22T00:35:20.415Z",
        "daysOnMarket": 446,
        "formattedAddress": "5705 Scenic View Dr, Austin, TX 78746",
        "id": "5705-Scenic-View-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.325Z",
        "latitude": 30.315461,
        "listedDate": "2020-09-22T00:35:20.415Z",
        "longitude": -97.807293,
        "price": 11500000,
        "propertyType": "Single Family",
        "rawAddress": "5705 Scenic View Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 10450,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "5416 N FM 973",
        "bathrooms": 5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.260Z",
        "daysOnMarket": 114,
        "formattedAddress": "5416 N FM 973, Austin, TX 78724",
        "id": "5416-N-FM-973,-Austin,-TX-78724",
        "lastSeen": "2021-12-11T14:27:22.325Z",
        "latitude": 30.271719,
        "listedDate": "2021-08-19T17:40:26.260Z",
        "longitude": -97.604861,
        "price": 18000000,
        "rawAddress": "5416 N FM 973, Austin, Texas 78724",
        "removedDate": null,
        "squareFootage": 6750,
        "state": "TX",
        "status": "Active",
        "zipCode": "78724"
    },
    {
        "addressLine1": "1501 Ridgecrest Dr",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-07T15:42:50.038Z",
        "daysOnMarket": 65,
        "formattedAddress": "1501 Ridgecrest Dr, Austin, TX 78746",
        "id": "1501-Ridgecrest-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.325Z",
        "latitude": 30.317209,
        "listedDate": "2021-10-07T15:42:50.038Z",
        "longitude": -97.803106,
        "price": 10950000,
        "propertyType": "Single Family",
        "rawAddress": "1501 Ridgecrest Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 10498,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "7901 Escala Dr",
        "bedrooms": 7,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-11-16T15:12:39.739Z",
        "daysOnMarket": 25,
        "formattedAddress": "7901 Escala Dr, Austin, TX 78735",
        "id": "7901-Escala-Dr,-Austin,-TX-78735",
        "lastSeen": "2021-12-11T14:27:22.325Z",
        "latitude": 30.272952,
        "listedDate": "2021-11-16T15:12:39.739Z",
        "longitude": -97.868056,
        "price": 9900000,
        "propertyType": "Single Family",
        "rawAddress": "7901 Escala Dr, Austin, Texas 78735",
        "removedDate": null,
        "squareFootage": 15266,
        "state": "TX",
        "status": "Active",
        "zipCode": "78735"
    },
    {
        "addressLine1": "211 Costa Bella Dr",
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-22T01:07:53.927Z",
        "daysOnMarket": 446,
        "formattedAddress": "211 Costa Bella Dr, Austin, TX 78734",
        "id": "211-Costa-Bella-Dr,-Austin,-TX-78734",
        "lastSeen": "2021-12-11T14:27:22.324Z",
        "latitude": 30.389013,
        "listedDate": "2020-09-22T01:07:53.927Z",
        "longitude": -97.949821,
        "price": 8200000,
        "propertyType": "Single Family",
        "rawAddress": "211 Costa Bella Dr, Austin, Texas 78734",
        "removedDate": null,
        "squareFootage": 9261,
        "state": "TX",
        "status": "Active",
        "zipCode": "78734"
    },
    {
        "addressLine1": "4323 Mount Bonnell Rd",
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.258Z",
        "daysOnMarket": 114,
        "formattedAddress": "4323 Mount Bonnell Rd, Austin, TX 78731",
        "id": "4323-Mount-Bonnell-Rd,-Austin,-TX-78731",
        "lastSeen": "2021-12-11T14:27:22.324Z",
        "latitude": 30.324711,
        "listedDate": "2021-08-19T17:40:26.258Z",
        "longitude": -97.773898,
        "price": 9995000,
        "propertyType": "Land",
        "rawAddress": "4323 Mount Bonnell Rd, Austin, Texas 78731",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78731"
    },
    {
        "addressLine1": "10210 Crumley Ranch Rd",
        "bathrooms": 2.5,
        "bedrooms": 3,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-09T15:22:17.381Z",
        "daysOnMarket": 63,
        "formattedAddress": "10210 Crumley Ranch Rd, Austin, TX 78738",
        "id": "10210-Crumley-Ranch-Rd,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.324Z",
        "latitude": 30.26606,
        "listedDate": "2021-10-09T15:22:17.381Z",
        "longitude": -98.024644,
        "price": 8500000,
        "propertyType": "Single Family",
        "rawAddress": "10210 Crumley Ranch Rd, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 2248,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "7621 Spicewood Springs Rd",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-30T15:16:47.126Z",
        "daysOnMarket": 42,
        "formattedAddress": "7621 Spicewood Springs Rd, Austin, TX 78759",
        "id": "7621-Spicewood-Springs-Rd,-Austin,-TX-78759",
        "lastSeen": "2021-12-11T14:27:22.324Z",
        "latitude": 30.409917,
        "listedDate": "2021-10-30T15:16:47.126Z",
        "longitude": -97.796559,
        "price": 15000000,
        "rawAddress": "7621 Spicewood Springs Rd, Austin, Texas 78759",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78759"
    },
    {
        "addressLine1": "2214 E Cesar Chavez St",
        "bathrooms": 4,
        "bedrooms": 6,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-15T15:20:51.741Z",
        "daysOnMarket": 57,
        "formattedAddress": "2214 E Cesar Chavez St, Austin, TX 78702",
        "id": "2214-E-Cesar-Chavez-St,-Austin,-TX-78702",
        "lastSeen": "2021-12-11T14:27:22.323Z",
        "latitude": 30.2558,
        "listedDate": "2021-10-15T15:20:51.741Z",
        "longitude": -97.719975,
        "price": 8500000,
        "propertyType": "Single Family",
        "rawAddress": "2214 E Cesar Chavez St, Austin, Texas 78702",
        "removedDate": null,
        "squareFootage": 3201,
        "state": "TX",
        "status": "Active",
        "zipCode": "78702"
    },
    {
        "addressLine1": "5800 Spanish Oaks Club Blvd",
        "bathrooms": 6.5,
        "bedrooms": 6,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-11-20T15:06:30.993Z",
        "daysOnMarket": 21,
        "formattedAddress": "5800 Spanish Oaks Club Blvd, Austin, TX 78738",
        "id": "5800-Spanish-Oaks-Club-Blvd,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.323Z",
        "latitude": 30.292699,
        "listedDate": "2021-11-20T15:06:30.993Z",
        "longitude": -97.944373,
        "price": 7473000,
        "propertyType": "Single Family",
        "rawAddress": "5800 Spanish Oaks Club Blvd, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 6832,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "4900 Amarra Dr",
        "bathrooms": 5.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-21T23:26:04.896Z",
        "daysOnMarket": 446,
        "formattedAddress": "4900 Amarra Dr, Austin, TX 78735",
        "id": "4900-Amarra-Dr,-Austin,-TX-78735",
        "lastSeen": "2021-12-11T14:27:22.322Z",
        "latitude": 30.264763,
        "listedDate": "2020-09-21T23:26:04.896Z",
        "longitude": -97.882712,
        "price": 6000000,
        "propertyType": "Single Family",
        "rawAddress": "4900 Amarra Dr, Austin, Texas 78735",
        "removedDate": null,
        "squareFootage": 6013,
        "state": "TX",
        "status": "Active",
        "zipCode": "78735"
    },
    {
        "addressLine1": "4511 Island Cv",
        "bathrooms": 5.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-02-11T14:31:33.383Z",
        "daysOnMarket": 303,
        "formattedAddress": "4511 Island Cv, Austin, TX 78731",
        "id": "4511-Island-Cv,-Austin,-TX-78731",
        "lastSeen": "2021-12-11T14:27:22.322Z",
        "latitude": 30.330949,
        "listedDate": "2021-02-11T14:31:33.383Z",
        "longitude": -97.778256,
        "price": 7500000,
        "propertyType": "Single Family",
        "rawAddress": "4511 Island Cv, Austin, Texas 78731",
        "removedDate": null,
        "squareFootage": 7755,
        "state": "TX",
        "status": "Active",
        "zipCode": "78731"
    },
    {
        "addressLine1": "11805 Overlook Pass",
        "bedrooms": 7,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-06-16T15:34:42.512Z",
        "daysOnMarket": 178,
        "formattedAddress": "11805 Overlook Pass, Austin, TX 78738",
        "id": "11805-Overlook-Pass,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.322Z",
        "latitude": 30.285119,
        "listedDate": "2021-06-16T15:34:42.512Z",
        "longitude": -97.937327,
        "price": 7000000,
        "propertyType": "Single Family",
        "rawAddress": "11805 Overlook Pass, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 8800,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "2705 Island Ledge Cv",
        "bathrooms": 6.5,
        "bedrooms": 7,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-07-19T16:33:41.371Z",
        "daysOnMarket": 145,
        "formattedAddress": "2705 Island Ledge Cv, Austin, TX 78746",
        "id": "2705-Island-Ledge-Cv,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.322Z",
        "latitude": 30.311981,
        "listedDate": "2021-07-19T16:33:41.371Z",
        "longitude": -97.781274,
        "price": 8500000,
        "propertyType": "Single Family",
        "rawAddress": "2705 Island Ledge Cv, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 10818,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "15203 W Hwy",
        "addressLine2": "71",
        "bathrooms": 3,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-22T01:07:53.925Z",
        "daysOnMarket": 446,
        "formattedAddress": "15203 W Hwy, 71, Austin, TX 78738",
        "id": "15203-W-Hwy,-71,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.321Z",
        "latitude": 30.31557,
        "listedDate": "2020-09-22T01:07:53.925Z",
        "longitude": -97.980397,
        "price": 6300000,
        "rawAddress": "15203 W Highway 71, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 3560,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "2300 Portofino Ridge Dr",
        "bedrooms": 7,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-02-11T14:31:33.380Z",
        "daysOnMarket": 303,
        "formattedAddress": "2300 Portofino Ridge Dr, Austin, TX 78735",
        "id": "2300-Portofino-Ridge-Dr,-Austin,-TX-78735",
        "lastSeen": "2021-12-11T14:27:22.321Z",
        "latitude": 30.287318,
        "listedDate": "2021-02-11T14:31:33.380Z",
        "longitude": -97.857715,
        "price": 5700000,
        "propertyType": "Single Family",
        "rawAddress": "2300 Portofino Ridge Dr, Austin, Texas 78735",
        "removedDate": null,
        "squareFootage": 9579,
        "state": "TX",
        "status": "Active",
        "zipCode": "78735"
    },
    {
        "addressLine1": "2701 Toro Canyon Rd",
        "addressLine2": "Unit D",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-31T16:26:40.333Z",
        "daysOnMarket": 102,
        "formattedAddress": "2701 Toro Canyon Rd, Unit D, Austin, TX 78746",
        "id": "2701-Toro-Canyon-Rd,-Unit-D,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.321Z",
        "latitude": 30.316694,
        "listedDate": "2021-08-31T16:26:40.333Z",
        "longitude": -97.793059,
        "price": 7000000,
        "propertyType": "Single Family",
        "rawAddress": "2701 Toro Canyon Rd Unit D, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 5129,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "613 Schickel Ter",
        "bathrooms": 5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-12T15:37:26.818Z",
        "daysOnMarket": 60,
        "formattedAddress": "613 Schickel Ter, Austin, TX 78738",
        "id": "613-Schickel-Ter,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.321Z",
        "latitude": 30.364836,
        "listedDate": "2021-10-12T15:37:26.818Z",
        "longitude": -98.015085,
        "price": 5950000,
        "propertyType": "Single Family",
        "rawAddress": "613 Schickel Ter, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 4845,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "5221 Musket Cv",
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-11-18T14:43:09.050Z",
        "daysOnMarket": 23,
        "formattedAddress": "5221 Musket Cv, Austin, TX 78738",
        "id": "5221-Musket-Cv,-Austin,-TX-78738",
        "lastSeen": "2021-12-11T14:27:22.321Z",
        "latitude": 30.286394,
        "listedDate": "2021-11-18T14:43:09.050Z",
        "longitude": -97.934567,
        "price": 7500000,
        "propertyType": "Single Family",
        "rawAddress": "5221 Musket Cv, Austin, Texas 78738",
        "removedDate": null,
        "squareFootage": 8896,
        "state": "TX",
        "status": "Active",
        "zipCode": "78738"
    },
    {
        "addressLine1": "1103 N Weston Ln",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-22T01:08:10.423Z",
        "daysOnMarket": 446,
        "formattedAddress": "1103 N Weston Ln, Austin, TX 78733",
        "id": "1103-N-Weston-Ln,-Austin,-TX-78733",
        "lastSeen": "2021-12-11T14:27:22.320Z",
        "latitude": 30.323389,
        "listedDate": "2020-09-22T01:08:10.423Z",
        "longitude": -97.842194,
        "price": 5999000,
        "propertyType": "Land",
        "rawAddress": "1103 N Weston Ln, Austin, Texas 78733",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78733"
    },
    {
        "addressLine1": "608 Brookhaven Trl",
        "bathrooms": 5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-03-05T15:25:23.862Z",
        "daysOnMarket": 281,
        "formattedAddress": "608 Brookhaven Trl, Austin, TX 78746",
        "id": "608-Brookhaven-Trl,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.320Z",
        "latitude": 30.282654,
        "listedDate": "2021-03-05T15:25:23.862Z",
        "longitude": -97.798642,
        "price": 5300000,
        "propertyType": "Single Family",
        "rawAddress": "608 Brookhaven Trl, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 4419,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "8503 Hillmoore Dr",
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.255Z",
        "daysOnMarket": 114,
        "formattedAddress": "8503 Hillmoore Dr, Austin, TX 78744",
        "id": "8503-Hillmoore-Dr,-Austin,-TX-78744",
        "lastSeen": "2021-12-11T14:27:22.320Z",
        "latitude": 30.170717,
        "listedDate": "2021-08-19T17:40:26.255Z",
        "longitude": -97.690815,
        "price": 7400000,
        "propertyType": "Land",
        "rawAddress": "8503 Hillmoore Dr, Austin, Texas 78744",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78744"
    },
    {
        "addressLine1": "495 Whippoorwill Trl",
        "bathrooms": 5.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.257Z",
        "daysOnMarket": 114,
        "formattedAddress": "495 Whippoorwill Trl, Austin, TX 78746",
        "id": "495-Whippoorwill-Trl,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.320Z",
        "latitude": 30.294146,
        "listedDate": "2021-08-19T17:40:26.257Z",
        "longitude": -97.843357,
        "price": 6750000,
        "propertyType": "Single Family",
        "rawAddress": "495 Whippoorwill Trl, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 5134,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "2601 Wooldridge Dr",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-03-04T16:13:11.970Z",
        "daysOnMarket": 282,
        "formattedAddress": "2601 Wooldridge Dr, Austin, TX 78703",
        "id": "2601-Wooldridge-Dr,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:22.319Z",
        "latitude": 30.294301,
        "listedDate": "2021-03-04T16:13:11.970Z",
        "longitude": -97.750763,
        "price": 4980000,
        "propertyType": "Single Family",
        "rawAddress": "2601 Wooldridge Dr, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 6212,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "610 Brookhaven Trl",
        "bathrooms": 4.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-03-05T15:25:19.014Z",
        "daysOnMarket": 281,
        "formattedAddress": "610 Brookhaven Trl, Austin, TX 78746",
        "id": "610-Brookhaven-Trl,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.319Z",
        "latitude": 30.282506,
        "listedDate": "2021-03-05T15:25:19.014Z",
        "longitude": -97.798368,
        "price": 4800000,
        "propertyType": "Single Family",
        "rawAddress": "610 Brookhaven Trl, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 4400,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "1402 Ethridge Ave",
        "bathrooms": 6.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-06-25T14:34:44.153Z",
        "daysOnMarket": 169,
        "formattedAddress": "1402 Ethridge Ave, Austin, TX 78703",
        "id": "1402-Ethridge-Ave,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:22.319Z",
        "latitude": 30.294896,
        "listedDate": "2021-06-25T14:34:44.153Z",
        "longitude": -97.75327,
        "price": 5400000,
        "propertyType": "Single Family",
        "rawAddress": "1402 Ethridge Ave, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 5997,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "4804 Toreador Dr",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-22T01:07:53.922Z",
        "daysOnMarket": 446,
        "formattedAddress": "4804 Toreador Dr, Austin, TX 78746",
        "id": "4804-Toreador-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.318Z",
        "latitude": 30.320069,
        "listedDate": "2020-09-22T01:07:53.922Z",
        "longitude": -97.792491,
        "price": 4950000,
        "propertyType": "Single Family",
        "rawAddress": "4804 Toreador Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 6604,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "F M Road 1327 Frd",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-04-18T14:54:16.936Z",
        "daysOnMarket": 237,
        "formattedAddress": "F M Road 1327 Frd, Austin, TX 78747",
        "id": "F-M-Road-1327-Frd,-Austin,-TX-78747",
        "lastSeen": "2021-12-11T14:27:22.318Z",
        "latitude": 30.08897,
        "listedDate": "2021-04-18T14:54:16.936Z",
        "longitude": -97.713432,
        "price": 4709000,
        "propertyType": "Land",
        "rawAddress": "F M Road 1327 Frd, Austin, Texas 78747",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78747"
    },
    {
        "addressLine1": "4604 Mantle Dr",
        "bathrooms": 7.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-09-21T18:18:17.710Z",
        "daysOnMarket": 81,
        "formattedAddress": "4604 Mantle Dr, Austin, TX 78746",
        "id": "4604-Mantle-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.318Z",
        "latitude": 30.319578,
        "listedDate": "2021-09-21T18:18:17.710Z",
        "longitude": -97.786818,
        "price": 5500000,
        "propertyType": "Single Family",
        "rawAddress": "4604 Mantle Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 11009,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "1115 W 11th St",
        "addressLine2": "Unit 2",
        "bathrooms": 3,
        "bedrooms": 3,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-01T15:30:20.322Z",
        "daysOnMarket": 71,
        "formattedAddress": "1115 W 11th St, Unit 2, Austin, TX 78703",
        "id": "1115-W-11th-St,-Unit-2,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:22.318Z",
        "latitude": 30.276411,
        "listedDate": "2021-10-01T15:30:20.322Z",
        "longitude": -97.75417,
        "price": 5200000,
        "propertyType": "Condo",
        "rawAddress": "1115 W 11th St Unit 2, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 3321,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "1904 Hill Oaks Ct",
        "bathrooms": 4.5,
        "bedrooms": 3,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-04-18T14:54:16.937Z",
        "daysOnMarket": 237,
        "formattedAddress": "1904 Hill Oaks Ct, Austin, TX 78703",
        "id": "1904-Hill-Oaks-Ct,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:22.317Z",
        "latitude": 30.295062,
        "listedDate": "2021-04-18T14:54:16.937Z",
        "longitude": -97.770799,
        "price": 4895000,
        "propertyType": "Single Family",
        "rawAddress": "1904 Hill Oaks Ct, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 4596,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "1211 Kinney Ave",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-02-11T14:31:21.812Z",
        "daysOnMarket": 303,
        "formattedAddress": "1211 Kinney Ave, Austin, TX 78704",
        "id": "1211-Kinney-Ave,-Austin,-TX-78704",
        "lastSeen": "2021-12-11T14:27:22.316Z",
        "latitude": 30.255064,
        "listedDate": "2021-02-11T14:31:21.812Z",
        "longitude": -97.765484,
        "price": 4500000,
        "propertyType": "Land",
        "rawAddress": "1211 Kinney Ave, Austin, Texas 78704",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78704"
    },
    {
        "addressLine1": "1211 W Riverside Dr",
        "addressLine2": "Unit 6E",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-04-18T14:54:16.931Z",
        "daysOnMarket": 237,
        "formattedAddress": "1211 W Riverside Dr, Unit 6E, Austin, TX 78704",
        "id": "1211-W-Riverside-Dr,-Unit-6E,-Austin,-TX-78704",
        "lastSeen": "2021-12-11T14:27:22.316Z",
        "latitude": 30.26409,
        "listedDate": "2021-04-18T14:54:16.931Z",
        "longitude": -97.756682,
        "price": 4850000,
        "propertyType": "Condo",
        "rawAddress": "1211 W Riverside Dr Unit 6E, Austin, Texas 78704",
        "removedDate": null,
        "squareFootage": 3511,
        "state": "TX",
        "status": "Active",
        "zipCode": "78704"
    },
    {
        "addressLine1": "200 Congress Ave",
        "addressLine2": "Unit 48QS",
        "bathrooms": 3.5,
        "bedrooms": 3,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.253Z",
        "daysOnMarket": 114,
        "formattedAddress": "200 Congress Ave, Unit 48QS, Austin, TX 78701",
        "id": "200-Congress-Ave,-Unit-48QS,-Austin,-TX-78701",
        "lastSeen": "2021-12-11T14:27:22.316Z",
        "latitude": 30.264604,
        "listedDate": "2021-08-19T17:40:26.253Z",
        "longitude": -97.744431,
        "price": 4949000,
        "propertyType": "Condo",
        "rawAddress": "200 Congress Ave Unit 48QS, Austin, Texas 78701",
        "removedDate": null,
        "squareFootage": 3120,
        "state": "TX",
        "status": "Active",
        "zipCode": "78701"
    },
    {
        "addressLine1": "2301 Oak Valley Dr",
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-03T15:33:06.062Z",
        "daysOnMarket": 69,
        "formattedAddress": "2301 Oak Valley Dr, Austin, TX 78748",
        "id": "2301-Oak-Valley-Dr,-Austin,-TX-78748",
        "lastSeen": "2021-12-11T14:27:22.315Z",
        "latitude": 30.171108,
        "listedDate": "2021-10-03T15:33:06.062Z",
        "longitude": -97.827358,
        "price": 4000000,
        "propertyType": "Land",
        "rawAddress": "2301 Oak Valley Dr, Austin, Texas 78748",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78748"
    },
    {
        "addressLine1": "8701 Highway",
        "addressLine2": "290 W",
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-06T15:16:18.390Z",
        "daysOnMarket": 66,
        "formattedAddress": "8701 Highway, 290 W, Austin, TX 78736",
        "id": "8701-Highway,-290-W,-Austin,-TX-78736",
        "lastSeen": "2021-12-11T14:27:22.315Z",
        "latitude": 30.233431,
        "listedDate": "2021-10-06T15:16:18.390Z",
        "longitude": -97.913735,
        "price": 4500000,
        "propertyType": "Land",
        "rawAddress": "8701 Highway 290 W, Austin, Texas 78736",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78736"
    },
    {
        "addressLine1": "3403 Westlake Dr",
        "bathrooms": 4,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-07T15:42:49.997Z",
        "daysOnMarket": 65,
        "formattedAddress": "3403 Westlake Dr, Austin, TX 78746",
        "id": "3403-Westlake-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.315Z",
        "latitude": 30.321201,
        "listedDate": "2021-10-07T15:42:49.997Z",
        "longitude": -97.779055,
        "price": 4000000,
        "propertyType": "Single Family",
        "rawAddress": "3403 Westlake Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 2258,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "4900 N Rim Dr",
        "bedrooms": 0,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-06-16T15:34:33.240Z",
        "daysOnMarket": 178,
        "formattedAddress": "4900 N Rim Dr, Austin, TX 78731",
        "id": "4900-N-Rim-Dr,-Austin,-TX-78731",
        "lastSeen": "2021-12-11T14:27:22.314Z",
        "latitude": 30.376797,
        "listedDate": "2021-06-16T15:34:33.240Z",
        "longitude": -97.767875,
        "price": 4500000,
        "propertyType": "Land",
        "rawAddress": "4900 N Rim Dr, Austin, Texas 78731",
        "removedDate": null,
        "state": "TX",
        "status": "Active",
        "zipCode": "78731"
    },
    {
        "addressLine1": "2204 Lakeshore Dr",
        "bathrooms": 4,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-12-02T14:58:06.910Z",
        "daysOnMarket": 9,
        "formattedAddress": "2204 Lakeshore Dr, Austin, TX 78746",
        "id": "2204-Lakeshore-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:22.314Z",
        "latitude": 30.3031,
        "listedDate": "2021-12-02T14:58:06.910Z",
        "longitude": -97.786542,
        "price": 4350000,
        "propertyType": "Single Family",
        "rawAddress": "2204 Lakeshore Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 3540,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "1900 Forest Trl",
        "bathrooms": 4.5,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-12-10T14:04:23.771Z",
        "daysOnMarket": 2,
        "formattedAddress": "1900 Forest Trl, Austin, TX 78703",
        "id": "1900-Forest-Trl,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:22.313Z",
        "latitude": 30.293048,
        "listedDate": "2021-12-10T14:04:23.771Z",
        "longitude": -97.768045,
        "price": 4395000,
        "propertyType": "Single Family",
        "rawAddress": "1900 Forest Trl, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 3800,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "2006 Indian Trl",
        "bathrooms": 4.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2020-09-24T21:43:24.914Z",
        "daysOnMarket": 443,
        "formattedAddress": "2006 Indian Trl, Austin, TX 78703",
        "id": "2006-Indian-Trl,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:10.761Z",
        "latitude": 30.294133,
        "listedDate": "2020-09-24T21:43:24.914Z",
        "longitude": -97.760906,
        "price": 3750000,
        "propertyType": "Single Family",
        "rawAddress": "2006 Indian Trl, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 5230,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "4001 Tejon Cir",
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-09-08T15:32:31.910Z",
        "daysOnMarket": 94,
        "formattedAddress": "4001 Tejon Cir, Austin, TX 78734",
        "id": "4001-Tejon-Cir,-Austin,-TX-78734",
        "lastSeen": "2021-12-11T14:27:10.761Z",
        "latitude": 30.400934,
        "listedDate": "2021-09-08T15:32:31.910Z",
        "longitude": -97.929445,
        "price": 3750000,
        "propertyType": "Single Family",
        "rawAddress": "4001 Tejon Cir, Austin, Texas 78734",
        "removedDate": null,
        "squareFootage": 5400,
        "state": "TX",
        "status": "Active",
        "zipCode": "78734"
    },
    {
        "addressLine1": "908 Castle Ridge Rd",
        "bathrooms": 4,
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-30T15:14:38.599Z",
        "daysOnMarket": 42,
        "formattedAddress": "908 Castle Ridge Rd, Austin, TX 78746",
        "id": "908-Castle-Ridge-Rd,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:10.761Z",
        "latitude": 30.2931,
        "listedDate": "2021-10-30T15:14:38.599Z",
        "longitude": -97.837915,
        "price": 3750000,
        "propertyType": "Single Family",
        "rawAddress": "908 Castle Ridge Rd, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 4481,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    },
    {
        "addressLine1": "1631 Palma Plz",
        "bathrooms": 5.5,
        "bedrooms": 6,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-04-18T14:54:16.932Z",
        "daysOnMarket": 237,
        "formattedAddress": "1631 Palma Plz, Austin, TX 78703",
        "id": "1631-Palma-Plz,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:10.760Z",
        "latitude": 30.282342,
        "listedDate": "2021-04-18T14:54:16.932Z",
        "longitude": -97.76084,
        "price": 3790000,
        "propertyType": "Single Family",
        "rawAddress": "1631 Palma Plz, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 5043,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "555 E 5th St",
        "addressLine2": "Apt 3022",
        "bathrooms": 2.5,
        "bedrooms": 3,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-08-19T17:40:26.247Z",
        "daysOnMarket": 114,
        "formattedAddress": "555 E 5th St, Apt 3022, Austin, TX 78701",
        "id": "555-E-5th-St,-Apt-3022,-Austin,-TX-78701",
        "lastSeen": "2021-12-11T14:27:10.760Z",
        "latitude": 30.265377,
        "listedDate": "2021-08-19T17:40:26.247Z",
        "longitude": -97.737817,
        "price": 3990000,
        "propertyType": "Condo",
        "rawAddress": "555 E 5th St Apt 3022, Austin, Texas 78701",
        "removedDate": null,
        "squareFootage": 3638,
        "state": "TX",
        "status": "Active",
        "zipCode": "78701"
    },
    {
        "addressLine1": "2207 Sunny Slope Dr",
        "bathrooms": 4.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-05T15:23:35.804Z",
        "daysOnMarket": 67,
        "formattedAddress": "2207 Sunny Slope Dr, Austin, TX 78703",
        "id": "2207-Sunny-Slope-Dr,-Austin,-TX-78703",
        "lastSeen": "2021-12-11T14:27:10.760Z",
        "latitude": 30.298459,
        "listedDate": "2021-10-05T15:23:35.804Z",
        "longitude": -97.761179,
        "price": 3895000,
        "propertyType": "Single Family",
        "rawAddress": "2207 Sunny Slope Dr, Austin, Texas 78703",
        "removedDate": null,
        "squareFootage": 3336,
        "state": "TX",
        "status": "Active",
        "zipCode": "78703"
    },
    {
        "addressLine1": "10505 Dessau Rd",
        "bedrooms": 4,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-10-27T14:52:02.408Z",
        "daysOnMarket": 45,
        "formattedAddress": "10505 Dessau Rd, Austin, TX 78754",
        "id": "10505-Dessau-Rd,-Austin,-TX-78754",
        "lastSeen": "2021-12-11T14:27:10.760Z",
        "latitude": 30.363599,
        "listedDate": "2021-10-27T14:52:02.408Z",
        "longitude": -97.667033,
        "price": 3800000,
        "propertyType": "Single Family",
        "rawAddress": "10505 Dessau Rd, Austin, Texas 78754",
        "removedDate": null,
        "squareFootage": 2855,
        "state": "TX",
        "status": "Active",
        "zipCode": "78754"
    },
    {
        "addressLine1": "204 Westbrook Dr",
        "bathrooms": 3.5,
        "bedrooms": 5,
        "city": "Austin",
        "county": "Travis County",
        "createdDate": "2021-11-02T15:13:58.898Z",
        "daysOnMarket": 39,
        "formattedAddress": "204 Westbrook Dr, Austin, TX 78746",
        "id": "204-Westbrook-Dr,-Austin,-TX-78746",
        "lastSeen": "2021-12-11T14:27:10.760Z",
        "latitude": 30.279396,
        "listedDate": "2021-11-02T15:13:58.898Z",
        "longitude": -97.802694,
        "price": 3750000,
        "propertyType": "Single Family",
        "rawAddress": "204 Westbrook Dr, Austin, Texas 78746",
        "removedDate": null,
        "squareFootage": 3493,
        "state": "TX",
        "status": "Active",
        "zipCode": "78746"
    }
]


export const fakeYelp = [
    {
        "alias": "terry-blacks-barbecue-austin",
        "categories": [
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "southern",
                "title": "Southern"
            }
        ],
        "coordinates": {
            "latitude": 30.2596915716907,
            "longitude": -97.7548013627529
        },
        "display_phone": "(512) 394-5899",
        "distance": 11553.108800046708,
        "id": "YZs1gNSh_sN8JmN_nrpxeA",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/NqTsfecFmAjXoiLcNm1IDA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1003 Barton Springs Rd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1003 Barton Springs Rd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Terry Black's Barbecue",
        "phone": "+15123945899",
        "price": "$$",
        "rating": 4.5,
        "review_count": 4206,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/terry-blacks-barbecue-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "the-grove-wine-bar-and-kitchen-austin-6",
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "wine_bars",
                "title": "Wine Bars"
            },
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "coordinates": {
            "latitude": 30.2963184857946,
            "longitude": -97.8328549861908
        },
        "display_phone": "(512) 327-8822",
        "distance": 3234.9854553875266,
        "id": "v87I5i4XxiCr9Ihiqkbc4A",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/r97-fehk8PlY3hu4oknPCQ/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "6317 Bee Caves Rd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "6317 Bee Caves Rd",
                "Austin, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "The Grove Wine Bar & Kitchen",
        "phone": "+15123278822",
        "price": "$$",
        "rating": 4.0,
        "review_count": 536,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/the-grove-wine-bar-and-kitchen-austin-6?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "rudys-country-store-and-bar-b-q-austin-11",
        "categories": [
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "servicestations",
                "title": "Gas Stations"
            },
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            }
        ],
        "coordinates": {
            "latitude": 30.263580174323412,
            "longitude": -97.81549841165543
        },
        "display_phone": "(512) 329-5554",
        "distance": 7196.484371916723,
        "id": "ih_MxWyh3OswxzG857v6TQ",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/3lXzraIKWWda1AMatUk7jQ/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "2451 S Capital Of Texas Hwy",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "2451 S Capital Of Texas Hwy",
                "Austin, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "Rudy's \"Country Store\" and Bar-B-Q",
        "phone": "+15123295554",
        "price": "$$",
        "rating": 4.5,
        "review_count": 1109,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/rudys-country-store-and-bar-b-q-austin-11?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "uchi-austin",
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "beer_and_wine",
                "title": "Beer, Wine & Spirits"
            }
        ],
        "coordinates": {
            "latitude": 30.257515,
            "longitude": -97.759806
        },
        "display_phone": "(512) 916-4808",
        "distance": 11311.92392654773,
        "id": "zFaHweOJ40jjtvpGTjlspw",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/WITXPKAHT0HyF3zzBjZNgA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "801 South Lamar Blvd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "801 South Lamar Blvd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Uchi",
        "phone": "+15129164808",
        "price": "$$$$",
        "rating": 4.5,
        "review_count": 2566,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/uchi-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "jack-allens-kitchen-austin-18",
        "categories": [
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "coordinates": {
            "latitude": 30.3352434572574,
            "longitude": -97.8075081023773
        },
        "display_phone": "(512) 351-9399",
        "distance": 4717.370114462142,
        "id": "GbsVsvABa4d3tDJRJdRs-Q",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/A0_1xxx25wo3j18Edim4pQ/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "3600 North Capital Of Texas Hwy",
            "address2": "Bldg D",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "3600 North Capital Of Texas Hwy",
                "Bldg D",
                "Austin, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "Jack Allen's Kitchen",
        "phone": "+15123519399",
        "price": "$$",
        "rating": 4.5,
        "review_count": 513,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/jack-allens-kitchen-austin-18?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "bouldin-creek-cafe-austin",
        "categories": [
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            }
        ],
        "coordinates": {
            "latitude": 30.24646,
            "longitude": -97.75677
        },
        "display_phone": "(512) 416-1601",
        "distance": 12311.61735511937,
        "id": "qkpTiGcJbkNKgmCj4rmkkQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZuEhze5y8wik4ch0P7h3pw/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1900 S 1st St",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1900 S 1st St",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Bouldin Creek Cafe",
        "phone": "+15124161601",
        "price": "$$",
        "rating": 4.5,
        "review_count": 2398,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/bouldin-creek-cafe-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "river-place-nature-trail-austin",
        "categories": [
            {
                "alias": "hiking",
                "title": "Hiking"
            }
        ],
        "coordinates": {
            "latitude": 30.3568713628854,
            "longitude": -97.8643355778104
        },
        "display_phone": "",
        "distance": 4287.890358934192,
        "id": "88kosdu9NbLZnHrioyPSGg",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8ItaYzkiTJ5EucbUeIksQQ/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "8830 Big View Dr",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "8830 Big View Dr",
                "Austin, TX 78730"
            ],
            "state": "TX",
            "zip_code": "78730"
        },
        "name": "River Place Nature Trail",
        "phone": "",
        "rating": 4.5,
        "review_count": 208,
        "transactions": [],
        "url": "https://www.yelp.com/biz/river-place-nature-trail-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "civil-goat-coffee-co-austin-2",
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "coordinates": {
            "latitude": 30.3320877902815,
            "longitude": -97.868966248946
        },
        "display_phone": "(512) 792-9929",
        "distance": 2061.2458898420487,
        "id": "BdnhQ8TSNrJpaG89CFf-KQ",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fXkmLtWoFfGQXU6EO4F2Og/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "704 Cuernavaca Dr N",
            "address2": "",
            "address3": null,
            "city": "Austin",
            "country": "US",
            "display_address": [
                "704 Cuernavaca Dr N",
                "Austin, TX 78733"
            ],
            "state": "TX",
            "zip_code": "78733"
        },
        "name": "Civil Goat Coffee Co",
        "phone": "+15127929929",
        "price": "$",
        "rating": 4.5,
        "review_count": 97,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/civil-goat-coffee-co-austin-2?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "mozarts-coffee-roasters-austin",
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "coordinates": {
            "latitude": 30.2955449740542,
            "longitude": -97.7841031551361
        },
        "display_phone": "(512) 477-2900",
        "distance": 7146.251583252287,
        "id": "-4ofMtrD7pSpZIX5pnDkig",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/p9KGLo-nOh_bEFd0qFqWPA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "3825 Lake Austin Blvd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "3825 Lake Austin Blvd",
                "Austin, TX 78703"
            ],
            "state": "TX",
            "zip_code": "78703"
        },
        "name": "Mozart's Coffee Roasters",
        "phone": "+15124772900",
        "price": "$$",
        "rating": 4.0,
        "review_count": 1565,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/mozarts-coffee-roasters-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "jack-allens-kitchen-austin-17",
        "categories": [
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "coordinates": {
            "latitude": 30.243592,
            "longitude": -97.882608
        },
        "display_phone": "(512) 852-8558",
        "distance": 8906.112314551101,
        "id": "XmcJuedxXv8Lh1MufHgOnA",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UUg6mrCvgg0m6vySZ8kOOg/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "7720 Highway 71 W",
            "address2": null,
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "7720 Highway 71 W",
                "Austin, TX 78735"
            ],
            "state": "TX",
            "zip_code": "78735"
        },
        "name": "Jack Allen's Kitchen",
        "phone": "+15128528558",
        "price": "$$",
        "rating": 4.5,
        "review_count": 1736,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/jack-allens-kitchen-austin-17?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "odd-duck-austin-2",
        "categories": [
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "coordinates": {
            "latitude": 30.25452,
            "longitude": -97.762064
        },
        "display_phone": "(512) 433-6521",
        "distance": 11347.982591424483,
        "id": "uPWJtYJi76EniU0xrX-zbA",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Eltv5PKB6BHevRHvKHeL_w/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1201 S Lamar Blvd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1201 S Lamar Blvd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Odd Duck",
        "phone": "+15124336521",
        "price": "$$$",
        "rating": 4.5,
        "review_count": 1853,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/odd-duck-austin-2?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "the-county-line-austin",
        "categories": [
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "catering",
                "title": "Caterers"
            }
        ],
        "coordinates": {
            "latitude": 30.2976233367595,
            "longitude": -97.8359489609215
        },
        "display_phone": "(512) 327-1742",
        "distance": 2943.994649511079,
        "id": "-BBSLCjzw3i2PHuwJ_dabA",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7pwVWZ413YcalqtfcUbNwA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "6500 W Bee Cave Rd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "6500 W Bee Cave Rd",
                "Austin, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "The County Line",
        "phone": "+15123271742",
        "price": "$$",
        "rating": 3.5,
        "review_count": 493,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/the-county-line-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "phoebes-diner-austin",
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "diners",
                "title": "Diners"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "coordinates": {
            "latitude": 30.2416132,
            "longitude": -97.7588755
        },
        "display_phone": "(512) 643-3218",
        "distance": 12509.654655257546,
        "id": "KEh3efWSOIzd8BvuW-X4-g",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6repZ0-yjGwZPHIZLAgMXA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "533 W Oltorf St",
            "address2": "",
            "address3": null,
            "city": "Austin",
            "country": "US",
            "display_address": [
                "533 W Oltorf St",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Phoebe's Diner",
        "phone": "+15126433218",
        "price": "$$",
        "rating": 4.5,
        "review_count": 1216,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/phoebes-diner-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "lick-honest-ice-creams-austin-3",
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 30.2556546727507,
            "longitude": -97.7627457002276
        },
        "display_phone": "(512) 363-5622",
        "distance": 11217.250505762466,
        "id": "MFVr6pMQxFsUwdEfUueaCQ",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/WcDZSc0kAZUMFpiSMdu2yg/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1100 S Lamar Blvd",
            "address2": "Ste 1135",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1100 S Lamar Blvd",
                "Ste 1135",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Lick Honest Ice Creams",
        "phone": "+15123635622",
        "price": "$$",
        "rating": 4.5,
        "review_count": 1330,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/lick-honest-ice-creams-austin-3?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "texas-honey-ham-company-west-lake-hills",
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "coordinates": {
            "latitude": 30.280861,
            "longitude": -97.807227
        },
        "display_phone": "(512) 330-9888",
        "distance": 6159.734778811621,
        "id": "pATn0K6yFj-_F4pjc9qnjQ",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wTQ4JDgzlwa7vETKTmQlXQ/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "3736 Bee Cave Rd",
            "address2": "Ste 6",
            "address3": "",
            "city": "West Lake Hills",
            "country": "US",
            "display_address": [
                "3736 Bee Cave Rd",
                "Ste 6",
                "West Lake Hills, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "Texas Honey Ham Company",
        "phone": "+15123309888",
        "price": "$",
        "rating": 4.5,
        "review_count": 310,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/texas-honey-ham-company-west-lake-hills?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "ramen-tatsu-ya-austin-2",
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 30.253899793553,
            "longitude": -97.7631825953722
        },
        "display_phone": "(512) 893-5561",
        "distance": 11309.800008176619,
        "id": "uwFa-pTQL1Rv4nULoIraNw",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/rNrHEySUxTIIXbft3SkF0A/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1234 S Lamar Blvd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1234 S Lamar Blvd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Ramen Tatsu-Ya",
        "phone": "+15128935561",
        "price": "$$",
        "rating": 4.0,
        "review_count": 1835,
        "transactions": [],
        "url": "https://www.yelp.com/biz/ramen-tatsu-ya-austin-2?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "gourdoughs-public-house-austin",
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            }
        ],
        "coordinates": {
            "latitude": 30.245382,
            "longitude": -97.780437
        },
        "display_phone": "(512) 912-9070",
        "distance": 10805.29054958918,
        "id": "oug5bLTWP_YTtj1C3_X6Xw",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rW1qKW2AXVMJjnyx--Wfbw/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "2700 S Lamar Blvd",
            "address2": "",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "2700 S Lamar Blvd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Gourdough's Public House",
        "phone": "+15129129070",
        "price": "$$",
        "rating": 4.0,
        "review_count": 1636,
        "transactions": [
            "delivery",
            "pickup"
        ],
        "url": "https://www.yelp.com/biz/gourdoughs-public-house-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "tacodeli-austin-3",
        "categories": [
            {
                "alias": "catering",
                "title": "Caterers"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "tacos",
                "title": "Tacos"
            }
        ],
        "coordinates": {
            "latitude": 30.25827,
            "longitude": -97.78747
        },
        "display_phone": "(512) 732-0303",
        "distance": 9260.816584669614,
        "id": "-qjkQHH-5O8BAztc6udOuw",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/a39n7D2YoU-65ErItDAFaA/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "1500 Spyglass Dr",
            "address2": "Ste B",
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "1500 Spyglass Dr",
                "Ste B",
                "Austin, TX 78746"
            ],
            "state": "TX",
            "zip_code": "78746"
        },
        "name": "Tacodeli",
        "phone": "+15127320303",
        "price": "$",
        "rating": 4.5,
        "review_count": 1062,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/tacodeli-austin-3?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "mount-bonnell-austin",
        "categories": [
            {
                "alias": "hiking",
                "title": "Hiking"
            },
            {
                "alias": "parks",
                "title": "Parks"
            }
        ],
        "coordinates": {
            "latitude": 30.32104,
            "longitude": -97.7735299
        },
        "display_phone": "(512) 974-6700",
        "distance": 7672.244047466084,
        "id": "8ygBj0DQu5U_lIOc0iUUEQ",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ICmh_vOqJKtS5MZaXJZmVw/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "3800 Mt Bonnell Rd",
            "address2": null,
            "address3": "",
            "city": "Austin",
            "country": "US",
            "display_address": [
                "3800 Mt Bonnell Rd",
                "Austin, TX 78731"
            ],
            "state": "TX",
            "zip_code": "78731"
        },
        "name": "Mount Bonnell",
        "phone": "+15129746700",
        "rating": 4.5,
        "review_count": 431,
        "transactions": [],
        "url": "https://www.yelp.com/biz/mount-bonnell-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    },
    {
        "alias": "loro-austin",
        "categories": [
            {
                "alias": "smokehouse",
                "title": "Smokehouse"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "coordinates": {
            "latitude": 30.24775,
            "longitude": -97.77127
        },
        "display_phone": "(512) 916-4858",
        "distance": 11201.233296212713,
        "id": "He2KYtXXfaIR0nkCXH5xiQ",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JW3BbE09Ja56TIqDZvu5kg/o.jpg",
        "is_closed": false,
        "location": {
            "address1": "2115 S Lamar Blvd",
            "address2": "",
            "address3": null,
            "city": "Austin",
            "country": "US",
            "display_address": [
                "2115 S Lamar Blvd",
                "Austin, TX 78704"
            ],
            "state": "TX",
            "zip_code": "78704"
        },
        "name": "Loro",
        "phone": "+15129164858",
        "price": "$$",
        "rating": 4.0,
        "review_count": 1396,
        "transactions": [
            "delivery"
        ],
        "url": "https://www.yelp.com/biz/loro-austin?adjust_creative=D5ybL7axhrxLChvXYQnJKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D5ybL7axhrxLChvXYQnJKQ"
    }
]