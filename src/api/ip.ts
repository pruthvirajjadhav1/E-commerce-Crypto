import axios from 'axios'

export const getIpDetails = async () => {
    var url = `https://www.cloudflare.com/cdn-cgi/trace`
    
    const res = await axios.get(url)
    const data = res.data
        //data returns a string with ip, ts & other 
        //details, getting the index of ip to calc
        //the ip address.
    var ip = data.indexOf('ip')
    var ts = data.indexOf('ts')
    var ip_address = data.slice(ip + 3, ts - 1)
    console.log(typeof ip_address)
    console.log(ip_address)
    
    return ip_address
}