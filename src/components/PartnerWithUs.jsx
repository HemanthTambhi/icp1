import React from 'react';

const PartnerWithUs = () => {
  return (
    <section className="partner_with_section" id="PartnerwithUs">
      <div className="container position-relative">
        <div className="partner_ui">
          <h3 className="text-white fw-bold">Partner with us</h3>
          <p className="text-white">Partner with Masterverses to grow together! <br /> Expand your reach in the global spiritual community.</p>
          <div className="partner_ui_button">
            <a href="mailto:Support@masterverses.com" className="white_button py-2 fw-bold">Read more</a>
            <a href="https://t.me/Master_verses" target="_blank" className="transparent_btn fw-bold">Roadmap <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33984 11.5897L6.92408 6.5639L1.33984 1.53809" stroke="white" strokeWidth="2.45707" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </a>
            <a href="https://x.com/Masterverses" target="_blank" className="transparent_btn fw-bold">Dev docs <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33984 11.5897L6.92408 6.5639L1.33984 1.53809" stroke="white" strokeWidth="2.45707" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;