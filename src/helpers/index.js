/* eslint-disable prettier/prettier */
const formatearFecha = dia => {
  const nuevaFecha = new Date(dia);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return nuevaFecha.toLocaleDateString('es-ES', opciones);
};

export default formatearFecha;
