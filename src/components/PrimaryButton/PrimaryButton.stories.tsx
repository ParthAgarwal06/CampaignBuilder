import PrimaryButton from "./PrimaryButton";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";

const meta : Meta<typeof PrimaryButton> = {
    component: PrimaryButton,
    title: 'Components/Button',
    tags: ['autodocs'],
    args: {
        title: 'Click',
        variant : 'primary',
        loading: false,
        disabled: false
    }
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>

export const primary: Story = {
    args: {
        variant: 'primary'
    }
}
export const secondary: Story = {
    args: {
        variant: 'secondary'
    }
}
export const loading: Story = {
    args: {
        loading: true
    }
}
export const disabled: Story = {
    args: {
        disabled: true
    }
}