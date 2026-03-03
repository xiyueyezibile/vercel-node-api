exports.getHome = (req, res) => {
  res.json({
    message: 'Hello from Vercel Node API!',
    status: 'success',
    timestamp: new Date().toISOString(),
  });
};
