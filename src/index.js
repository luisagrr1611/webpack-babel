import { suma, saludo } from "./operaciones";
import Swal from 'sweetalert2';


document.write(`<h1>${suma(1,2)} </h1>`)

console.log(suma(1,2));
console.log(saludo);

Swal.fire({
  title: 'Luis Daniel Baca Aguirre',
  width: 600,
  padding: '3em',
  background: '#fff url(https://media4.giphy.com/media/sIIhZliB2McAo/giphy.gif?cid=790b76111eb66a4d39ff04d26a89b2154a87de8a8eb6da31&rid=giphy.gif&ct=g)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
}); 

/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */