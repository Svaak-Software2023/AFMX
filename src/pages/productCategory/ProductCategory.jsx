import { useParams } from "react-router-dom"
import LeftMenu from "../../components/leftmenu/LeftMenu";
import ProductCard from "./component/ProductCard"
// import productData from "../../assets/data/Productdata.json"
import "./product.css"
import { useEffect } from "react";
import { getProduct } from "../../redux/featurs/productSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCategory() {
    const { id,name } = useParams();
    // console.log("id",id);

    const dispatch=useDispatch()
    const categoryData=useSelector((state)=>state.products.allProducts)
    // console.log("categoryData",categoryData);
    useEffect(()=>{
       dispatch(getProduct(id))
    },[])
   
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0">
                        <LeftMenu type="shopping center" data={categoryData} url="/product" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-12 bg-white  p-3">
                        <h3 className="product-category-heading">{name}</h3>
                        <div className="product-item-list">
                            {
                                categoryData?.map((item) => (
                                    <ProductCard key={item._id} data={item}  parent={name}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCategory