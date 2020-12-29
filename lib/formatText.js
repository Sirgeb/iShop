function formatText(numberOfItems, collectionName) {
  if (numberOfItems === 0 || numberOfItems === 1) {
    return `${numberOfItems} ${collectionName} for You`;

  } else if (collectionName === "Wrist Watch") {
    return `${numberOfItems} ${collectionName}es for you`

  } else  {
    return `${numberOfItems} ${collectionName}s for you`
  }
}

export default formatText;
