import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

const vars: Partial<GlobalTheme['common']> = {
  fontFamily: "'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif !important",
  primaryColor: '#2681ff',
  primaryColorHover: '#409fff',
  primaryColorPressed: '#2681ff',

  errorColor: '#f15532',
  warningColor: '#f27a24',
  infoColor: '#90a0ae',
  successColor: '#50e3c2',

  textColor1: '#bcc9d4',

  borderColor: '#3a4659',
  borderRadius: '0',
  borderRadiusSmall: '0',

  boxShadow1: 'none',
  boxShadow2: 'none',
  boxShadow3: 'none',
}

const vars2 = {
  darkColor: '#262c33',
  guiPrimaryColor: '#2483ff',
  guiComponentBgColor: '#262c33',
  guiComponentBgColorDark: '#262c33',
  guiComponentBgColorHover: '#303640',
  guiComponentBgColorActive: '#262b33',
  guiComponentBgColorDisabled: '#13161a',
  guiFontColor: '#a1aeb3',
  borderColor: '#0b0c0d',
  border: '1px solid #0b0c0d',
  borderPrimary: '1px solid #2681ff',
}

const themeOverrides: GlobalThemeOverrides = {
  common: {
    ...vars,
  },
  Button: { // small 和 medium 一样大
    fontWeight: '700',
    fontWeightText: '700',
    fontWeighGhost: '700',

    iconSizeTiny: '12px',

    heightTiny: '26px',
    heightSmall: '32px',
    heightMedium: '32px',

    paddingTiny: '0 15px',
    paddingSmall: '0 24px',
    paddingMedium: '0 24px',

    color: '#0000',
    colorHover: vars.primaryColorHover,
    colorPressed: vars.primaryColorPressed,
    colorFocus: vars.primaryColor,

    colorFocusPrimary: vars.primaryColor,

    border: `1px solid ${vars.primaryColor}`,
    borderHover: `1px solid ${vars.primaryColorHover}`,
    borderPressed: `1px solid ${vars.primaryColorPressed}`,
    borderFocus: `1px solid ${vars.primaryColor}`,

    borderFocusPrimary: `1px solid ${vars.primaryColor}`,

    textColor: vars.primaryColor,
    textColorHover: '#fff',
    textColorPressed: '#fff',
    textColorFocus: '#fff',

    textColorGhost: vars.primaryColor,
    textColorGhostHover: '#fff',
    textColorGhostPressed: '#fff',
    textColorGhostFocus: vars.primaryColor,
  },
  Message: {
    minWidth: '380px',
    padding: '15px 15px 15px 20px',
    fontSize: '12px',
    iconSize: '16px',
    borderRadius: '0',
    textColorError: '#fff',
    textColorSuccess: '#fff',
    textColorWarning: '#fff',
    colorError: '#5d2b3e',
    colorSuccess: '#1b3964',
    colorWarning: '#593c27',
    closeMargin: '0',
    closeColorError: '#fff',
    closeColorHoverError: vars.infoColor,
    closeColorSuccess: '#fff',
    closeColorHoverSuccess: vars.infoColor,
    closeColorWarning: '#fff',
    closeColorHoverWarning: vars.infoColor,
  },
  Dialog: {
    color: '#303640',
    padding: '16px 20px',
    textColor: '#fff',
    closeColor: vars.primaryColor,
    closeColorHover: vars.primaryColor,
    closeColorPressed: vars.primaryColor,
    closeMargin: '16px 20px 0 0',
    iconSize: '65px',
    iconColor: '#ff4f43',
    iconMargin: '0 0 10px 0',
    contentMargin: '0 0 10px 0',
  },
  Dropdown: {
    fontSizeMedium: '12px',
    padding: '0',
    borderRadius: '1px',
    color: vars2.darkColor,
    prefixColor: '#fff',
    optionColorHover: '#1a1b1d',
    optionTextColor: '#fff',
    optionTextColorHover: '#fff',
    optionHeightMedium: '30px',
    optionIconSizeMedium: '12px',
    optionIconPrefixWidthMedium: '12px',
    dividerColor: '#1a1b1d',
  },
  Switch: {
    buttonWidthMedium: '10px',
    buttonHeightMedium: '10px',
    buttonWidthPressedMedium: '14px',
    railWidthMedium: '26px',
    railHeightMedium: '12px',

    buttonWidthSmall: '6px',
    buttonHeightSmall: '6px',
    buttonWidthPressedSmall: '8px',
    railWidthSmall: '16px',
    railHeightSmall: '8px',

    railColor: '#0b0c0d',
    railColorActive: vars2.guiPrimaryColor,
    boxShadowFocus: 'none',
  },
  Tooltip: {
    padding: '5px',
    color: vars.primaryColor,
    boxShadow: 'none',
    peers: {
      Popover: {
        fontSize: '12px',
      },
    },
  },
  Slider: {
    handleSize: '9px',
    railHeight: '2px',
    railColor: '#bcc9d4',
  },
  Checkbox: {
    sizeMedium: '14px',
    color: '#0000',
    colorChecked: '#0000',
    checkMarkColor: vars.primaryColor,
    boxShadowFocus: 'none',
  },
  Radio: {
    buttonHeightMedium: '22px',
    buttonTextColor: vars2.guiFontColor,
    buttonTextColorActive: '#fff',
    buttonColor: vars2.darkColor,
    buttonColorActive: vars2.guiPrimaryColor,
    buttonBoxShadow: 'none',
    buttonBoxShadowFocus: 'none',
    buttonBoxShadowHover: 'none',
    buttonBorderColor: vars2.borderColor,
  },
  Input: {
    fontSizeSmall: '12px',
    textColor: vars.textColor1,
    color: vars2.guiComponentBgColor,
    colorFocus: vars2.guiComponentBgColor,
    border: vars2.border,
    borderHover: vars2.borderPrimary,
    borderFocus: vars2.borderPrimary,
    boxShadowFocus: 'none',
    iconColor: vars.textColor1,
    suffixTextColor: vars.textColor1,
  },
  ColorPicker: {
    border: vars2.border,
    color: vars2.guiComponentBgColor,
    panelFontSize: '12px',
    textColor: vars.textColor1,
  },
  Upload: {
    draggerBorder: vars2.border,
    draggerBorderHover: vars2.borderPrimary,
  },
}

export {
  themeOverrides,
}
