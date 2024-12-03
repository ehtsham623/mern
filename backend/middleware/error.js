const errorHandler = (err, req, res, next) => {
  err.status ? res.status(err.status) : res.status(500);

  res.json({
    message: err.message,
    data: err.data,
    stack: process.env.ENVIORNMENT === "dev" ? err.stack : null,
  });

  next();
};

export default errorHandler;
