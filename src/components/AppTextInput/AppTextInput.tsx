import React from 'react';
import {TextInput, Text, View, TextInputProps, StyleSheet} from 'react-native'

type AppTextInputProps = TextInputProps & {
    label?: string,
    error?: string,
}
export default function AppTextInput({
    label, placeholder, value, error, onChangeText
} : AppTextInputProps) {
    const hasError = Boolean(error)
    return(
    <View
        style={styles.base}
    >
        {
            label ? 
                <Text style={styles.label}>{label}</Text>
                :
                null
        }
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            style={styles.input}
        />
        {
            hasError ?
                <Text style={styles.error}>{error}</Text>
                :
                null
        }

    </View>
    )
}

const styles = StyleSheet.create({    
    base: {
        minWidth: 96,
        marginBottom: 16,
    },

    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#111827",
        marginBottom: 6,
    },

    input: {
        minHeight: 48,
        borderWidth: 2,
        borderColor: "#D1D5DB",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 16,
        color: "#111827",
        backgroundColor: "#FFFFFF",
    },
    error: {
        fontSize: 13,
        color: "#EF4444",
        marginTop: 6,
    }
})