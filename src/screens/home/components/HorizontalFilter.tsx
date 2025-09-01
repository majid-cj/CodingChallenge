import React, {FC} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native'

interface HorizontalFilterProps {
  data: Array<string>
  selected: string
  onSelect: Function
}

export const HorizontalFilter: FC<HorizontalFilterProps> = ({data, selected, onSelect}) => {
  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: selected === item ? 'green' : 'red'}]}
      onPress={() => onSelect(item)}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    marginHorizontal: 4,
    padding: 4,
    borderRadius: 4,
    width: 150,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
})
