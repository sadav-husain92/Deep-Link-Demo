import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import Share from 'react-native-share';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const MenuDetail = ({ navigation, route }) => {
    const { recipeID } = route.params;
    const { menuList } = useSelector((state) => state.homeSlice);

    const [recipeDetail, setRecipeDetail] = useState(null)

    useEffect(() => {
        let timer = setTimeout(() => {
            const selectedRecipe = menuList.find(item => item.id == recipeID);
            setRecipeDetail(selectedRecipe)
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [])


    const generateLink = async () => {
        try {
            const link = await dynamicLinks().buildLink({
                link: `https://deeplinktesttask.page.link/c2Sd?id=${recipeID}`,
                // domainUriPrefix is created in your Firebase console
                domainUriPrefix: 'https://deeplinktesttask.page.link',
                // optional setup which updates Firebase analytics campaign
                // "banner". This also needs setting up before hand
                analytics: {
                    campaign: 'banner',
                },
            });

            return link;
        } catch (error) {
            // console.log("error raised", error)
        }
    }


    const shareUser = async () => {
        try {
            const getLink = await generateLink()
            const res = await Share.open(({
                message: 'Best Selleing Recipe',
                url: getLink
            }))
        } catch (error) {
            // console.log("error raised", error)
        }

    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 24 }}>
                {recipeDetail ? <>
                    <Text style={{ ...styles.nameText, alignSelf: 'center' }}>Recipe Details</Text>
                    <Image
                        source={recipeDetail?.url}
                        style={styles.imgStyle}
                        resizeMode='contain'
                    />
                    <Text style={styles.nameText}>{recipeDetail?.recipeName}</Text>
                    <Text style={styles.priceText}>Price: {recipeDetail?.price}</Text>
                    <Text style={styles.priceText}>Ingredients: {recipeDetail?.ingredients}</Text>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => shareUser()}
                    >
                        <Text style={{
                            color: 'blue'
                        }}>Share this recipe</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{
                            color: 'red'
                        }}>Go Back</Text>
                    </TouchableOpacity>
                </> : <ActivityIndicator size={'large'} color={'green'} />}
            </SafeAreaView>
        </View>

    )
}

export default MenuDetail