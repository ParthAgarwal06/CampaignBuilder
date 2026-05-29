import CampaignForm from "./CampaignForm";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { action } from 'storybook/actions';

const meta : Meta<typeof CampaignForm> = {
    component: CampaignForm,
    title: 'Components/CampaignForm',
    tags: ['autodocs'],
    args: {
        onSubmit: action('form submitted'),
    }
}

export default meta;

type Story = StoryObj<typeof CampaignForm>

export const Default : Story = {
    args: {
        loading: false
    }
};

export const Loading: Story = {
    args: {
        loading: true
    }
}