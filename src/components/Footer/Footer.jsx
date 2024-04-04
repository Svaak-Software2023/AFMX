// import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
import "./footer.css"
import data from "../../assets/data/terms&Conditions.json"
import { RiTwitterXLine } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";


function Footer() {
  const termsAndCData1 = data.filter((item) => item.id <= data.length / 2 + 2);
  const termsAndCData2 = data.filter((item) => item.id > data.length / 2 + 2);
  return (

    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="footer-links">
            <h4>Terms and Policies</h4>
            <ul>
              {termsAndCData1.map((item) => (<li key={item.id}>
                <i className="bx bx-chevron-right" />
                <Link to={`/terms-condition/${item.id}`}>{item.name}</Link>
              </li>))}

            </ul>
          </div>
          <div className="footer-links">
            <h4> Terms &amp; Policies</h4>
            <ul>
              {termsAndCData2.map((item) => (<li key={item.id}>
                <i className="bx bx-chevron-right" />
                <Link to={`/terms-condition/${item.id}`}>{item.name}</Link>
              </li>))}
            </ul>
          </div>
          <div className="footer-links">
            <h4> AFMX Company</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/about-the-company">About Us</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/mission">Mission</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/statment">Statment</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/vision">Vision</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/core-value">Our Core Values</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/legal">Legal</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>AFMX Global</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">National Accounts</a>
              </li>

              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Partners</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Press</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Investors</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">International Clients and Accounts</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">F.A.Q.</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Intelli Chat</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Help Agent</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Agent X Commission</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Volunteer Alliance</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Sponsor Our Leauge</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Charity for Africa</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Membership Account Help</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Join AFMX</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Renew your Membership</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Membership Benifits</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Membership Levels</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Account Help</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Assistant App</a>
              </li>
            </ul>
          </div>

        </div>


      </footer>
      <div className="row m-0 p-0 align-items-end mb-3">
        <div className="col-lg-4 col-12">
          <div className="footer-logo">
            <Link to="/">
              <img src="images/top-logo.png" className="p-0 m-0" />
            </Link>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="footer-social-media ">
            <ul>
              <li className="youtube"><Link to="https://www.youtube.com/@americasfinestmaintenancec9082/featured" target="_blank"> <i className="fab fa-youtube"></i></Link></li>
              <li className="discord"><Link to="https://discord.com/invite/6nZgapN8" target="_blank"> <i className="fab fa-discord"></i></Link></li>
              <li className="tiktok"><Link to="https://www.tiktok.com/@afmx15?_t=8hPKDJEYrZj&_r=1" target="_blank"> <i className="fab fa-tiktok"></i></Link></li>
              <li className="snapchat"><Link to="https://www.snapchat.com/add/afmxcompany?share_id=ibeA0dmCmcU&locale=en-US" target="_blank"> <i className="fab fa-snapchat"></i></Link></li>
              <li className="skype"><Link to="https://join.skype.com/invite/RcbCHVpVamrJ" target="_blank"> <i className="fab fa-skype"></i></Link></li>
              <li className="pinterest"><Link to="https://id.pinterest.com/americafinest/" target="_blank"> <i className="fab fa-pinterest"></i></Link></li>
              <li className="instagram"><Link to="https://www.instagram.com/afmcompanyllc/" target="_blank"> <i className="fab fa-instagram"></i></Link></li>
              <li className="facebook"><Link to="https://www.facebook.com/atamericasfinest" target="_blank"> <i className="fab fa-facebook"></i></Link></li>
              <li className="twitter"><Link to="https://twitter.com/Americafinest99" target="_blank"> <RiTwitterXLine /></Link></li>
              <li className="twitter"><Link to="https://www.twitch.tv/afmxcompanyllc?sr=a" target="_blank"> <FaTwitch /></Link></li>

              <li className="linkedin"><Link  to="https://www.linkedin.com/in/americasfinestmaintenancecompanyllc/" target="_blank"> <i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-bg">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-lg-12">
              <div>© Copyright <strong>
                <span>AFMX Services</span>
              </strong>. All Rights Reserved </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer