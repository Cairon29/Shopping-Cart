import React, { useContext } from 'react'
import { FilterContext } from '../../contexts/filters';

export const FilterSection = ({ hdlCategory, hdlRange }) => {
    
    const { filter } = useContext( FilterContext );
    return (
        <aside>
            <select
                name="Categories"
                value={filter.category}
                onChange={hdlCategory}
            >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
            </select>
            <div>
                <label htmlFor="minRange">Minimum price:</label>
                <div>
                <input
                    id="inputRange"
                    name="minRange"
                    type="range"
                    min="0"
                    max="1000"
                    value={filter.minPrice}
                    onChange={hdlRange}
                />
                </div>
                <p>${filter.minPrice}</p>
            </div>
        </aside>
    );
}