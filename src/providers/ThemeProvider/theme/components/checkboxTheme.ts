import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const defaultControlStylesOnAction = {
	bg: 'white',
	borderColor: 'black'
}

const baseStyle = definePartsStyle({
	control: {
		bg: 'white',
		borderWidth: '0.0625rem',
		borderColor: 'black',
		borderRadius: 0,

		_hover: {
			...defaultControlStylesOnAction,
			_checked: defaultControlStylesOnAction
		},
		_checked: defaultControlStylesOnAction
	},
	icon: {
		color: 'black',
		// svg has inline stroke-width param, so I don't see any other way to set this parameter.
		strokeWidth: '0.0625rem!important'
	},
	label: {
		ml: '0.75rem'
	}
})

const smSize = definePartsStyle({
	control: {
		w: '1.25rem',
		h: '1.25rem'
	},
	icon: {
		fontSize: '0.75rem'
	}
})

const smThick = definePartsStyle({
	control: {
		w: '1.25rem',
		h: '1.25rem',
		borderWidth: '2px'
	},
	icon: {
		fontSize: '0.75rem'
	}
})

const mdSize = definePartsStyle({
	control: {
		w: '1.5rem',
		h: '1.5rem'
	},
	icon: {
		fontSize: '0.75rem'
	}
})

const rounded = definePartsStyle({
	control: {
		borderRadius: '3px'
	}
})

export const checkboxTheme = defineMultiStyleConfig({
	baseStyle,
	defaultProps: {
		size: 'md'
	},
	sizes: {
		md: mdSize,
		sm: smSize,
		smThick: smThick
	},
	variants: { rounded: rounded }
})
