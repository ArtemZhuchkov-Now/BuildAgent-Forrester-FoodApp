import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, DateTimeColumn } from '@servicenow/sdk/core'

// Food Orders table
export const x_snc_forrester_co_food_order = Table({
    name: 'x_snc_forrester_co_food_order',
    label: 'Food Order',
    schema: {
        order_number: StringColumn({ 
            label: 'Order Number', 
            maxLength: 20,
            read_only: true
        }),
        customer_name: StringColumn({ 
            label: 'Customer Name', 
            maxLength: 100,
            mandatory: true 
        }),
        customer_email: StringColumn({ 
            label: 'Customer Email', 
            maxLength: 100 
        }),
        customer_phone: StringColumn({ 
            label: 'Phone Number', 
            maxLength: 20 
        }),
        table_number: StringColumn({ 
            label: 'Table/Booth Number', 
            maxLength: 10 
        }),
        status: StringColumn({
            label: 'Order Status',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                confirmed: { label: 'Confirmed', sequence: 1 },
                preparing: { label: 'Preparing', sequence: 2 },
                ready: { label: 'Ready for Pickup', sequence: 3 },
                delivered: { label: 'Delivered', sequence: 4 },
                cancelled: { label: 'Cancelled', sequence: 5 }
            },
            dropdown: 'dropdown_without_none',
            default: 'pending'
        }),
        total_amount: DecimalColumn({ 
            label: 'Total Amount',
            read_only: true
        }),
        special_instructions: StringColumn({ 
            label: 'Special Instructions', 
            maxLength: 500 
        }),
        order_date: DateTimeColumn({ 
            label: 'Order Date',
            read_only: true
        }),
        pickup_time: DateTimeColumn({ 
            label: 'Requested Pickup Time'
        })
    },
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    accessible_from: 'public',
    auto_number: {
        prefix: 'FO',
        number: 1000,
        number_of_digits: 4
    }
})