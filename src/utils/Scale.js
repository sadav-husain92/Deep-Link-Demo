import { Dimensions, Platform, PixelRatio } from 'react-native';

//Screen Constatnts
const SCREEN_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height <= 550 ? 667 : Dimensions.get('window').height;
const SCREEN_WIDTH = 375;

const { height, width } = Dimensions.get('window');

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
    const newSize = width / SCREEN_WIDTH * units;
    const fontScale = PixelRatio.getFontScale();
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        if (fontScale > 1) {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
}


const verticalScale = size => {
    const newSize = height / SCREEN_HEIGHT * size;
    const fontScale = PixelRatio.getFontScale();
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        if (fontScale > 1) {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
}

export { verticalScale };