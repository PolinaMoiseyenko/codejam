export default function (data, query) {
  if (data.name.toUpperCase().includes(query.toUpperCase()) || query === '') {
    return true;
  }
}
