const locationsListByDistance = (req, res) => {
    res.status(200).json({ "status": "success", "message": "locationsListByDistance placeholder" });
  };
  
  const locationsCreate = (req, res) => {
    res.status(200).json({ "status": "success" });
  };
  
  const locationsReadOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "locationsReadOne placeholder" });
  };
  
  const locationsUpdateOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "locationsUpdateOne placeholder" });
  };
  
  const locationsDeleteOne = (req, res) => {
    res.status(200).json({ "status": "success", "message": "locationsDeleteOne placeholder" });
  };
  
  module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
  };
  