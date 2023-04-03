import React from 'react'
import style from '../styles/nosotros.module.css';
import Nosotros from '../img/nosotros.webp';

const nosotros = () => {
  return (
    <>
    <div className={style.title}>
      <h1>Conocenos</h1>
    </div>
    <div className={style.contain}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies,
      lacus a malesuada pharetra, lorem nulla semper velit, non aliquam lectus
      lorem et ligula. Duis hendrerit purus hendrerit, venenatis turpis quis,
      efficitur mauris. Donec nec blandit neque, a vestibulum neque. Proin vitae
      egestas odio, nec semper felis. Phasellus at sollicitudin dui. Integer non
      lacus tincidunt, luctus nibh ut, pretium odio. Quisque et est consequat,
      varius ex vitae, gravida augue. Donec at finibus augue, ac efficitur leo.
      Cras arcu leo, lacinia vitae dignissim id, varius vitae erat. Quisque
      vestibulum ligula ut tempor gravida. Fusce ac tellus ultrices, viverra
      ante quis, lacinia lectus. Curabitur sed urna interdum ante sollicitudin
      blandit. Ut luctus suscipit elit, quis blandit ipsum mattis mollis. Donec
      tempor bibendum luctus. Morbi pretium sit amet massa in ornare. Aliquam
      imperdiet ut augue ut luctus. Aliquam non ultricies sapien. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Duis porttitor posuere finibus. Ut hendrerit hendrerit mauris.
      </p>
      <p>
      Aliquam at lorem velit. Mauris dapibus urna vel enim varius, nec tincidunt
      felis tincidunt. Curabitur malesuada ac tellus volutpat maximus. Proin
      fringilla vel magna ornare luctus. Donec porta efficitur lorem, nec
      faucibus lacus interdum a. Suspendisse potenti. Aliquam vestibulum
      malesuada cursus. Pellentesque habitant morbi tristique senectus et netus
      et malesuada fames ac turpis egestas. Sed sem orci, tristique vitae lectus
      sed, commodo pellentesque ipsum. Quisque dignissim elementum aliquam.
      Vivamus nisi magna, gravida sed felis nec, auctor venenatis sapien. Aenean
      posuere rutrum lacus vel ullamcorper. Integer non neque vestibulum,
      accumsan ligula ac, aliquet tortor. Vestibulum non bibendum neque, sodales
      rhoncus mauris. 
      </p>
    </div>

    <div className={style.image}>
    <img src={Nosotros} alt="Nosotros Compania" />
    </div>
    
    </>
  )
}

export default nosotros