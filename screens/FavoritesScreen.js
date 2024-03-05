import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeal = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoritesMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have not favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeal} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
