const notFoundHandler = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 500;
  return next(error);
};

export default notFoundHandler;
