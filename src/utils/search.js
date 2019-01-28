export default function (data, query) {
  const keys = query.split(' ');
  const includes = keys.some(key => data.name.toUpperCase().includes(key.toUpperCase())
                             || data.geoname.toUpperCase().includes(key.toUpperCase()));
  return includes;
}
