import React from "react";

function CategoryFilter({categories}) {

  const listOfCategories = categories.map(category => (
    <button key={category}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {listOfCategories}
    </div>
  );
}

export default CategoryFilter;
