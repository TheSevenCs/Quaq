import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import EquipmentGroup from "./EquipmentGroup";

const Flexbox2x6 = ({ data, onUpdateTitle }) => {
  const [items, setItems] = useState(data);

  const handleEditComplete = (index, newTitle) => {
    const updatedItems = [...items];
    updatedItems[index].title = newTitle;
    setItems(updatedItems);
    onUpdateTitle(updatedItems); // Optional: Pass updated data back to the parent component
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {items.map((item, index) => (
          <EquipmentGroup
            key={index}
            title={item.title}
            onEditComplete={(newTitle) => handleEditComplete(index, newTitle)}
            style={styles.item}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Center the innerContainer horizontally
    width: "100%", // Ensure container spans full width
  },
  innerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // Align items to the start of the row
    alignItems: "flex-start", // Align items to the start of the column
    width: "75%", // Adjust width as needed
    gap: 20, // Adjust gap as needed
  },
  item: {
    width: "48%", // Adjust width to fit within columns
    height: 111,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

export default Flexbox2x6;
