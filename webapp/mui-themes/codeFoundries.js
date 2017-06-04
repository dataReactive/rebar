// @flow

import {
  darkBlack,
  grey100,
  grey300,
  grey400,
  grey500,
  fullBlack,
  indigo300,
  blue600,
  lightBlue900,
  indigo400,
  redA700,
  white,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue600,
    primary2Color: lightBlue900,
    primary3Color: grey400,
    accent1Color: redA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: indigo300,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    backCanvas: {
      viewportBackgroundColor: grey100,
      navDrawerBoxShadow: false,
    },
  },
  avatar: {
    borderColor: white,
  },
}
