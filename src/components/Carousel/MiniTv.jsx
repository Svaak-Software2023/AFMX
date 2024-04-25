import React, { useEffect, useRef, useState } from 'react'
import { getMiniTv } from "../../redux/features/miniTvSlice"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function MiniTv({ data }) {
    const dispatch = useDispatch()
    const { minitv: miniTvData, loading: miniTvLoading } = useSelector((state) => state.miniTv)
    const [miniTv, setMiniTv] = useState("")

    useEffect(() => {
        dispatch(getMiniTv()).then((item) => setMiniTv(item))
        if (!miniTvLoading) {
            setMiniTv(miniTvData)
        }
    }, [dispatch]);
    const myref=useRef();

    setInterval(() =>{
        myref.current.click()
    },3000)
    return (
        <>
            <div className="banner-ad banner_ad_relative mb-5 mt-2">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        {data?.map((item, index) =>
                            <Link to={item.mediaUrl} key={index}>
                                {item?.miniTvMedia.endsWith(".mp4") ?
                                    <div class="carousel-item active miniTv-img">
                                        <video width height autoPlay loop muted>
                                            <source src={item.miniTvMedia && item.miniTvMedia} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    : <div class="carousel-item miniTv-img">
                                        <img src={item.miniTvMedia} alt="" />
                                    </div>
                                }
                            </Link>
                        )
                        }
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button> */}
                    <button ref={myref} class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <img className="tv_absolute" src="/tvpng.png" />
            </div>
        </>
    )
}

export default MiniTv