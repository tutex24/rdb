/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vokl01r4r20vmt")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "doo6lrmy",
    "name": "weight",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4a1buzuu",
    "name": "height",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mefgpctm",
    "name": "allergies",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txylirdn",
    "name": "medicalHistory",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vokl01r4r20vmt")

  // remove
  collection.schema.removeField("ozcap88d")

  // remove
  collection.schema.removeField("doo6lrmy")

  // remove
  collection.schema.removeField("4a1buzuu")

  // remove
  collection.schema.removeField("mefgpctm")

  // remove
  collection.schema.removeField("txylirdn")

  return dao.saveCollection(collection)
})
