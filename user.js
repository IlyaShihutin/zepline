const { fetchData } = require("./request")

export const request = (type) => {
  return fetchData(type).then(date => {
    return date;
  })
}
