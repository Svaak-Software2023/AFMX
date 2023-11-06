import "./leftMenu.css"
import { Link } from "react-router-dom"

function LeftMenue({ type, data, url }) {
    const menuItem = data;
    return (
        <div className="left-menue-main mb-3">
            <h3 className="left-menu-heading">
                {type}
            </h3>
            <div className="left-menue-list">
                <ul>
                    {
                        menuItem?.map((item) => (
                            <li key={item?.id}>
                                <Link to={`${url}/${item?.id}`} className="Links">{item?.name}</Link>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default LeftMenue