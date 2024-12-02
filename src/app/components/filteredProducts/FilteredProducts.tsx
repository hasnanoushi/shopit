import React, { useEffect, useState } from "react";
import { ProductServices } from "@/app/services/product-services";
import "./filteredproduct.css";
const ProductFilter = ({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await ProductServices.getCategory();
        setCategories(["All", ...categoriesData]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h5>Categories</h5>
      <ul style={{ listStyle: "none" }}>
        {categories.map((category, index) => (
          <li
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "10px",
              marginBottom: "10px",
              marginRight: "15px",
              color: "blue",
            }}
            key={index}
            onClick={() => setCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
