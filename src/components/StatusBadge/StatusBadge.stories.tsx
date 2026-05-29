import StatusBadge from "./StatusBadge";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";

const meta : Meta<typeof StatusBadge> = {
    component: StatusBadge,
    title: 'Components/StatusBadge',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof StatusBadge>

export const Draft: Story = {
    args: {
        status: 'Draft'
    }
}
export const Sent: Story = {
    args: {
        status: 'Sent'
    }
}