import {ApiError} from './ApiError.js';

const paginateQuery = async (query, page = 1, limit = 10) => {
  if (page < 1 || limit < 1) {
    throw new ApiError(400, 'Page number and limit must be positive integers.');
  }

  const totalCount = await query.model.countDocuments(query._conditions);

  const lastPage = Math.max(Math.ceil(totalCount / limit), 1);

  // Adjust page number if it exceeds total pages
  const currentPage = Math.min(page, lastPage);

  const skipValue = (currentPage - 1) * limit;

  const documents = await query.skip(skipValue).limit(limit).exec();

  return {
    pagination: {
      currentPage,
      lastPage,
      limit,
      totalCount,
    },
    data: documents,
  };
};

export default paginateQuery;
