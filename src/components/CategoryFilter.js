import React from "react";

function CategoryFilter({categories, filterSelectedCategoryTasks}) {

  function selectedButton(event) {
    const siblings = [...event.target.parentElement.children];
    siblings.map(sibling => sibling.className = "");
    event.target.className = "selected";
    filterSelectedCategoryTasks(event)
  }

  const listOfCategories = categories.map(category => (
    <button key={category} onClick={selectedButton}>{category}</button>
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
