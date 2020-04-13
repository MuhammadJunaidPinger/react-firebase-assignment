var foursquare = require('react-foursquare')({
    clientID: 'TWCGCFDQF2RMSQ0PQ1ZUKJ4ODYKPGVPBER3VLCSVWKGQHI24',
    clientSecret: 'NSBTBLB14W1QU3GFZRDMPLF4MDASEXCMCZKU0FSIGRLU4LDS'  
  });

  async function getVenues(areaName) {
    console.log("Query --->", areaName)
    const params = {
      "near" : "Karachi",
      "query": areaName
      }
      const result = await foursquare.venues.getVenues(params)
      return result.response.venues
      // console.log("result--->", result.response.venues);      

  }

  export {
    getVenues,
  }