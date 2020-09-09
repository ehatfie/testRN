import React, { Component } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, SectionList, SectionListData, SectionListStatic, SectionListRenderItemInfo, SectionListRenderItem
} from "react-native";

import SectionedListCell from './SectionedListCell'

interface SectionedListComponentProps {
    name: [String]
};

interface SectionedListComponentState {
    name: String
    // associate
};

interface Data {
    title: String
};

interface Data2<T = any> {
    
};


interface Section {
    data: any
}

interface Data {

}

type Assoc = {
    name: String
}

interface Group {
    groupName: String,
    active: Boolean
}

const MySectionList = SectionList as SectionListStatic<Section>;

function isAssoc(obj: any): obj is Assoc {
    return obj.name !== undefined
}

function isGroup(obj: any): obj is Group {
    return obj.groupName !== undefined
}
/*
interface SectionListData<T: AnyObject> {
    title: String
    let data: [T]
}
*/
const SomeValues: SectionListData<Section>[] = [
    {title: "GroupSection", data: [{data:{groupName: "groupName1", active:false}}]},
    {title: "AssocSection", data: [{data:{name: "assoc1"}}, {data:{name: "assoc22"}}]}
]
// return an optional??
const myRenderItem3 = ({data}: Section): JSX.Element | undefined => {
    
    //return <Text style={styles.cell}> ASSOC: {dataVal.active} </Text>
    if (isAssoc(data)) {
        let assoc = data as Assoc
        return <Text style={styles.cell}> {assoc.name} </Text>
    } else if (isGroup(data)) {
        let group = data as Group
        return <Text style={styles.cell}> {group.groupName} isActive {JSON.stringify(group.active)}</Text>
    } else {
        return <Text/>
    }
}


// return an optional??
const myRenderItem4 = ({data}: Section) => {
    // if (data as Assoc) {
    //     let assoc = data as Assoc
    //     return <Text style={styles.cell}> {assoc.name} </Text>
    // } else if (data as Group) {
    //     let group = data as Group
    //     return <Text style={styles.cell}> {group.groupName} isActive {JSON.stringify(group.active)}</Text>
    // } 
    return <Text style={styles.cell}> {JSON.stringify(data)} </Text>
}

function renderFooter(section: Section) {
    // if (section.title == "GroupSection" ) {
    //     //return <Text style={styles.footer}> Group Footer </Text>
    // }

    return <Text style={styles.footer}> {section.title} </Text>
}

export default class SectionedListComponent extends Component <SectionedListComponentProps, SectionedListComponentState> {
    
    state: SectionedListComponentState = {
        name: "someName"
    }

    render() {
        return (
            <SafeAreaView style={styles.outer}>
                <MySectionList
                    sections={SomeValues}
                    keyExtractor={(item:Section, index:number) => item.title + index.toString()}
                    renderItem={({item}: SectionListRenderItemInfo<Section>) => myRenderItem3(item)}//{ myRenderItem3 }
                    renderSectionHeader={({section}: {section: Section}) => (
                        <Text style={styles.header}>{section.title} </Text>
                      )}
                    renderSectionFooter={({section}: {section: Section}) => (renderFooter(section))}
                    //renderSectionFooter={({section}: {section: Section}) => (
                    //    renderFooter(section)
                     // )}
                    />
            </SafeAreaView>
        )
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
      alignSelf: 'center'
    },
    outer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    }, 
    header: {
        height: 50
    },
    footer: {
        borderWidth: 1,
    }
})