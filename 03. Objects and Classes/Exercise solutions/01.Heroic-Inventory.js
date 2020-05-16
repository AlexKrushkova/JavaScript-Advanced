function inventory(data) {
  return JSON.stringify(
    data.reduce((acc, heroString, i, arr) => {
      let [heroName, level, items] = heroString.split(" / ");
      acc.push({
        name: heroName,
        level: Number(level),
        items: items ? items.split(",").map((x) => x.trim()) : [],
      });
      return acc;
    }, [])
  );
}
