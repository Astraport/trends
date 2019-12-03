var googleTrends = require("google-trends-api");
googleTrends.relatedQueries({keyword: 'Westminster Dog Show'})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
