const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
// router.get("/", (req, res) => {
//   res.sendStatus(200);
// });

// Return all favorite images
router.get("/api/favorite", (req, res) => {
  const queryText = `SELECT * FROM "favorites";`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GETting favorite images", error);
      res.sendStatus(500);
    });
});


// POST /api/favorite (incomplete)
// For adding a new favorite image.
// You'll need to think about what is needed.
// Does it need a category?

// POST request for adding a new favorite image
router.post("/api/favorite", (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO "favorites" ("url", "category_id")
    VALUES ($1, $2)`;

  const queryValues = [newFavorite.url, newFavorite.category_id];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.status(201);
    })
    .catch((error) => {
      console.log("Error POSTing new favorite gif", error);
      res.sendStatus(500);
    });
});


// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});
/*
// update given favorite with a category id
router.put("/:favId", (req, res) => {
    
    const favId = req.params.favId;
    const category_id = req.body.category_id;
  
    // Update the favorite image with the given category_id in the database
    pool
      .query("UPDATE favorites SET category_id = $1 WHERE id = $2", [category_id, favId])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("Error updating favorite image:", error);
        res.sendStatus(500);
      });
  });
  */
  

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
