app.patch("/product/:id", async (req, res) => {
  try {
    const filePath = `${__dirname}/db/products.json`;
    const stringifyProducts = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(stringifyProducts);
    
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    // מיזוג המידע הקיים עם המידע החדש מתוך ה-body
    products[productIndex] = { ...products[productIndex], ...req.body };
    
    await fs.writeFile(filePath, JSON.stringify(products));
    
    // מחזיר את המערך המעודכן כולו כפי שהתבקש
    res.json(products); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});