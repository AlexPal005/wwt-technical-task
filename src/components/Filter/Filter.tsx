import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Divider,
	Modal,
	ModalContent,
	ModalOverlay,
	Text
} from '@chakra-ui/react'

export const Filter = () => {
	const { t } = useTranslation('filter')
	const [isOpenModal, setIsOpenModal] = useState(true)
	return (
		<Modal
			isOpen={isOpenModal}
			onClose={() => setIsOpenModal(false)}
			closeOnOverlayClick={true}
		>
			<ModalOverlay />
			<ModalContent
				borderRadius="1rem"
				maxWidth="1280px"
				display="flex"
				alignItems="center"
			>
				<Text
					fontSize="4xl"
					color="gray.500"
				>
					{t('filter')}
				</Text>
				<Divider />
			</ModalContent>
		</Modal>
	)
}
