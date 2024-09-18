const reviewsCreate = (req, res) => {
    res.status(200).json({ "status": "success", "message": "reviewsCreate placeholder" });
  };
  
  const reviewsReadOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "reviewsReadOne placeholder" });
  };
  
  const reviewsUpdateOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "reviewsUpdateOne placeholder" });
  };
  
  const reviewsDeleteOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "reviewsDeleteOne placeholder" });
  };
  
  module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
  };
  