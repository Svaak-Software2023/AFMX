import { useParams } from "react-router-dom"
import LeftMenu from "../../components/leftmenu/LeftMenu";
import ProductCard from "./component/ProductCard"
// import productData from "../../assets/data/Productdata.json"
import "./product.css"
import { useEffect } from "react";
import { getProduct } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function ProductCategory() {
    const { id,name } = useParams();
    // console.log("id",id);

    const dispatch=useDispatch()
    const {allProducts:categoryData,loading}=useSelector((state)=>state.products)
    // console.log("categoryData",categoryData);
    useEffect(()=>{
       dispatch(getProduct(id))
    },[])
   
    if(loading) return <Loader/>
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    {/* <div className="col-lg-3 col-md-3 col-12 p-0">
                        <LeftMenu type="shopping center" data={categoryData} url="/product" />
                    </div> */}
                    <div className="col-lg-12 col-md-9 col-12 bg-white  p-3">
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