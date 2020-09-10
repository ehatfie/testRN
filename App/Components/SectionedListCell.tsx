import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Person, Group } from '../Models/ListModels'

export const SectionedListCell: FunctionComponent<{initial?: number}> = ({ initial = 0}) => {
  const [value, setValue] = useState(initial)
  return (
    <View>
      <Text>HELLO {value}</Text>
    </View>
  )
}

interface GroupCellProps {
  data: Group
  isFirst: Boolean,
  isLast: Boolean,
  // pass styles in here??
}

interface PersonCellProps {
  data: Person
  isFirst: Boolean,
  isLast: Boolean,
  // pass styles in here??
}

export const GroupCell: FunctionComponent<{data: Group, isFirst: Boolean}> = ({data, isFirst}) => {
  let styleArray: any[] = [styles.cell]

  if (isFirst === true) {
    styleArray.push(styles.topRounded)
  }

  return (
    <View style={styleArray}>
      <Text>Group {data.groupName} </Text>
    </View>
  )
}
// group footer
export const GroupFooter = () => {
  
  return (
    <View style={[styles.cell, styles.bottomRounded, styles.topBorder]}>
      <View style={styles.body}>
        <Text>FOOTER</Text>
      </View>
    </View>
  )
}

export const PersonCell: FunctionComponent<{ data: Person, isFirst: Boolean, isLast: Boolean }> = ({data, isFirst, isLast}) => {
  let styleArray: any[] = [styles.cell]

  if (isFirst === true) {
    styleArray.push(styles.topRounded)
  }

  if (isLast === true) {
    styleArray.push(styles.bottomRounded)
  }

  return (
    <View style={styleArray}>
      <View style={styles.body}>
        <Text>Person a{data.name}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create( {
  cell: {
    height: 55,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white'
  },
  topRounded: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomRounded: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topBorder: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  border: {
    borderWidth: 1,
    borderColor: 'black'
  }, 
  body: {
    marginTop: 10,
    marginLeft: 10,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  }
})
//export default SectionedListCell;