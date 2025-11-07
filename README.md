# 🍽️ Forrester Conference Food Ordering App

A vibrant food ordering application for the Forrester Conference featuring an attractive menu display and efficient order management system built on ServiceNow.

[![ServiceNow](https://img.shields.io/badge/ServiceNow-Now%20SDK-brightgreen)](https://developer.servicenow.com)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org)
[![License](https://img.shields.io/badge/License-UNLICENSED-red)](LICENSE)

## 🌟 Features

### 🍕 Interactive Food Menu
- **Category Filtering**: Browse by appetizers, main courses, desserts, beverages, and snacks
- **Rich Food Details**: Each item includes descriptions, pricing, dietary information, and spice levels
- **Visual Design**: Emoji-based icons and attractive card layouts for better user experience
- **Real-time Availability**: Only shows available items to customers

### 🛒 Smart Shopping Cart
- **Dynamic Cart Management**: Add, remove, and update quantities with ease
- **Real-time Calculations**: Automatic total calculations with live updates
- **Cart Persistence**: Maintains cart state throughout the ordering process
- **Visual Feedback**: Smooth animations and loading states for better UX

### 📋 Comprehensive Order Management
- **Customer Information**: Capture essential customer details including contact info
- **Table Assignment**: Support for table/booth number assignment
- **Special Instructions**: Allow customers to add dietary restrictions or special requests
- **Order Tracking**: Built-in order status workflow (Pending → Confirmed → Preparing → Ready → Delivered)
- **Automatic Order Numbering**: Sequential order numbers with "FO" prefix

## 🏗️ Architecture

### ServiceNow Tables
- **Food Items** (`x_snc_forrester_co_food_item`): Menu items with pricing, categories, and dietary information
- **Food Orders** (`x_snc_forrester_co_food_order`): Customer orders with status tracking and order details

### Frontend (React)
- **Modular Components**: Separate components for menu, cart, and order form
- **Service Layer**: Abstracted API calls through FoodService
- **Responsive Design**: Mobile-friendly interface with CSS Grid/Flexbox
- **Modern React**: Hooks-based functional components with state management

### Key Components
```
src/client/
├── components/
│   ├── FoodMenu.jsx      # Menu display with filtering
│   ├── Cart.jsx          # Shopping cart management
│   └── OrderForm.jsx     # Order submission form
├── services/
│   └── FoodService.js    # API service layer
└── utils/
    └── fields.js         # ServiceNow field utilities
```

## 🚀 Getting Started

### Prerequisites
- ServiceNow instance with Now SDK support
- Node.js (compatible with ServiceNow SDK requirements)
- ServiceNow SDK CLI tools installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd forrester-food-ordering-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

4. **Deploy to ServiceNow instance**
   ```bash
   npm run deploy
   ```

### Available Scripts

- `npm run build` - Build the application using Now SDK
- `npm run deploy` - Install the app to your ServiceNow instance
- `npm run transform` - Transform code for ServiceNow compatibility
- `npm run types` - Generate TypeScript type definitions

## 📊 Database Schema

### Food Items Table
| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Item name (required, max 100 chars) |
| `description` | String | Item description (max 500 chars) |
| `price` | Decimal | Item price (required) |
| `category` | Choice | Food category (appetizer, main_course, dessert, beverage, snack) |
| `image_url` | String | Emoji or image URL (max 255 chars) |
| `available` | Boolean | Availability status (default: true) |
| `dietary_info` | String | Dietary restrictions/info (max 200 chars) |
| `spice_level` | Choice | Spice level (mild, medium, hot, extra_hot) |

### Food Orders Table
| Field | Type | Description |
|-------|------|-------------|
| `order_number` | String | Auto-generated order number (FO####) |
| `customer_name` | String | Customer name (required, max 100 chars) |
| `customer_email` | String | Customer email (max 100 chars) |
| `customer_phone` | String | Phone number (max 20 chars) |
| `table_number` | String | Table/booth number (max 10 chars) |
| `status` | Choice | Order status (pending, confirmed, preparing, ready, delivered, cancelled) |
| `total_amount` | Decimal | Total order amount (calculated) |
| `special_instructions` | String | Special requests (max 500 chars) |
| `order_date` | DateTime | Order timestamp (auto-set) |
| `pickup_time` | DateTime | Requested pickup time |

## 🎨 Sample Data

The application comes with pre-loaded sample menu items including:

### Appetizers
- **Truffle Mac & Cheese Bites** - $14.99
- **Korean BBQ Sliders** - $16.99  
- **Avocado Toast Tower** - $12.99

### Main Items
- **Grass-Fed Beef Burger** - $22.99
- **Pan-Seared Salmon** - $28.99
- **Mushroom Risotto** - $19.99

## 🔧 Configuration

### ServiceNow Configuration
- **Scope**: `x_snc_forrester_co`
- **App Name**: Forrester Co
- **UI Page Endpoint**: `x_snc_forrester_co_food_menu.do`

### Web Service Access
Both tables are configured with:
- Public accessibility
- Full CRUD operations (Create, Read, Update, Delete)
- Web service access enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ServiceNow Fluent API best practices
- Use proper TypeScript typing where applicable
- Maintain consistent code formatting
- Test all changes on a ServiceNow development instance
- Update documentation for new features

## 📝 License

This project is unlicensed. Please check with the project maintainers for usage rights.

## 🛠️ Built With

- **[ServiceNow Now SDK](https://developer.servicenow.com)** - ServiceNow development platform
- **[ServiceNow Fluent](https://docs.servicenow.com/csh?topicname=fluent-overview&version=latest)** - Metadata definition DSL
- **[React](https://reactjs.org/)** - Frontend framework
- **[ServiceNow Glide API](https://developer.servicenow.com/dev.do#!/reference/api/washington/server/no-namespace/GlideSystemAPI)** - Server-side ServiceNow APIs

## 📞 Support

For questions about this application:
1. Check the ServiceNow Developer Documentation
2. Review the Now SDK documentation
3. Open an issue in this repository

---

Made with ❤️ for the Forrester Conference 🎪