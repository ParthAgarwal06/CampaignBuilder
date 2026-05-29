import CampaignCard from "./CampaignCard";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { action } from 'storybook/actions';

const meta : Meta<typeof CampaignCard> = {
    component: CampaignCard,
    title: 'Components/CampaignCard',
    tags: ['autodocs'],
    args: {
        onDelete: action('delete'),
        onMarkSent: action('send')
    }
}

export default meta;

type Story = StoryObj<typeof CampaignCard>

export const DraftCampaign : Story = {
    args: {
        title: 'Title',
        message: 'Campaign Message',
        status: 'Draft',
        channel: 'Email'
    }
};

export const SentCampaign : Story = {
    args: {
        title: 'Title',
        message: 'Campaign Message',
        status: 'Sent',
        channel: 'WhatsApp'
    }
};

export const DraftCampaignEmptyMessage : Story = {
    args: {
        title: 'Title',
        message: '',
        status: 'Draft',
        channel: 'Email'
    }
};
export const SentCampaignLongMessage : Story = {
    args: {
        title: 'Title',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus ut sapien nec sollicitudin. Curabitur cursus in elit malesuada lobortis. Donec posuere tempus lacus sed sollicitudin. Nulla tempor et mi condimentum mattis. In sit amet pulvinar ipsum, non viverra ipsum. Vestibulum pulvinar neque diam. Quisque eu purus posuere, condimentum ligula eu, mollis mauris. Suspendisse non porttitor ante, non pellentesque diam. Curabitur vitae ex ut arcu mollis pellentesque. Sed euismod ante at lectus rhoncus, ac eleifend elit ultrices. Suspendisse tempor et libero in mollis. Morbi nisl quam, congue in lorem id, pulvinar dapibus tortor. Phasellus fringilla nisi arcu, nec efficitur sapien placerat id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egesta',
        status: 'Sent',
        channel: 'Email'
    }
};