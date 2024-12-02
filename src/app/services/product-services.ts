export class ProductServices {
  static getProducts = async () => {
    try {
      let productsResponse = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await productsResponse.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching products:", error);
    }
  };

  static getProductById = async (id: number) => {
    try {
      let productResponse = await fetch(
        `https://fakestoreapi.com/products/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await productResponse.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching product by ID:", error);
    }
  };

  static getCategory = async () => {
    try {
      let categoryResponse = await fetch(
        "https://fakestoreapi.com/products/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await categoryResponse.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching categories:", error);
    }
  };

  static fetchCategoryData = async (category: string) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "An error occurred while fetching products for category:",
        error
      );
    }
  };

  static filterProducts = async (category: string) => {
    try {
      const products = await this.fetchCategoryData(category);
      return products;
    } catch (error) {
      console.error("An error occurred while filtering products:", error);
    }
  };
}
