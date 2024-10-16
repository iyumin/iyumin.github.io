interface IColorMap {
  [key: string]: string,
  red: string,
  orange: string,
  yellow: string,
  green: string,
  cyan: string,
  blue: string,
  purple: string,
  primary: string,
  white: string,
  white1: string,
  white2: string,
  white3: string,
  white4: string,
  white5: string,
  white6: string,
  white7: string,
  dark: string,
} 

const COLOR_MAP: IColorMap = {
  red: '#E74C3C',
  orange: '#F39C12',
  yellow: '#F1C40F',
  green: '#2ECC71',
  cyan: '#2980B9',
  blue: '#3498DB',
  purple: '#8E44AD',
  //
  primary: '#3498DB',
  dark: '#212121',
  white: '#FFFFFF',
  white1: '#FDFEFE',
  white2: '#F7F9F9',
  white3: '#F4F4F4',
  white4: '#DFDFDF',
  white5: '#CACACA',
  white6: '#bcbcbc',
  white7: '#a1a1a1',
};

export default COLOR_MAP;