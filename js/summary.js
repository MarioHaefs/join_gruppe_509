function greet() {
    currentlyDate = new Date();
    curentlyHour = currentlyDate.getHours();
    if(curentlyHour >= 3 && curentlyHour < 12) document.getElementById('hallo').innerHTML =`Good Morning,`;
    if(curentlyHour >= 12 && curentlyHour < 18) document.getElementById('hallo').innerHTML =`Good afternoon,`;
    if(curentlyHour >= 18) document.getElementById('hallo').innerHTML =`Good evening,`;
    if(curentlyHour >= 0 && curentlyHour < 3) document.getElementById('hallo').innerHTML =`Good evening,`;
};