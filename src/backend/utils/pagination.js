const getPaginatedQuery = (pageNum, pageSize) => {
  const parsedPageNum = +(pageNum ?? 1);
  const parsedPageSize = +(pageSize ?? 5);
  const offset =
    parsedPageNum === 1 || parsedPageNum === 0
      ? 0
      : parsedPageNum * parsedPageSize - (parsedPageSize - 1);

  return `SELECT * FROM sets LIMIT ${pageSize} OFFSET ${offset}`;
};

module.exports = { getPaginatedQuery };
