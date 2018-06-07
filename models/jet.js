


module.exports = function(sequelize, DataTypes) {
    var SearchProperty = sequelize.define("SearchProperty", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return SearchProperty;
  };