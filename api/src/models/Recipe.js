const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step_by_step: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    diets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  });
};
