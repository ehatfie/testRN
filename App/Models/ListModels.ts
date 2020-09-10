export interface Section {
    data: any
}

export interface Person {
    name: String
}

export interface Group {
    groupName: String,
    active: Boolean
}

export const PersonValues: Section[] = [
    { data: { name: "name1"}},
    { data: { name: "name2"}},
    { data: { name: "name3"}},
    { data: { name: "name4"}},
]

export const GroupValues: Section[] = [
    { data: {groupName: "group1", active: true}},
    { data: {groupName: "group2", active: false}},
    { data: {groupName: "group3", active: false}},
    { data: {groupName: "group4", active: false}},
]