import getPhotoUrl from "get-photo-url";
import { useState } from "react";

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([]);

  // If what we only need is to add photos, we can just use array of strings, instead of array of objects.
  // We wantto be able to delete photos that's why we are giving each photo an id.
  const addPhoto = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    };
    setAllPhotos([newPhoto, ...allPhotos]);
  };
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i classsName="add-photo-button fas fa-plus-square" />
      </label>
      <section className="gallery">
        {allPhotos.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} className="item-image" alt="" />
            <button className="delete-button">Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
