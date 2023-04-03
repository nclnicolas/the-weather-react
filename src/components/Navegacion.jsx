import React, { useEffect } from "react";
import style from "../styles/navegacion.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";

const Navegacion = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [width, setWidth] = React.useState(window.innerWidth);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Con esto actualizamos el valor del ancho que tiene nuestra pantalla
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth); //window.innerWidth nos permite obtener el ancho de la pantalla
    };

    window.addEventListener("resize", handleWidth); //escucha cada vez que cambie el tamano de la pantalla

    return () => {
      window.removeEventListener("resize", handleWidth); //con esto quitamos el listener una vez que dejemos de usar el hook, asi evitamos que crashee nuestra app
    };
  }, []);

  return (
    <nav>
      {width < 768 ? (
        <div>
          <Button
            id="basic-button"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link href="/">
              <MenuItem onClick={handleClose}>Inicio</MenuItem>
            </Link>
            <Link href="/nosotros">
              <MenuItem onClick={handleClose}>Nosotros</MenuItem>
            </Link>
          </Menu>
        </div>
      ) : (
        <div className={style.largerWidth}>
          <Link href="/">
            Inicio
          </Link>
          <Link
            href="/nosotros"
          >
            Nosotros
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navegacion;
