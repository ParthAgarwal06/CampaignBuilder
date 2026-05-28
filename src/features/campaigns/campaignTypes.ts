import { CampaignChannel } from "../../components/ChannelChip/ChannelChip";
import { CampaignStatus } from "../../components/StatusBadge/StatusBadge";

export type Campaign = {
  id: string;
  title: string;
  message: string;
  channel: CampaignChannel;
  status: CampaignStatus;
};

export type CampaignState = {
  items: Campaign[];
  loading: boolean;
  error: string | null;
};

export type CreateCampaignInput = {
  title: string;
  message: string;
  channel: CampaignChannel;
};