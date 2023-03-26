
import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    imgStyle: {
        width: '100%',
        height: '40%',
        borderRadius: scale(30),
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignSelf: 'center',
        marginTop: verticalScale(16)
    },

    nameText: {
        fontWeight: 'bold',
        fontSize: scale(16),
        marginLeft: scale(8),
        alignSelf: 'center',
        color: 'black',
        marginVertical: verticalScale(8)
    },

    priceText: {
        marginTop: verticalScale(5),
        fontWeight: 'bold',
        fontSize: scale(14),
        color: 'black'
    },

    btnStyle: {
        height: scale(42),
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: scale(10),
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginVertical: verticalScale(8)
    }
});

export default styles;