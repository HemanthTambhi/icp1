import React,{ useState, useRef, useEffect }  from 'react';
import logo from '../../assets/images/logo.png';
import coin  from '../../assets/images/coin.png';
import fire from '../../assets/images/fire.png';
import location from '../../assets/images/location.png';
import search from '../../assets/images/search.png';
import dropdown from '../../assets/images/dropdown.png';
import '../../assets/css/popup.css'

import { Link } from 'react-router-dom';
import WalletConnectModal from '../modals/WalletConnectModal';
import { getItemWithExpiry } from '../../utils/local-storage/localStorage';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userPrencipal,setUserPrencipal]=useState(null)
    const [isUserAuth,setIsUserAuth]=useState(false)
    const dropdownRef = useRef(null);
    const getLocalData=getItemWithExpiry('user_masterverses')
    console.log('Local Data',getLocalData)

    useEffect(()=>{
      if(getLocalData?.authenticated&&getLocalData?.wallet)
      {
        setIsUserAuth(true)
        setUserPrencipal(getLocalData?.wallet)
      }
      else
      {
        setIsUserAuth(false)
        setUserPrencipal(null)
      }
    },[getLocalData])
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className="nav_new_rounded">
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="https://t.me/masterversess_bot" target='_blank' rel="noreferrer">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="ml-auto right_nav_bitton">
                <li>
                  {isUserAuth ? <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Connected
                  </Link> : <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Connect Wallet
                  </Link>}
                </li>
                <li>
                  {isUserAuth?
                    <a href="https://www.mokx.org/" target="_blank" rel="noopener noreferrer">Your spiritual buddy</a>:''}

                    </li>
               {/* Wallet Connect Modal */}
                <WalletConnectModal user_info={{userPrencipal,isUserAuth}} setUserPrencipal={setUserPrencipal} setIsUserAuth={setIsUserAuth} />
                <li>
                  {/* <ul className='className="ml-auto right_nav_bitton'> */}
                   
                  {/* </ul> */}

                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="btn btn-secondary p-0 dropdown-toggle bg-transparent border-0"
                            type="button"
                            onClick={toggleDropdown}
                            aria-expanded={isOpen}
                        >
                           <div className="user_button">
                            <div className='user_button_left'>
                          {userPrencipal ? (
                            <h5>
                              {userPrencipal.length > 8
                                ? `${userPrencipal.substring(0, 4)}...${userPrencipal.slice(-6)}`
                                : userPrencipal}
                            </h5>
                          ) : null}
                            </div>
                            {/* <div className='user_button_right'>
                                <img src={dropdown} alt="dropdown" />
                            </div> */}
                           </div>
                        </button>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;