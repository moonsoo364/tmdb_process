export default function transformId(results) {
  return results.map(item => {
    const { id, ...rest } = item;
    return {
      _id: id,
      ...rest
    };
  });
}

export function mapMongoDoc(doc) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return { id: _id, ...rest };
}

export function mapMongoDocs(docs) {
  return docs.map(mapMongoDoc);
}
