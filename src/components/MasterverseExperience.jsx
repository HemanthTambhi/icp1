import React from 'react'
import SectionHeader from './common/SectionHeader';
import ex1 from '../assets/images/ex-1.png';
import ex2 from '../assets/images/ex-2.png';
import ex3 from '../assets/images/ex-3.png';
import ex4 from '../assets/images/ex-4.png';
import ex5 from '../assets/images/ex-5.png';
import ex6 from '../assets/images/ex-6.png';
import ey from '../assets/images/ex-fire.png';


const MasterverseExperience = () => {
    const categories = [
        { id: 1, name: 'Screening', image: ex1 },
        { id: 2, name: 'Comedy', image: ex2 },
        { id: 3, name: 'Music', image: ex3 },
        { id: 4, name: 'Workshops', image: ex4 },
        { id: 5, name: 'Food', image: ex5 },
        { id: 6, name: 'Performance', image: ex6 }
      ];
  return (
    <>
    <section className="categories-section">
            <div className="container">
            <SectionHeader title='The Masterverse Experience' link='' url={ey}/>
             

                <div className="categories-grid">
                {categories.map((category) => (
                    <div className="category-card" key={category.id}>
                    <img src={category.image} alt={category.name} className="category-icon" />
                    <p>{category.name}</p>
                    </div>
                ))}
                </div>
            </div>
    </section>
    </>
  )
}

export default MasterverseExperience








