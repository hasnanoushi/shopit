import Link from "next/link";
import "./Category.css";
import Image from "next/image";

const Category = () => {
  return (
    <div className="category row m-3">
      <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
        <Link
          href={"/"}
          className="d-flex flex-column"
          style={{ textDecoration: "none" }}
        >
          <Image
            alt="categoryImg"
            width={80}
            height={50}
            src={"/electronics.jpg"}
            className="rounded"
          />
          <span style={{ fontSize: "medium" }}>Electronics</span>
        </Link>
      </div>
      <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
        <Link
          href={"/"}
          className="d-flex flex-column"
          style={{ textDecoration: "none" }}
        >
          <Image
            alt="categoryImg"
            width={80}
            height={50}
            src={"/fashion.jpg"}
            className="rounded"
          />
          <span style={{ fontSize: "medium" }}>Fashion</span>
        </Link>
      </div>
      <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
        <Link
          href={"/"}
          className="d-flex flex-column"
          style={{ textDecoration: "none" }}
        >
          <Image
            alt="categoryImg"
            width={80}
            height={50}
            src={"/furniture.jpeg"}
            className="rounded"
          />
          <span style={{ fontSize: "medium" }}>Furniture</span>
        </Link>
      </div>
      <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
        <Link
          href={"/"}
          className="d-flex flex-column"
          style={{ textDecoration: "none" }}
        >
          <Image
            alt="categoryImg"
            width={80}
            height={50}
            src={"kitchen.jpg"}
            className="rounded"
          />
          <span style={{ fontSize: "medium" }}>Kitchen</span>
        </Link>
      </div>
    </div>
  );
};

export default Category;
