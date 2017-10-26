import Typography from 'typography';
import annes from 'typography-theme-st-annes';

const typography = new Typography(
  Object.assign(annes, {
    baseFontSize: '18px'
  })
);

export default typography;
