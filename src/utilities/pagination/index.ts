type KeyValuePairNamed = [key: string, value: Array<any>];

export type Pagination = {
  currentPage: number,
  totalPages: number,
  totalItems: number
};

export type PaginatedResponse = {
  [key: string]: any,
  pagination: Pagination
};

export const paginate = (data: any, pageNumber: number, pageSize: number = 10) => {
  const [key, items] = Object.entries<KeyValuePairNamed>(data)[0];
  const startIndex: number = (pageNumber - 1) * pageSize;
  const totalItems: number = items.length;
  const totalPages: number = Math.ceil(totalItems / pageSize);
  const pagination: PaginatedResponse =  {
    [key]: items.slice(startIndex, startIndex + pageSize),
    pagination: {
      currentPage: pageNumber,
      totalPages: totalPages,
      totalItems: totalItems,
    },
  }

  return pagination
};
