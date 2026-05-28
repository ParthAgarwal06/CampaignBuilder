import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export type CampaignStatus = 'Draft' | 'Sent';

type StatusBadgeProps = {
    status: CampaignStatus,
}

export default function StatusBadge({
    status,
} : StatusBadgeProps) {
    return (
        <View style={[
            styles.base,
            styles[status]
        ]}>
            <Text style={styles.text}>{status}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    base: {
        minHeight: 30,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Draft: {
        backgroundColor: '#f59037'
    },
    Sent: {
        backgroundColor: '#1dcd5a'
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: '#ffffff',
    }
})