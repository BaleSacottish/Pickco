import { Text, View, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

import { fontFamily,fontSize } from '../contrans/fonts'
import colors from '../contrans/colors'
import globalStyles from '../contrans/globlaeStyles'

/**
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @param {ViewStyle} props.containerStyle
 * @param {number} props.activeOpacity
 * @param {string} props.text
 * @param {boolean} props.disabled
 * @param {string} props.textColor
 * @param {TextStyle} props.textStyle
 * @param {() => void} props.onPress
 */

const Botton = ({
    containerStyle,
    text,
    activeOpacity,
    children,
    disabled = false,
    textColor,
    textStyle,
    onPress,
}) => {

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            disabled={disabled}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: colors.white,
                borderRadius: 24,
                paddingHorizontal: 24,
                paddingVertical: 12,
                ...globalStyles.shadow_5,
                ...containerStyle,
            }}
            onPress={() =>
                onPress ? onPress() : null
            }
        >
            {text ? (
                <Text
                    style={{
                        fontFamily: fontFamily.bold,
                        fontSize: fontSize.font_18,
                        color: textColor || colors.orange1,
                        ...textStyle
                    }}
                >
                    {text}
                </Text>
            ) : null
            }
            {children}
        </TouchableOpacity>
    )
}

export default Botton