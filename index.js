const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add("show");
      }else{
          entry.target.classList.remove("show");
      }

    });

});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function(element){ observer.observe(element)});

const findMyLocation = () => {

    const location = document.querySelector(".location");

    const success = async (position) =>{
       console.log(position);
       const userLatitude= position.coords.latitude;
       const userLongitude= position.coords.longitude;
       location.innerHTML= "Your location is: Latitude : " + userLatitude +" , Longitude : " + userLongitude;
       usrLat= userLatitude;
       usrLng= userLongitude;

       initMap(usrLat, usrLng)
    }

    const error = () =>{
       location.innerHTML = "UNABLE TO RETIEVE YOUR LOCATION";
    }
    navigator.geolocation.getCurrentPosition(success,error);

}
document.querySelector(".geolocation").addEventListener("click",findMyLocation);


const initMap = (latitude, longitude) => {
    const userLocation = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: userLocation,
    });
    // The marker, positioned at userLocation
    const marker = new google.maps.Marker({
      position: userLocation,
      map: map,
    });
  }
  window.initMap = initMap;
