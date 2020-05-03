module.exports = (app) => {
  const router = require("express").Router();
  const mongoose = require("mongoose");

  const Category = mongoose.model("Category");
  const Article = mongoose.model("Article");

  router.get("/news/init", async (req, res) => {
    const parent = await Category.findOne({
      name: "news",
    });
    const cats = await Category.find()
      .where({
        parent: parent,
      })
      .lean();

    const newsTitles = [
      "4月27日全服不停机优化公告",
      "4月27日全服不停机更新公告",
      "与我为伍，彼此守护，瑶五五开黑节皮肤即将上架",
      "正式服预告丨恶火重铸身躯，地狱岩魂重塑归来！",
      "中国航天日x王者荣耀",
    ];
    const newsList = newsTitles.map((title) => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
      return {
        categories: randomCats.slice(0, 2),
        title: title,
      };
    });
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList);
  });
  router.get("/news/list", async (req, res) => {
    const parent = await Category.findOne({
      name: "news",
    });
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "categories",
          as: "newsList",
        },
      },
      {
        $addFields: {
          newsList: { $slice: ["$newsList", 5] },
        },
      },
    ]);
    cats.map((cat) => {
      cat.newsList.map((news) => {
        news.categoryName = cat.name;
        return news;
      });
      return cat;
    });
    res.send(cats);
  });
  app.use("/web/api", router);
};
