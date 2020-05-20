import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../components/ListItem';

function MessagesScreen(props) {
    const messages = [
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

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
            />
            }
        />
    );
}

export default MessagesScreen;
