// import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
import "./footer.css"
import data from "../../assets/data/terms&Conditions.json"
import { RiTwitterXLine } from "react-icons/ri";

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
                <a href="#/new">About Us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Mission</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Statment</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Vision</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Our Core Values</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="#/new">Legal</a>
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
                <a href="#/new">Contact Us</a>
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
              <img src="images/logo-red.png" className="p-0 m-0" />
            </Link>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="footer-social-media ">
            <ul>
              <li className="youtube"><a href=""> <i className="fab fa-youtube"></i></a></li>
              <li className="discord"><a href=""> <i className="fab fa-discord"></i></a></li>
              <li className="tiktok"><a href=""> <i className="fab fa-tiktok"></i></a></li>
              <li className="snapchat"><a href=""> <i className="fab fa-snapchat"></i></a></li>
              <li className="skype"><a href=""> <i className="fab fa-skype"></i></a></li>
              <li className="pinterest"><a href=""> <i className="fab fa-pinterest"></i></a></li>
              <li className="instagram"><a href=""> <i className="fab fa-instagram"></i></a></li>
              <li className="facebook"><a href=""> <i className="fab fa-facebook"></i></a></li>
              <li className="twitter"><a href=""><RiTwitterXLine /></a></li>
              <li className="linkedin"><a href=""> <i className="fab fa-linkedin"></i></a></li>
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