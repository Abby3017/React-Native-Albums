import React from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = { albums: [] };


    ///
    //componentWillMount() is invoked just before mounting occurs.
    // It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering.
    // Generally, we recommend using the constructor() instead
    ///
    componentWillMount() {
        axios.get( "https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState( { albums: response.data} ));
        // console.log('willmount');
    }

    renderAlbums() {
        return this.state.albums.map( album => 
        /* <Text key={album.title}>{album.title} </Text>  */
        <AlbumDetail key={album.title} record={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
}

export default AlbumList;