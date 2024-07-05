/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vokl01r4r20vmt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozcap88d",
    "name": "bloodType",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A+",
        "A-",
        "B+",
        "B -",
        "AB+",
        "AB-",
        "O+",
        "O-"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vokl01r4r20vmt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozcap88d",
    "name": "bloodType",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A",
        "B",
        "AB",
        "O"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
