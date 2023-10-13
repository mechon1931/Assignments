import { Platform, View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigatior = () => {
    const Stack = createStackNavigator();

    return(
        <DirectoryNavigatior>
            <Stack.Navigator
                initialRouteName='Directory'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff'
                }}
            >
                <Stack.Screen 
                    name='Directory'
                    component={DirectoryScreen}
                    options={{title: 'Campsite Directory'}}
                />
                <Stack.Screen 
                    name='CampsiteInfo'
                    component={CampsiteInfoScreen}
                    options={ ({ route }) => ({
                        title: route.params.campsite.name
                    })
                    }
                />
            </Stack.Navigator>
        </DirectoryNavigatior>
    )
}
const Main = () => {

    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <DirectoryNavigator
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <DirectoryNavigator
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;