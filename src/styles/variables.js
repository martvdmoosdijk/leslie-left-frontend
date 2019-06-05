export const PRIMARY_COLOR = '#FFFFFF';
export const BACKGROUND_COLOR = '#C4C4C4';

export const FONT_FAMILY_LATO = '\'Lato\', cursive';

// export const MQ_PHABLET = 450;
export const TABLET_BP = 760;
export const LAPTOP_BP = 960;

export const isTablet = () => window.innerWidth >= TABLET_BP;
export const isLaptop = () => window.innerWidth >= LAPTOP_BP;

export default {
  PRIMARY_COLOR,
  FONT_FAMILY_LATO,
};
