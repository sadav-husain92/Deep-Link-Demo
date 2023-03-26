import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    vegSeller: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    vegIconContainer: {
        height: scale(18),
        width: scale(18),
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center'
    },

    vegIcon: {
        height: scale(10),
        width: scale(10),
        backgroundColor: 'green',
        borderRadius: scale(5)
    },

    bestSellerText: {
        fontWeight: '400',
        fontSize: scale(12),
        color: 'red',
        marginLeft: scale(5)
    },

    imgStyle: {
        width: scale(100),
        height: scale(100),
    },

    nameText: {
        marginTop: verticalScale(8),
        fontWeight: 'bold',
        fontSize: scale(16),
        color: 'black'
    },

    priceText: {
        marginTop: verticalScale(5),
        fontWeight: 'bold',
        fontSize: scale(14),
        color: 'black'
    },

    moreDetailContainer: {
        marginTop: verticalScale(20),
        height: scale(25),
        width: scale(120),
        borderWidth: 1,
        borderRadius: scale(15),
        alignItems: 'center'
    },

    moreDetailText: {
        fontWeight: '400',
        fontSize: scale(14),
        color: 'black'
    },

    itemSeparator: {
        marginBottom: verticalScale(30),
        marginTop: verticalScale(30),
        borderWidth: 0.5,
        borderColor: 'black'
    }
});

export default styles;