const ParentChildMap = (items) => {
  items.forEach((item) => {
    item.children = [];
    items.forEach((child) => {
      if (item.ID === child.parent) {
        item.children.push(child);
      }
    });
  });

  return items.filter((item) => !item.parent);
}

export default ParentChildMap;