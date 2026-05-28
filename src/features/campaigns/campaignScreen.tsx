import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CampaignForm from "../../components/CampaignForm/CampaignForm";
import CampaignList from "../../components/CampaignList/CampaignList";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  createCampaign,
  deleteCampaign,
  fetchCampaigns,
  updateCampaignStatus,
} from "./campaignSlice";

export default function CampaignScreen() {
//const fullState = useAppSelector((state) => state);

//console.log("Redux state:", fullState);

  const dispatch = useAppDispatch();

  const campaigns = useAppSelector((state) => state.campaigns.items);
  const loading = useAppSelector((state) => state.campaigns.loading);
  const error = useAppSelector((state) => state.campaigns.error);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container} stickyHeaderIndices = {[0]}>
        <View style={styles.sticky}>
            <Text style={styles.heading}>Campaign Manager</Text>

            <CampaignForm
                loading={loading}
                onSubmit={(values) => {
                dispatch(createCampaign(values));
                }}
            />
        </View>
      

      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>Campaigns</Text>

        <CampaignList
          campaigns={campaigns}
          loading={loading}
          error={error}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F9FAFB",
  },
  sticky: {
    backgroundColor: "#F9FAFB",
    zIndex: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  listSection: {
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
});