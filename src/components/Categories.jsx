import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({title, children}) =>(
    <React.Fragment>
        <h2 className="categories__title">{title}</h2>
        {children}
    </React.Fragment>
)

export default Categories;