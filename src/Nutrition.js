import React from 'react'

const Nutrition = () => {
    return (
        <section className='border-bottom'>
            <h2>Nutrition</h2>

            <p className="text">
                The table below shows nutritional values per serving without the additional fillings.
            </p>
            

            <div className="nutrition">
                <div className="nutrients border-bottom">
                    <p className=''>Calories</p>
                    <p className='measurements'>277kcal</p>
                </div>
                <div className="nutrients border-bottom">
                    <p className=''>Carbs</p>
                    <p className='measurements'>0g</p>
                </div>
                <div className="nutrients border-bottom">
                    <p className=''>Protein</p>
                    <p className='measurements'>20g</p>
                </div>
                <div className="nutrients">
                    <p className=''>Fat</p>
                    <p className='measurements'>22g</p>
                </div>
            </div>


        </section>
    )
}

export default Nutrition