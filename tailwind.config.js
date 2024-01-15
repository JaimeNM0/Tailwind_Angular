/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      phone: '360px',
      tablet: '768px',
      desktop: '1024px',
    },
    color: {
      verdeClaro: '#48a45e',
      verdePuro: '#00913f',
      verdeOscuro: '#008130',
      rojoClaro: '#ff3b1f',
      rojoPuro: '#ff0000',
      rojoOscuro: '#c3292e',
    },
    fontFamily: {
      fontSans: ['sans-serif', 'Graphik'],
      fontSerif: ['serif', 'Merriweather'],
      fontMonospace: ['monospace', 'Arial'],
    },
    /*fontSize: {
      titulo: '14px',
      enlace: '18px',
      textoInput: '24px',
    },*/
    extend: {},
  },
  plugins: [],
}
