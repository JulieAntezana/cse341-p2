module.exports = (mongoose) => {
  const Flower = mongoose.model(
    'flower',
    mongoose.Schema({
      "Flower": {
        "type": {
          "type": "String"
        },
        "required": {
          "type": [
            "String"
          ]
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
          "category": {
            "$ref": {
              "type": "String"
            }
          },
          "name": {
            "type": {
              "type": "String"
            },
            "example": {
              "type": "String"
            }
          },
          "commonName": {
            "type": {
              "type": "String"
            }
          },
          "botanicalName": {
            "type": {
              "type": "String"
            }
          },
          "botanicalFamily": {
            "type": {
              "type": "String"
            }
          },
          "botanicalGenus": {
            "type": {
              "type": "String"
            }
          },
          "availability": {
            "type": {
              "type": "String"
            },
            "items": {
              "type": {
                "type": "String"
              },
              "properties": {
                "where": {
                  "type": {
                    "type": "String"
                  }
                },
                "when": {
                  "type": {
                    "type": "String"
                  }
                }
              }
            }
          },
          "vaseLife": {
            "type": {
              "type": "String"
            }
          },
          "description": {
            "type": {
              "type": "String"
            },
            "items": {
              "type": {
                "type": "String"
              },
              "properties": {
                "notes": {
                  "type": {
                    "type": "String"
                  }
                },
                "stemLength": {
                  "type": {
                    "type": "String"
                  }
                }
              }
            }
          },
          "colorRange": {
            "type": {
              "type": "String"
            }
          },
          "florist": {
            "type": {
              "type": "String"
            },
            "items": {
              "type": {
                "type": "String"
              },
              "properties": {
                "conditioning": {
                  "type": {
                    "type": "String"
                  }
                },
                "storage": {
                  "type": {
                    "type": "String"
                  }
                },
                "display": {
                  "type": {
                    "type": "String"
                  }
                },
                "stemType": {
                  "type": {
                    "type": "String"
                  }
                }
              }
            }
          },
          "homeCare": {
            "type": {
              "type": "String"
            }
          },
          "photoUrls": {
            "type": {
              "type": "String"
            },
            "xml": {
              "name": {
                "type": "String"
              },
              "wrapped": {
                "type": "Boolean"
              }
            },
            "items": {
              "type": {
                "type": "String"
              }
            }
          },
          "tags": {
            "type": {
              "type": "String"
            },
            "xml": {
              "name": {
                "type": "String"
              },
              "wrapped": {
                "type": "Boolean"
              }
            },
            "items": {
              "$ref": {
                "type": "String"
              }
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

  return Flower;
};

