//import './style.css';
import './style.scss';

const linkMenuCursos = document.querySelector('#menuCursos');
const lstCursos = document.querySelector('.listaCursos');

console.log(linkMenuCursos);
console.log(lstCursos);

linkMenuCursos.addEventListener('mouseenter', function () {
  lstCursos.classList.remove('hidden');
});
