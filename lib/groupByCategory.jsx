export function groupByCategory(items)  {
  return items.reduce((groups, item) => {
    const category = item.categoryName || 'Uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
};
