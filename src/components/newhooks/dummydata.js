const dummydata = () => {
  let data = [];

  for (let i = 0; i <= 10000; i++) {
    data = [...data, `people ${i} `];
  }
  return data;
};

export default dummydata;
