import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

export type CampaignChannel = 'Email' | 'SMS' | 'WhatsApp' | 'Social';

type ChannelChipProps = {
  value: CampaignChannel;
  onChange: (channel: CampaignChannel) => void;
};

const channels: CampaignChannel[] = ['Email', 'SMS', 'WhatsApp', 'Social'];

export default function ChannelChip({ value, onChange }: ChannelChipProps) {
  return (
    <View style={styles.container}>
      {channels.map((channel) => {
        const selected = channel === value;

        return (
          <Pressable
            key={channel}
            style={[
              styles.base,
              selected && styles.selected,
            ]}
            onPress={() => onChange(channel)}
          >
            <Text style={[styles.text, selected && styles.selectedText]}>
              {channel}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12
  },

  base: {
    minHeight: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#111827',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  selected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },

  selectedText: {
    color: '#2563EB',
  },
});