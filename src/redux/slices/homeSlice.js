const { createSlice } = require('@reduxjs/toolkit');
import IMAGE_CONST from '../../constant/ImageConstant';

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        menuList: [{
            id: 1,
            recipeName: 'Veg Burger',
            price: '₹99',
            url: IMAGE_CONST.BURGER,
            ingredients: 'Hummus, Feta style cheese and fresh dill, Pickled red onions, fresh baby spinach, basted with tomato sauce.',
            isBestSelling: true,
        },
        {
            id: 2,
            recipeName: 'Veg Burger with Fries',
            price: '₹150',
            url: IMAGE_CONST.BURGER_WITH_FRIES,
            ingredients: 'Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil',
            isBestSelling: false,
        },
        {
            id: 3,
            recipeName: 'Cheese Pizza',
            url: IMAGE_CONST.PIZZA,
            price: '₹182',
            ingredients: 'Parmesan (often used with mozzarella), fontina, cheddar, provolone, pecorino romano and ricotta,',
            isBestSelling: true,
        },
        {
            id: 4,
            recipeName: 'Bhojan Thali',
            url: IMAGE_CONST.THALI,
            price: '₹112',
            ingredients: 'Rice or flatbread made with wheat, millet, a seasonal preparation etc.',
            isBestSelling: false,
        },
        {
            id: 5,
            recipeName: 'Ratlami Sev',
            price: '₹35',
            url: IMAGE_CONST.BURGER_WITH_FRIES,
            ingredients: 'Gram flour, clove, pepper and other spices',
            isBestSelling: true,
        },
        {
            id: 6,
            recipeName: 'Fast Food',
            url: IMAGE_CONST.PIZZA,
            ingredients: 'Salt, sugar, saturated fats, trans fats, calories, and processed preservatives and ingredients',
            price: '₹182',
            isBestSelling: false,
        },
        {
            id: 7,
            recipeName: 'Dal Bafla Tali',
            url: IMAGE_CONST.THALI,
            price: '₹260',
            ingredients: 'Whole wheat flour, corn flour, ghee, baking soda, curd and turmeric powder',
            isBestSelling: true,
        }],
    },
    reducers: {
        homeSliceAction: (state, action) => {
            state.menuList = action.payload;
        },
    },
});

export const { homeSliceAction } = homeSlice.actions;
export default homeSlice.reducer;
