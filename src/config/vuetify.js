import {
  VAutocomplete,
  VTextField,
  VList,
  VDataTable,
  VDataIterator,
  VStepper,
  VExpansionPanel,
  VDialog,
  VTooltip,
  VCheckbox,
  VAlert,
  VChip,
  Ripple,
} from 'vuetify/lib'

export const vuetifyOptions = {
  components: {
    VAutocomplete,
    VTextField,
    VList,
    VDataTable,
    VDataIterator,
    VStepper,
    VExpansionPanel,
    VDialog,
    VTooltip,
    VCheckbox,
    VAlert,
    VChip,
  },
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        mall: '#C4031A',
        primary: '#00A8A9',
        primaryLight: '#E6F7F7',
        secondary: '#4D9FD4',
        accent: '#00A8A9',
        appBg: '#E8E8E8',
        secondaryAppBg: '#FBFBFB',
        warning: '#E08D00',
        red: '#CC0000',
        error: '#CC0000',
        success: '#15C05C',
        green: '#15C05C',
      },
    },
  },
  directives: {
    Ripple,
  },
}
