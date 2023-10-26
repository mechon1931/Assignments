import {
    FlatList,
    StyleSheet, 
    Text, 
    View,
    Button,
    Modal,
} from 'react-native';
import { Rating, Input } from 'react-native-elements';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { postComment } from '../features/comments/commentsSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newComment = {
            author,
            rating,
            text,
            campsiteId: campsite.id
        };
        dispatch(postComment(newComment));
    };

    const resetForm = () => {
        setAuthor('');
        setRating(5);
        setText('');
    };

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating
                    startingValue={item.rating}
                    imageSize={10}
                    style={{ alignitems: 'flex-start', paddingVertical: '5%' }}
                    readonly
                />
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <>
        <FlatList
            data={comments.commentsArray.filter(
                (comment) => comment.campsiteId === campsite.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertical: 20
            }}
            ListHeaderComponent={
                <>
                    <RenderCampsite
                        campsite={campsite}
                        isFavorite={favorites.includes(campsite.id)}
                        markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                        onShowModal={() => setShowModal(!showModal)}
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />

        <Modal
            animationType='slide'
            transparent={false}
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
        >
            
            <View style={ styles.modal }>
            <Rating
                showRating
                startingValue={rating}
                imageSize={40}
                onFinishRating={(rating) => setRating(rating)}
                style={{paddingVertical: 30}}
            >
            </Rating>
            <Input
                placeholder="Author"
                leftIcon={{ type: 'font-awesome', name: 'user-o' }} // Use the Font Awesome user-o icon
                leftIconContainerStyle={{ paddingRight: 10 }}
                onChangeText={(author) => setAuthor(author)} // Update the 'author' state when the text changes
                value={author} // Bind the value to the 'author' state
            />
            <Input
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment-o' }} // Use the Font Awesome comment-o icon
                leftIconContainerStyle={{ paddingRight: 10 }}
                onChangeText={(comment) => setText(comment)} // Update the 'comment' state when the text changes
                value={text} // Bind the value to the 'text' state
            />

            <View style={ styles.SubmitStyleBorder }>
                <Button 
                    title='Submit'
                    color="white"
                    onPress={() => {
                        handleSubmit();
                        resetForm();
                    }}
                />
            </View>
                <View style={ styles.ButtonCancelStyle }>
                    <Button 
                        onPress={() => {
                            setShowModal(!showModal);
                            resetForm();
                        }}
                        color='white'
                        title='Cancel'
                    />
                </View>
            </View>
        </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    SubmitStyleBorder: {
        margin: 10,
        borderWidth: 1, 
        backgroundColor: '#5637DD'
    }, 
    ButtonCancelStyle: {
        margin: 10,
        borderWidth: 1,
        backgroundColor: '#808080'
    }
});

export default CampsiteInfoScreen;