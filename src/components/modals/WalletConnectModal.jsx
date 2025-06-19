import React, { useState, useCallback, useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { setItemWithExpiry } from '../../utils/local-storage/localStorage';

const WalletConnectModal = ({user_info,setUserPrencipal,setIsUserAuth}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const handleIILogin = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const authClient = await AuthClient.create();
      // Set login options
      const days = BigInt(1); 
      const hours = BigInt(24);
      const minutes = BigInt(60);
      const seconds = BigInt(60);
      const milliseconds = BigInt(1000);
      const microseconds = BigInt(1000);
      const nanoseconds = days * hours * minutes * seconds * milliseconds * microseconds * BigInt(1000);
      
    const res=  await authClient.login({
        identityProvider: "https://identity.ic0.app",
        maxTimeToLive: nanoseconds,
        onSuccess: async () => {
          // Close modal
          const button = document.getElementById("close-modal");
          if (button) button.click();

          const identity = authClient.getIdentity();

          const principal = identity.getPrincipal();

          const isAuthenticated = await authClient.isAuthenticated();

          setUserPrencipal(principal.toString())
          setIsUserAuth(isAuthenticated)
          setItemWithExpiry("user_masterverses", {
            authenticated:isAuthenticated,
            wallet:principal.toString()
          });

          // window.location.href = '/';
        },
        onError: (error) => {
          setError("Failed to authenticate. Please try again.");
          console.error("Authentication error:", error);
        }
      });
      console.log('Res heree',res)
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {/* modal start here  */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 w-100 pb-3">
              <p>{isLoading?'Loading....':''}</p>
              <h5 className='text-center w-100 mb-0 fw-bold'>Connect to Continue</h5>
              <button id="close-modal" className="close-button" data-bs-dismiss="modal" aria-label="Close">×</button>
            </div>
            
            {error && (
              <div className="alert alert-danger mx-3" role="alert">
                {error}
              </div>
            )}
            
            <div className="wallet-option">
              <button 
                onClick={handleIILogin} 
                className="wallet-button" 
                disabled={isLoading}
              >
                <div className="wallet-icon">
                <svg id="icLogo" xmlns="http://www.w3.org/2000/svg" 
                viewBox="-10 0 80 31"
                >
   
    <g fill="#00ACE5">
      <path d="M48.691 23.265c-4.047 0-8.322-2.646-10.42-4.567-2.293-2.1-8.596-8.936-8.624-8.967C25.514 5.118 19.957 0 14.412 0 7.734 0 1.91 4.624.395 10.751c.117-.403 2.238-6.016 10.208-6.016 4.048 0 8.322 2.646 10.42 4.567 2.293 2.1 8.596 8.936 8.624 8.967 4.133 4.612 9.69 9.73 15.235 9.73 6.678 0 12.502-4.624 14.017-10.751-.117.403-2.238 6.016-10.208 6.016Z"></path>
      <path fill="url(#logo-loop-bottom)" d="M29.647 18.27c-.014-.017-1.83-1.985-3.864-4.132-1.1 1.305-2.685 3.084-4.507 4.68-3.395 2.977-5.602 3.6-6.864 3.6-4.762 0-8.646-3.776-8.646-8.418 0-4.642 3.88-8.39 8.646-8.419.173 0 .382.018.636.063-1.432-.55-2.953-.909-4.445-.909-7.967 0-10.09 5.61-10.207 6.015A13.507 13.507 0 0 0 .001 14c0 7.72 6.368 14 14.309 14 3.31 0 7.018-1.697 10.838-5.044 1.805-1.582 3.37-3.275 4.546-4.636a2.261 2.261 0 0 1-.045-.05l-.002.001Z"></path>
      <path fill="url(#logo-loop-top)" d="M29.647 9.73c.015.016 1.83 1.985 3.864 4.132 1.1-1.305 2.685-3.084 4.507-4.68 3.395-2.977 5.602-3.6 6.864-3.6 4.762 0 8.646 3.776 8.646 8.418 0 4.616-3.88 8.39-8.646 8.419a3.67 3.67 0 0 1-.636-.063c1.432.55 2.954.909 4.445.909 7.967 0 10.09-5.61 10.207-6.015.258-1.044.395-2.132.395-3.249C59.294 6.281 52.823 0 44.883 0c-3.311 0-6.916 1.698-10.735 5.044C32.342 6.626 30.776 8.32 29.6 9.68l.045.05h.001Z"></path>
    </g>
    <defs>
      <linearGradient id="logo-loop-bottom" x1="21.883" x2="2.381" y1="26.169" y2="5.974" gradientUnits="userSpaceOnUse">
        <stop offset=".22" stop-color="#FF0079"></stop>
        <stop offset=".89" stop-color="#592489"></stop>
      </linearGradient>
      <linearGradient id="logo-loop-top" x1="37.398" x2="56.9" y1="1.844" y2="22.039" gradientUnits="userSpaceOnUse">
        <stop offset=".21" stop-color="#FF4B00"></stop>
        <stop offset=".68" stop-color="#FFAB00"></stop>
      </linearGradient>
    </defs>
  </svg>
                  {/* <img src="/ii-logo.svg" alt="Internet Identity" width="24" height="24" /> */}
                </div>
                <span>
                  {isLoading ? 'Connecting...' : 'Connect with Internet Identity'}
                </span>
              </button>
              
              <p className="text-center text-muted mt-3 small">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* modal ends here  */}
    </>
  );
};

export default WalletConnectModal;