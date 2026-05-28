import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import CampaignCard from '../CampaignCard/CampaignCard';
import { CampaignChannel } from '../ChannelChip/ChannelChip';
import { CampaignStatus } from '../StatusBadge/StatusBadge';
import { useAppDispatch } from '../../app/hooks';
import { deleteCampaign, updateCampaignStatus } from '../../features/campaigns/campaignSlice';

export type Campaign = {
  id: string;
  title: string;
  message?: string;
  channel: CampaignChannel;
  status: CampaignStatus;
};

type CampaignListProps = {
  campaigns: Campaign[];
  loading?: boolean;
  error?: string | null;
  //onDelete?: (id: string) => void;
  //onMarkSent?: (id: string) => void;
};

export default function CampaignList({
  campaigns,
  loading = false,
  error,
}: CampaignListProps) {
    const dispatch = useAppDispatch();
    const onDelete = (id : string) => {
        dispatch(deleteCampaign(id));
    }
    const onMarkSent = (id : string) => {
        dispatch(updateCampaignStatus(id));
    }
  if (loading) {
    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateTitle}>Loading campaigns...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.stateContainer}>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.stateMessage}>{error}</Text>
      </View>
    );
  }

  if (campaigns.length === 0) {
    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateTitle}>No campaigns yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={campaigns}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      pagingEnabled
      renderItem={({ item }) => (
        <CampaignCard
          id = {item.id}
          title={item.title}
          message={item.message}
          channel={item.channel}
          status={item.status}
          onDelete={() => onDelete?.(item.id)}
          onMarkSent={() => onMarkSent?.(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 12,
  },

  stateContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  stateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  errorTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 6,
  },

  stateMessage: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});