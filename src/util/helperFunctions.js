const helperFunctions = {
  beautifyBigCount(count) {
    if (count < 1000) return count;
    count = (count / 1000).toFixed(1);

    return count.endsWith('.0') ? count.slice(0, count.length - 2) + 'k' : count + 'k';
  },

  calculatePaginationComment(offset, reposCount) {
    const from = offset + 1;
    const to = (offset + 4) > reposCount ? reposCount : (offset + 4);

    return reposCount ? `${from}-${to} of ${reposCount} items` : null;
  }
};

export default helperFunctions;