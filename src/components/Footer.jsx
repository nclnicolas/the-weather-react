import { Link } from '@mui/material';
import React from 'react'
import style from '../styles/footer.module.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

  return (
    <div className={style.container}>
        <div className={style.contain}>
            <p>Todos los derechos reservados {new Date().getFullYear()}.</p>

            <Link href='./'>Inicio</Link>
            <Link href='./nosotros'>Nosotros</Link>
        </div>
        
    </div>
  )
}

export default Footer