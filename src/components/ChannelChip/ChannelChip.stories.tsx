import ChannelChip from "./ChannelChip";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";

const meta : Meta<typeof ChannelChip> = {
    component: ChannelChip,
    title: 'Components/ChannelChip',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof ChannelChip>

export const Email : Story = {
    args: {
        value: 'Email'
    }
};

export const SMS : Story = {
    args: {
        value: 'SMS'
    }
};

export const WhatsApp : Story = {
    args: {
        value: 'WhatsApp'
    }
};

export const Social : Story = {
    args: {
        value: 'Social'
    }
};