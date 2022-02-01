const $div = document.getElementById("my-div");
const $id = document.querySelector(".ip");
const $lat = document.querySelector(".lat");
const $city = document.querySelector(".city");
const $country = document.querySelector(".country");
const $internet = document.querySelector(".internet");
const $postal = document.querySelector(".postal");
const $region = document.querySelector(".region");
const $zone = document.querySelector(".zone");


async function getIpClient() {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      console.log(response.data);
      const data = response.data;
      $id.textContent=data.ip;
      $lat.textContent=data.loc;
      $city.textContent=data.city;
      $country.textContent=data.country;
      $internet.textContent=data.org;
      $postal.textContent=data.postal;
      $region.textContent=data.region;
      $zone.textContent=data.timezone;

     
       
    } catch (error) {
      console.error(error);
    }
}
  


document.addEventListener("DOMContentLoaded",(e)=>{
    getIpClient();
});