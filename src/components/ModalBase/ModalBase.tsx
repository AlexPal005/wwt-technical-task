import React from 'react'

import {
	Flex,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react'

interface ModalBaseProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export const ModalBase = ({ isOpen, onClose, children }: ModalBaseProps) => {
	return (
		<Modal
			isOpen={isOpen}
			closeOnOverlayClick={true}
			onClose={onClose}
			size="xl"
		>
			<ModalOverlay />
			<ModalContent py="2.5rem">
				<ModalCloseButton size="lg" />
				<Flex
					alignItems="center"
					flexDirection="column"
				>
					{children}
				</Flex>
			</ModalContent>
		</Modal>
	)
}
