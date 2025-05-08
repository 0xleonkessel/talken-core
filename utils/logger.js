function log(title, data) {
  console.log(`\n--- ${title} ---`);
  console.log(JSON.stringify(data, null, 2));
}

module.exports = { log };
