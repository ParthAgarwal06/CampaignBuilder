import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Button } from './src/components/Button';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import PrimaryButton from './src/components/PrimaryButton/PrimaryButton';
import AppTextInput from './src/components/AppTextInput/AppTextInput';
import ChannelChip from './src/components/ChannelChip/ChannelChip';
import StatusBadge from './src/components/StatusBadge/StatusBadge';
import CampaignCard from './src/components/CampaignCard/CampaignCard';
import CampaignForm from './src/components/CampaignForm/CampaignForm';
import CampaignScreen from './src/features/campaigns/campaignScreen';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

    <CampaignScreen />


      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
