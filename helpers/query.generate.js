const queryGenerate = (data) => {
  return data.join("=?, ") + "=?";
};

module.exports = queryGenerate;
