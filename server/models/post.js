module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    excerpt: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Post;
};
