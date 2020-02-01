import _ from 'lodash';
import './style.css';
import Icon from './favicon.png';
import Data from './data.xml';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const image = new Image();
    image.src = Icon;

    element.appendChild(image);
    
    console.log(Data);
    

    return element;
  }
  
  document.body.appendChild(component());