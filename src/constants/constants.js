export const styles = {
  colors: {
    light: {
      appIcon: '#ff0200',
      background: '#F9F9F9',
      barBackground: '#ffffff',
      primary: '#030303',
      secondary: '#606060',
      linkActive: '#ff0200',
      linkHoverBackground: '#ececec',
      inputBackground: '#ffffff',
      inputBorder: '#cccccc',
      searchButtonBackground: '#f8f8f8',
    },
    dark: {
      appIcon: '#ff0200',
      background: '#181818',
      barBackground: '#212121',
      primary: '#ffffff',
      secondary: '#aaaaaa',
      linkActive: '#ff0200',
      linkHoverBackground: '#303030',
      inputBackground: '#121212',
      inputBorder: '#303030',
      searchButtonBackground: '#323232',
    },
  },
  props: {
    transitionTime: '0.4s',
    sidebarWidth: '150px',
  },
};

export const screenSizes = {
  xsmall: '775px',
  small: '830px',
  mid: '1200px',
};

export const mainViewTypes = {
  searchGallery: 'searchGallery',
  favoritesGallery: 'favoritesGallery',
  videoDetails: 'videoDetails',
};

export const environmentActions = {
  setTheme: 'setTheme',
  setSidebarShow: 'setSidebarShow',
  setSearchQuery: 'setSearchQuery',
};
