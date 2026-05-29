import AppTextInput from "./AppTextInput";
import { Meta, StoryObj } from "@storybook/react-native-web-vite";

const meta : Meta<typeof AppTextInput> = {
    component: AppTextInput,
    title: 'Components/AppTextInput',
    tags: ['autodocs'],
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        value: 'Value',
        error: ''
    }
}

export default meta;

type Story = StoryObj<typeof AppTextInput>

export const Normal : Story = {
    args: {
        placeholder: ''
    }
};

export const WithError : Story = {
    args: {
        error: "Please try again"
    }
}

export const WithPlaceholder : Story = {
    args: {
        value: ''
    }
}