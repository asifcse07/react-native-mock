import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';

function MessagesScreen(props) {
    const initialMessages = [
        {
            id: 1,
            title: 'we',
            description: 'we are the champ',
            image: require('../assets/logo.jpg')
        },
        {
            id: 2,
            title: 'me',
            description: 'i am the champ',
            image: require('../assets/cric_logo.png')
        },
    ]

    const [messages, SetMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        SetMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('sd')}
                    renderRightActions={() => (
                            <ListItemDelete onPress={() => handleDelete(item)}/>
                            )}
                />
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>

    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
