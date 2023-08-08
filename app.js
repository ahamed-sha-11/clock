setInterval(setClock , 1000)

const sechand = document.querySelector('.sec');
const minhand = document.querySelector('.mins');
const hourhand = document.querySelector('.hour');

function setClock()
{
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const mins = ( seconds + currentDate.getMinutes()) / 60;
    const hours = ( mins + currentDate.getHours() ) / 12;
    rotate(sechand, seconds);
    rotate(minhand, mins);
    rotate(hourhand, hours);

}

function rotate( element, rotationratio )
{
    element.style.setProperty('--rotation',rotationratio*360+"deg");
}

setClock();