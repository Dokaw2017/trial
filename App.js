import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

const catsArray = [
  {
    name: "Cat-1",
    description:
      "Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!",
    img: require("./assets/cat2.jpg")
  },
  {
    name: "Cat-2",
    description:
      "Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!Hello,Gorgeous! how are you doing? Hope fine!I am alive today!",
    img: require("./assets/cat3.jpg")
  }
];

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#8ccb62"
        barStyle="light-content"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <Image style={styles.cat1} source={require("./assets/cat1.jpg")} />
        <Text style={styles.cat1text}>1435 Homeless Cats</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={catsArray}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.agdim}>
                <View style={styles.homelessdimet}>
                  <Image source={item.img} style={styles.homeless_sile} />
                </View>
                <View style={styles.homeless_mereja}>
                  <Text style={styles.listTitle}>{item.name}</Text>
                  <Text>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: "powderblue",
    borderBottomColor: "#8ccb62",
    borderBottomWidth: 5
  },
  cat1: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: "stretch"
  },

  list: {
    flex: 3,
    backgroundColor: "white",
    marginTop: 5
  },
  cat1text: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 30,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    fontWeight: "bold"
  },

  agdim: {
    padding: 15,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    elevation: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#eee",
    marginBottom: 5,
    borderRadius: 0
  },
  homelessdimet: {
    flex: 1,
    backgroundColor: "pink"
  },
  homeless_sile: {
    width: "100%",
    height: 100,
    borderRadius: 50,
    marginTop: 20
  },
  homeless_mereja: {
    flex: 2,
    padding: 10
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
