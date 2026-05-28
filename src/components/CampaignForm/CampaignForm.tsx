
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppTextInput from '../AppTextInput/AppTextInput';
import ChannelChip from '../ChannelChip/ChannelChip';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { CampaignChannel } from '../ChannelChip/ChannelChip';


type CampaignFormValues = {
  title: string;
  message: string;
  channel: CampaignChannel;
};


type CampaignFormProps = {
    onSubmit: (values : CampaignFormValues) => void,
    loading?: boolean,
}



export default function CampaignForm({
    onSubmit, loading
} : CampaignFormProps) {
    const [channel, setChannel] = useState<CampaignChannel>('SMS')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [titleError, setTitleError] = useState("");

    const handleSubmit = () => {
        if(!title.trim()) {
            setTitleError('Title can not be empty');
            return;
        } else {
            setTitleError('');
        }
        onSubmit({
            title: title.trim(),
            message: message.trim(),
            channel: channel
        })
        setMessage('');
        setChannel('SMS');
        setTitle('');
    }

    return(
        <View style={styles.container}>
            <AppTextInput label='Title' placeholder='Enter title' error={titleError} value={title} onChangeText={setTitle}/>
            <AppTextInput label='Message' placeholder='Enter message' value={message} onChangeText={setMessage}/>
            <ChannelChip onChange={setChannel} value={channel}/>
            <PrimaryButton variant='primary' title='Add draft' loading={loading} onPress={handleSubmit}/>
        </View>
    )
    
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});
