import Typography from 'typography';
import annes from 'typography-theme-st-annes';

const typography = new Typography(
  Object.assign(annes, {
    baseFontSize: '16px',
    baseLineHeight: 1.666,
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
    ],
    overrideStyles: () => ({
      h1: {
        fontFamily: ['Amatic Sc', 'sans-serif'].join(',')
      },
      h2: {
        fontFamily: ['Amatic Sc', 'sans-serif'].join(',')
      },
      h3: {
        fontFamily: ['Amatic Sc', 'sans-serif'].join(',')
      },
      a: {
        textDecoration: 'none',
        color: '#000'
      }
    })
  })
);

export default typography;
