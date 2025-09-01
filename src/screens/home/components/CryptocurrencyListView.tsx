import React, {FC} from 'react'
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Cryptocurrency, CryptocurrencyList} from '~/resource'

interface CryptocurrencyListItemProps {
  onPress: Function
  item: Cryptocurrency
}

const CryptocurrencyListItem: FC<CryptocurrencyListItemProps> = ({item, onPress}) => {
  const handlePress = () => {
    onPress()
  }

  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) return 'N/A'
    return amount.toLocaleString()
  }

  const renderIcon = () => {
    if (item.icon) {
      return <Image source={{uri: item.icon}} style={styles.icon} />
    }

    return (
      <View style={styles.placeholderIcon}>
        <Text style={styles.placeholderText}>{item.code.charAt(0)}</Text>
      </View>
    )
  }

  const renderStatusBadges = () => {
    const badges = []

    if (item.isStableCoin) {
      badges.push(
        <View key='stable' style={styles.stableCoinBadge}>
          <Text style={styles.badgeText}>Stable</Text>
        </View>
      )
    }

    if (item.isSuspended) {
      badges.push(
        <View key='suspended' style={styles.suspendedBadge}>
          <Text style={styles.badgeText}>Suspended</Text>
        </View>
      )
    }
    return <View style={styles.statusContainer}>{badges}</View>
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>{renderIcon()}</View>

        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.code}>{item.code}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        {renderStatusBadges()}
        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Min Buy:</Text>
          <Text style={styles.amountValue}>{formatAmount(item.minBuyAmount)}</Text>
        </View>
        <View style={styles.supportContainer}>
          <Text style={styles.supportText}>
            Buy: {item.minBuyAmount > 0 ? '✓' : '✗'} | Sell: {item.isSellSupported ? '✓' : '✗'} | US:{' '}
            {item.isSupportedInUS ? '✓' : '✗'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

interface CryptocurrencyListProps {
  data: CryptocurrencyList
}

export const CryptocurrencyListView: FC<CryptocurrencyListProps> = ({data}) => {
  const handleItemPress = (item: Cryptocurrency) => {}

  const renderItem = ({item}: {item: Cryptocurrency}) => (
    <CryptocurrencyListItem item={item} onPress={handleItemPress} />
  )

  const keyExtractor = (item: Cryptocurrency) => item.id

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 8,
  },
  container: {
    width: width - 50,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  placeholderIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  code: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  network: {
    fontSize: 12,
    color: '#999',
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minWidth: 120,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 8,
  },
  stableCoinBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  suspendedBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '500',
  },
  amountContainer: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  amountLabel: {
    fontSize: 10,
    color: '#666',
  },
  amountValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  supportContainer: {
    alignItems: 'flex-end',
  },
  supportText: {
    fontSize: 10,
    color: '#666',
  },
})
