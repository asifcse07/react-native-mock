import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import color from '../config/color';
import Icons from '../components/Icons';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: 'My Play',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: color.primary
        }
    },
    {
        title: 'My Details',
        icon: {
            name: 'email',
            backgroundColor: color.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={'kalabagan'}
                    subTitle={'kalabagan@mail.com'}
                    image={require('../assets/cric_1.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={<Icons name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                        />
                    }/>
            </View>
            <View style={styles.container}>
                <ListItem
                    title={'Logout'}
                    ImageComponent={<Icons name={'logout'} backgroundColor={color.logout}/>}
                />
            </View>
        </Screen>
    );
}

const styles= StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: color.white,
        padding: 10,
    },
    screen: {
        backgroundColor: color.light
    }
})

export default AccountScreen;
