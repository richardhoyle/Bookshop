router.post("/", async (req, res) => {
  try {
    const author = await new Author({ name: req.body.name});

  

    await author.save();
    res.redirect("authors");
  } catch {
      res.status(404);

          res.render("authors/new", {
        author: author,
        errorMessage: "There was an error creating the Author"
      })
      
    res.send({ error: "Post doesn't exist!" });
  }
});
