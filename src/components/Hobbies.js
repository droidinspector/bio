import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Hobbies.css';

const images = [
  {
    original: 'https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg',
  },
  {
    original: 'https://cutewallpaper.org/23/anime-compilation-wallpaper/95632834.jpg',
  },
  {
    original: 'https://wallpaperaccess.com/full/2256612.jpg',
  },
];

function Hobbies() {
  return (
    <section className="section-hobbies">
      <ImageGallery items={images} />;
    </section>
  );
}

export default Hobbies;
