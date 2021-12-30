const axios = require('axios').default;
    
export const PeticionHttpGift = async( Category ) => {
    const Response = await axios.get(`Https://api.giphy.com/v1/gifs/search?api_key=RzSbCmEclonPqDqEgs1m9uVR0x59Opwo&limit=10&q=${ encodeURI ( Category )}`)
    const Gifts = Response.data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return Gifts;     

}