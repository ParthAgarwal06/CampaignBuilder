import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import StatusBadge from '../StatusBadge/StatusBadge';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

type CampaignCardProps = {
    id: string,
    title: string,
    message?: string,
    status: 'Draft' | 'Sent',
    channel: 'Email' | 'SMS' | 'WhatsApp' | 'Social',  
    onDelete: (id: string) => void,
    onMarkSent: (id: string) => void,
}

export default function CampaignCard({
    id, title, message, status, channel, onDelete, onMarkSent
} : CampaignCardProps) {
    return (
        <View style={styles.card}>
        <View style={styles.header}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.channel}>{channel}</Text>
            </View>
            <StatusBadge status={status} />
        </View>

        {message ? (
            <Text style={styles.message}>
            {message}
            </Text>
        ) : (
            <Text style={styles.emptyMessage}>No message added</Text>
        )}
        <PrimaryButton title='Delete' variant='primary' onPress={() => onDelete(id)}/>
        {status === 'Draft' ? 
            <PrimaryButton title='Send' variant='primary' onPress={() => onMarkSent(id)}/>
            :
            null
        }
        
        </View>
    );

}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    maxWidth: 256,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 10,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  channel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#6B7280",
  },

  message: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
    marginBottom: 12,
  },

  emptyMessage: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#9CA3AF",
    marginBottom: 12,
  },
});