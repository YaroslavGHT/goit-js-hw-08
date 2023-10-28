// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const list = document.querySelector('.gallery');

function createMarkup(images) {
    images.forEach(({ description, original, preview }) => {
      const listItem = document.createElement('li');
      listItem.classList.add('gallery__item');
      
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = preview;
      image.alt = description;
  
      link.appendChild(image);
      listItem.appendChild(link);
      list.appendChild(listItem);
    });
}
  
createMarkup(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom'});

