import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';

// Define the type for the tile data
interface Tile {
  id: string;
  title: string;
  isRed: boolean;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Sample data for the tile list
  const initialTileData: Tile[] = [
    { id: '1', title: 'Fiamma', isRed: false },
    { id: '2', title: 'Pili', isRed: false },
    { id: '3', title: 'Tile 3', isRed: false },
    { id: '4', title: 'Tile 4', isRed: false },
    { id: '5', title: 'Tile 5', isRed: false },
    { id: '6', title: 'Tile 6', isRed: false },
    { id: '7', title: 'Tile 7', isRed: false },
    { id: '8', title: 'Tile 8', isRed: false },
    { id: '9', title: 'Tile 9', isRed: false },
    { id: '10', title: 'Tile 10', isRed: false },
    { id: '11', title: 'Tile 11', isRed: false },
    { id: '12', title: 'Tile 12', isRed: false },
    { id: '13', title: 'Tile 13', isRed: false },
    { id: '14', title: 'Tile 14', isRed: false },
    { id: '15', title: 'Tile 15', isRed: false },
    { id: '16', title: 'Tile 16', isRed: false },
    { id: '17', title: 'Tile 17', isRed: false },
    { id: '18', title: 'Tile 18', isRed: false },
  ];

  const [tileData, setTileData] = useState<Tile[]>(initialTileData);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Toggle the color of the tile when clicked
  const handleTilePress = (id: string) => {
    const updatedTiles = tileData.map((tile) =>
      tile.id === id ? { ...tile, isRed: !tile.isRed } : tile
    );
    setTileData(updatedTiles);
  };

  // Render each tile with the appropriate color
  const renderItem: ListRenderItem<Tile> = ({ item }) => (
    <TouchableOpacity
      style={[styles.tile, { backgroundColor: item.isRed ? '#ff7f7f' : '#3498db' }]}
      onPress={() => handleTilePress(item.id)}
      testID= {`tile-${item.id}`}
      accessibilityLabel= {item.isRed ? 'red-tile' : 'blue-tile'}
    >
      <Text style={styles.tileText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Click me" onPress={incrementCounter} />

      <Text style={styles.header}>Tile List</Text>
      
      {/* FlatList to render the grid of tiles */}
      <FlatList
        data={tileData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}  // Renders in 2 columns
        contentContainerStyle={{ flexGrow: 1}}
        testID='tileList'
      />
    </SafeAreaView>
  );
};

// Define the styles for the grid layout and tiles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the container to take up the full screen
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  tileList: {
    justifyContent: 'center',
  },
  tile: {
    backgroundColor: '#3498db',
    flex: 1,
    margin: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tileText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;