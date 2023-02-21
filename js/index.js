function imprimir(){
    window.print('');
}

/*API Random User Generator y modificación de datos en HTML*/
let url = "https://randomuser.me/api/?inc=gender,dob,name,email,phone,picture,phone,location,nat&nat=us&gender=male&noinfo&results=1"

fetch(url)
    .then(Response => Response.json())
    .then(json => {
        let data = json.results[0];
        let nombre = (`${data.name.first} ${data.name.last}`);
        let location = (`${data.location.city}, ${data.location.state}`);
        document.getElementById("nombre").innerHTML = (`${nombre}`);
        document.getElementById("fotocv").src = data.picture.large;
        document.getElementById("mail").innerHTML += (data.email);
        document.getElementById("telefono").innerHTML += (data.phone);
        document.getElementById("ubicacion").innerHTML += (location);
    });