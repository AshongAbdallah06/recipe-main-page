import React from 'react';
import omelette from './image-omelette.jpeg';

const Header = () => {
    return (
        <header>
            <div>
                <img src={omelette} className='omelette' alt="" />
            </div>

            <h1>Simple Omelette Recipe</h1>
                        
            <p className="description">
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese vegetables, or meats.
            </p>
        </header>
    )
}

export default Header