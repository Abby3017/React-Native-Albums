// import libraries to make componet
import React from 'react';
import { Text,View } from 'react-native';

//make a component
// const Header = () => {
//     return <Text>Albums!</Text>
// }

//make component to available to other part
// export default Header;

export default class Header extends React.Component {
    render() {
        return(<View>
            <Text>Albums!</Text>
            </View>
        );
    }
}