import API_ENPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
