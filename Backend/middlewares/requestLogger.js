const logRequest = (req, res, next) => {
  console.log("Request Headers:", req.headers);
  console.log("Raw Request Body:", req.rawBody); 
  next();
};

export { logRequest };
