import Smooth from '../components/Smooth';
import { Home } from './landing';
import { Marquee } from './marquee';
import Navbar from './nav';
import Thumbmotion from './thumbmotion';
import { ScrollCanvas } from './work';

let words = document.querySelectorAll('.word');
words.forEach((word) => new Home(word));

let elements = document.querySelectorAll('.js-plane');
elements.forEach((el) => new ScrollCanvas(el));

new Navbar();
new Marquee();
new Smooth();
