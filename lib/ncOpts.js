export const ncOpts = {
  onError: (error, req, res, next) => {
    console.error(error);
    res.status(500).send(error);
  },
  onNoMatch: (req, res) => {
    res.status(404).send("Not Found");
  },
};
