module.exports = (mongoose) => {
  const User = mongoose.model(
    'user',
    mongoose.Schema({
      "User": {
        "type": {
          "type": "String"
        },
        "properties": {
          "id": {
            "type": {
              "type": "String"
            },
            "format": {
              "type": "String"
            }
          },
          "username": {
            "type": {
              "type": "String"
            }
          },
          "firstName": {
            "type": {
              "type": "String"
            }
          },
          "lastName": {
            "type": {
              "type": "String"
            }
          },
          "email": {
            "type": {
              "type": "String"
            }
          },
          "password": {
            "type": {
              "type": "String"
            }
          },
          "phone": {
            "type": {
              "type": "String"
            }
          },
          "userStatus": {
            "type": {
              "type": "String"
            },
            "format": {
              "type": "String"
            },
            "description": {
              "type": "String"
            }
          }
        },
        "xml": {
          "name": {
            "type": "String"
          }
        }
      }
    })
  );

  return User;
};