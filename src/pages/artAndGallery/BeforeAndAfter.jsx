import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import ImportantLinks from '../../components/ImportantLinks/ImportantLinks'
import './style.css'

function BeforeAndAfter() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div> 
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div>
                            <h3 className="heading">See the Difference! Before and After</h3>
                        </div>
                        <div className="my-3" style={{ textAlign: "justify" }}>
                            <p>We take pride in our work. Here you’ll find examples of the high quality cleaning jobs we do for our clients</p>
                        </div>
                        <div className='beforeafter-img'>
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/51/1482269555-clx0910091b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=980:*" srcSet="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/51/1482269555-clx0910091b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=980:*" alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/51/1482270017-clx0910091a.jpg?crop=0.888235294117647xw:1xh;center,top&resize=980:*" srcSet="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/51/1482270017-clx0910091a.jpg?crop=0.888235294117647xw:1xh;center,top&resize=980:*" alt="Image two" />}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeforeAndAfter