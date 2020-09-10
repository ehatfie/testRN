import React, { Component, FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  SectionListData,
  SectionListStatic,
  SectionListRenderItemInfo,
  SectionListRenderItem,
} from 'react-native';
import {
  Section,
  Person,
  Group,
  PersonValues,
  GroupValues,
} from '../Models/ListModels';
import { SectionedListCell, GroupCell, PersonCell, GroupFooter } from './SectionedListCell';

interface SectionedListComponentProps {
  name: [String];
}

interface SectionedListComponentState {
  name: String;

}

interface Data {
  title: String;
}

const MySectionList = SectionList as SectionListStatic<Section>;

function isPerson(obj: any): obj is Person {
  return obj.name !== undefined;
}

function isGroup(obj: any): obj is Group {
  return obj.groupName !== undefined;
}
/*
interface SectionListData<T: AnyObject> {
    title: String
    let data: [T]
}
*/

const GroupRenderItem = (something: SectionListRenderItemInfo<Section>) => {
  let isFirst = something.index === 0;
  let isLast = GroupValues.length == 1 && something.index === (GroupValues.length - 1)

  if(isGroup(something.item.data)) {
    let group = something.item.data as Group
    return <GroupCell data={group} isFirst={isFirst}/>
  }
  return null
}

const PersonRenderItem = (something: SectionListRenderItemInfo<Section>) => {
  let isFirst = something.index === 0;
  let isLast = something.index === (PersonValues.length - 1)

  if(isPerson(something.item.data)) {
    let person = something.item.data as Person
    return <PersonCell data={person} isFirst={isFirst} isLast={isLast}/>
  }
  return null
}

function renderFooter({section}: { section: SectionListData<Section> }) {
  if (section.key === "Group") {
    return <GroupFooter />
  }

  return null
}

const CellSeparator = () => {
  return (<View style={styles.separator} />)
}

const TableValues: SectionListData<Section>[] = [
  {key: 'Group', data: GroupValues, renderItem: GroupRenderItem},
  {key: 'Person', data: PersonValues, renderItem: PersonRenderItem}
];

export default class SectionedListComponent extends Component<
  SectionedListComponentProps,
  SectionedListComponentState
> {
  state: SectionedListComponentState = {
    name: 'someName',
  };

  render() {
    return (
      <SafeAreaView style={styles.outer}>
        <MySectionList
          sections={TableValues}
          keyExtractor={(item: Section, index: number) =>
            item + index.toString()
          }
          renderSectionHeader={(section: {section: SectionListData<Section>;}) => (
            <Text style={styles.header}>{section.section.key} </Text>
          )}
          renderSectionFooter={(info: { section: SectionListData<Section>}) => renderFooter(info)}
          ItemSeparatorComponent={CellSeparator}
        />
      </SafeAreaView>
    );
  }

  // public renderSectionHeader = ({section}: { section: SectionListData<Item>; }): ReactElement | null => (
  //      <ReactSectionHeader />
  //   )
}

const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    width: '100%',
    height: 75,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  outer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'gray'
  },
  header: {
    height: 50,
  },
  footer: {
    borderWidth: 1,
  },
  separator: {
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
    height: 1
  },
});
