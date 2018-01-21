import Typography from 'typography';
import annes from 'typography-theme-st-annes';

const typography = new Typography(
  Object.assign(annes, {
    baseFontSize: '18px',
    headerFontFamily: ['Amatic Sc', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    googleFonts: [
      {
        name: 'Amatic SC',
        styles: ['400', '700']
      },
      {
        name: 'Open Sans',
        styles: ['200', '300', '400', '600', '700', '800']
      }
    ]
  })
);

export default typography;
