import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

// Food Items table
export const x_snc_forrester_co_food_item = Table({
    name: 'x_snc_forrester_co_food_item',
    label: 'Food Item',
    schema: {
        name: StringColumn({ 
            label: 'Item Name', 
            maxLength: 100,
            mandatory: true
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 500 
        }),
        price: DecimalColumn({ 
            label: 'Price',
            mandatory: true
        }),
        category: StringColumn({
            label: 'Category',
            choices: {
                appetizer: { label: 'Appetizers', sequence: 0 },
                main_course: { label: 'Main Course', sequence: 1 },
                dessert: { label: 'Desserts', sequence: 2 },
                beverage: { label: 'Beverages', sequence: 3 },
                snack: { label: 'Snacks', sequence: 4 }
            },
            dropdown: 'dropdown_with_none'
        }),
        image_url: StringColumn({ 
            label: 'Image URL', 
            maxLength: 255 
        }),
        available: BooleanColumn({ 
            label: 'Available',
            default: 'true'
        }),
        dietary_info: StringColumn({ 
            label: 'Dietary Information', 
            maxLength: 200 
        }),
        spice_level: StringColumn({
            label: 'Spice Level',
            choices: {
                mild: { label: 'Mild', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                hot: { label: 'Hot', sequence: 2 },
                extra_hot: { label: 'Extra Hot', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        })
    },
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    accessible_from: 'public'
})