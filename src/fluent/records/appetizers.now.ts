import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample appetizers
export const appetizer1 = Record({
    $id: Now.ID['food-app-1'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Truffle Mac & Cheese Bites',
        description: 'Crispy golden spheres filled with creamy truffle mac and cheese, served with spicy sriracha aioli',
        price: 14.99,
        category: 'appetizer',
        image_url: '🧀',
        available: true,
        dietary_info: 'Vegetarian, Contains Dairy'
    }
})

export const appetizer2 = Record({
    $id: Now.ID['food-app-2'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Korean BBQ Sliders',
        description: 'Three mini brioche buns with marinated beef bulgogi, kimchi slaw, and gochujang mayo',
        price: 16.99,
        category: 'appetizer',
        image_url: '🍔',
        available: true,
        dietary_info: 'Contains Gluten',
        spice_level: 'medium'
    }
})

export const appetizer3 = Record({
    $id: Now.ID['food-app-3'],
    table: 'x_snc_forrester_co_food_item',
    data: {
        name: 'Avocado Toast Tower',
        description: 'Sourdough topped with smashed avocado, heirloom tomatoes, feta crumbles, and everything bagel seasoning',
        price: 12.99,
        category: 'appetizer',
        image_url: '🥑',
        available: true,
        dietary_info: 'Vegetarian, Gluten-Free Option Available'
    }
})