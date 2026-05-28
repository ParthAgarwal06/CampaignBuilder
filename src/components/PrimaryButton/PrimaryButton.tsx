import React from 'react';
import {View, Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native'

type PrimaryButtonProps = {
    title: string,
    onPress: () => void,
    variant?: 'primary' | 'secondary',
    loading?: boolean
    disabled?: boolean
} 

export default function PrimaryButton({
    title, onPress, variant = 'primary', loading = false, disabled = false, 
} : PrimaryButtonProps) {
    const isDisabled = loading || disabled;
    return(
    <Pressable 
        disabled={isDisabled}
        onPress={onPress}
        style={({pressed}) => [
            styles.base,
            styles[variant],
            pressed && !isDisabled && styles.pressed,
            isDisabled && styles.disabled
        ]}
    >
        {
            loading ? 
                <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#111827'} />
                :
                <Text style={[styles.text, styles[`${variant}Text`]]} >
                    {title}
                </Text>
        
        }
    </Pressable>
    )
}

const styles = StyleSheet.create({
    base: {
        minHeight: 48,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    primary: {
        backgroundColor: '#111827',
    },

    secondary: {
        backgroundColor: '#E5E7EB',
    },
    pressed: {
        opacity: 0.85,
    },
    disabled: {
        opacity: 0.5
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },

    primaryText: {
        color: '#FFFFFF',
    },

    secondaryText: {
        color: '#111827',
    },
})