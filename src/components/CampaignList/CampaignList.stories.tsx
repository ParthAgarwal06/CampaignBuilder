import CampaignList from "./CampaignList";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Campaign } from "../../features/campaigns/campaignTypes";
import { store } from "../../app/store";
import { Provider } from "react-redux";
const meta : Meta<typeof CampaignList> = {
    component: CampaignList,
    title: 'Components/CampaignList',
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
    args: {
        campaigns: [],
        error: null,
        loading: false
    }
}

export default meta;

type Story = StoryObj<typeof CampaignList>

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Summer Sale",
    message: "Get 30% off this weekend.",
    channel: "Email",
    status: "Draft",
  },
  {
    id: "2",
    title: "Flash SMS Offer",
    message: "Limited time offer. Shop now.",
    channel: "SMS",
    status: "Sent",
  },
  {
    id: "3",
    title: "Social Launch",
    message: "We are launching something new today.",
    channel: "Social",
    status: "Sent",
  },
];

export const Default : Story = {
    args: {
        campaigns: mockCampaigns
    }
};

export const WithError : Story = {
    args: {
        error: "Please try again"
    }
}

export const Loading : Story = {
    args: {
        loading: true
    }
}