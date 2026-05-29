import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CampaignCard from '../CampaignCard/CampaignCard';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { CampaignChannel } from '../ChannelChip/ChannelChip';
import { CampaignStatus } from '../StatusBadge/StatusBadge';
import { useAppDispatch } from '../../app/hooks';
import {
  deleteCampaign,
  updateCampaignStatus,
} from '../../features/campaigns/campaignSlice';

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
};

const PAGE_SIZE = 3;

export default function CampaignList({
  campaigns,
  loading = false,
  error,
}: CampaignListProps) {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(campaigns.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedCampaigns = campaigns.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }

    if (campaigns.length === 0) {
      setCurrentPage(1);
    }
  }, [campaigns.length, currentPage, totalPages]);

  const onDelete = (id: string) => {
    dispatch(deleteCampaign(id));
  };

  const onMarkSent = (id: string) => {
    dispatch(updateCampaignStatus(id));
  };

  const goToPreviousPage = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage + 1, totalPages)
    );
  };

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
    <View>
      <FlatList
        data={paginatedCampaigns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <CampaignCard
            id={item.id}
            title={item.title}
            message={item.message}
            channel={item.channel}
            status={item.status}
            onDelete={() => onDelete(item.id)}
            onMarkSent={() => onMarkSent(item.id)}
          />
        )}
      />

      {totalPages > 1 && (
        <View style={styles.paginationContainer}>
          <View style={styles.paginationButtonWrapper}>
            <PrimaryButton
              title="Previous"
              variant="secondary"
              onPress={goToPreviousPage}
              disabled={currentPage === 1}
            />
          </View>

          <Text style={styles.pageText}>
            Page {currentPage} of {totalPages}
          </Text>

          <View style={styles.paginationButtonWrapper}>
            <PrimaryButton
              title="Next"
              variant="primary"
              onPress={goToNextPage}
              disabled={currentPage === totalPages}
            />
          </View>
        </View>
      )}
    </View>
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

  paginationContainer: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

  paginationButtonWrapper: {
    flex: 1,
  },

  pageText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
});