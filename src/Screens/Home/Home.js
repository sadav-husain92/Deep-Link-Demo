import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import scale, { verticalScale } from '../../utils/Scale';
import styles from './styles';

const Home = ({ navigation }) => {
    const homeSlice = useSelector((state) => state.homeSlice);

    const onPressItem = (item) => {
        navigation.navigate('MenuDetail', { recipeID: item.id })
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <View>
                    <View style={styles.vegSeller}>
                        <View style={styles.vegIconContainer}>
                            <View style={styles.vegIcon} />
                        </View>
                        {item.isBestSelling && <Text style={styles.bestSellerText}>Best Seller</Text>}
                    </View>
                    <Text style={styles.nameText}>{item?.recipeName}</Text>
                    <Text style={styles.priceText}>{item?.price}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.moreDetailContainer} onPress={() => onPressItem(item)}>
                        <Text style={styles.moreDetailText}>More Details</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.imgStyle} source={item?.url} resizeMode='contain' />
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ marginHorizontal: scale(20) }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={homeSlice.menuList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                    ListHeaderComponent={() => <View style={{ height: scale(1) }} />}
                />
            </SafeAreaView>
        </View>

    )
}

export default Home