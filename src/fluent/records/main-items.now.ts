import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Main Course Items
export const main1 = Record({
    $id: Now.ID['food-main-1'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Grilled Salmon Power Bowl',
        description: 'Fresh Atlantic salmon with quinoa, roasted vegetables, avocado, and lemon-herb vinaigrette',
        price: 24.99,
        category: 'main_course',
        image_url: '🐟',
        available: true,
        dietary_info: 'Gluten-Free, High Protein'
    }
})

export const main2 = Record({
    $id: Now.ID['food-main-2'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Wagyu Beef Burger',
        description: 'Premium wagyu beef patty with aged cheddar, caramelized onions, arugula, and truffle aioli on brioche',
        price: 28.99,
        category: 'main_course',
        image_url: '🍔',
        available: true,
        dietary_info: 'Contains Gluten, Premium Cut'
    }
})

// Desserts
export const dessert1 = Record({
    $id: Now.ID['food-dessert-1'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, vanilla ice cream, and fresh berries',
        price: 12.99,
        category: 'dessert',
        image_url: '🍰',
        available: true,
        dietary_info: 'Contains Dairy, Contains Gluten'
    }
})

// Beverages
export const beverage1 = Record({
    $id: Now.ID['food-bev-1'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Artisan Cold Brew Coffee',
        description: 'Smooth cold brew coffee with optional oat milk or vanilla syrup',
        price: 5.99,
        category: 'beverage',
        image_url: '☕',
        available: true,
        dietary_info: 'Vegan Option Available'
    }
})

export const beverage2 = Record({
    $id: Now.ID['food-bev-2'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Fresh Green Smoothie',
        description: 'Spinach, kale, banana, mango, coconut water, and chia seeds',
        price: 8.99,
        category: 'beverage',
        image_url: '🥤',
        available: true,
        dietary_info: 'Vegan, Gluten-Free, Superfood'
    }
})

// Snacks
export const snack1 = Record({
    $id: Now.ID['food-snack-1'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Gourmet Trail Mix',
        description: 'Mixed nuts, dried fruits, dark chocolate chips, and coconut flakes',
        price: 6.99,
        category: 'snack',
        image_url: '🥜',
        available: true,
        dietary_info: 'Gluten-Free, High Energy'
    }
})