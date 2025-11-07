export class FoodService {
  constructor() {
    this.baseUrl = '/api/now/table';
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-UserToken': window.g_ck
    };
  }

  async getMenuItems() {
    try {
      const response = await fetch(
        `${this.baseUrl}/x_snc_forrester_co_food_item?sysparm_display_value=all&sysparm_query=available=true^ORDERBYcategory,name`,
        { headers: this.headers }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  }

  async createOrder(orderData) {
    try {
      const response = await fetch(
        `${this.baseUrl}/x_snc_forrester_co_food_order?sysparm_display_value=all`,
        {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(orderData)
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to create order');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async getOrders(query = '') {
    try {
      const url = query 
        ? `${this.baseUrl}/x_snc_forrester_co_food_order?sysparm_display_value=all&sysparm_query=${query}`
        : `${this.baseUrl}/x_snc_forrester_co_food_order?sysparm_display_value=all`;
        
      const response = await fetch(url, { headers: this.headers });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  async updateOrderStatus(orderId, status) {
    try {
      const response = await fetch(
        `${this.baseUrl}/x_snc_forrester_co_food_order/${orderId}?sysparm_display_value=all`,
        {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({ status })
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }
}