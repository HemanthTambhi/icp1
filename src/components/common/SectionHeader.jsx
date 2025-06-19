import React from 'react';

const SectionHeader = ({title, link, url}) => {
  return (
    <div className='common_section_header'>
        <div className='common_section_header_left'>
        <img src={url} alt="" />
        <h4 className='mb-0'>{title}</h4>
        </div>
        {link && <a href="#">{link}</a>}
    </div>
  )
}

export default SectionHeader