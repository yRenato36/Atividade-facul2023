import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Post } from "../types/Posts";
import { axiosConfig } from "../lib/axios";
import { ListItem, Avatar, Divider } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosConfig.get("posts").then((resposta) => {
      setPosts(resposta.data.posts);
    });
  }, []);

  return (
    <ScrollView>
      {posts.map((product) => (
        <>
          <ListItem key={product.id}>
            <ListItemContent>
              <ListItemTitle style={styles.title}>
                {product.title}
              </ListItemTitle>
              <ListItemSubtitle style={styles.text}>{product.body}</ListItemSubtitle>
              <ListItemSubtitle style={styles.likes}>{product.reactions} likes</ListItemSubtitle>
            </ListItemContent>
          </ListItem>
          <Divider />
        </>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    color: "gray"
  },
  likes: {
    fontSize: 10,
    marginTop: 12,
    textAlign: "right",
    width: "100%",
    color: "gray"
  }
});

export default Home;
