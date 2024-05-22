import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function ArticleList() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {}, []);

  return <ScrollView />;
}
