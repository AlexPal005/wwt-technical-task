import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Box,
	CloseButton,
	Divider,
	Modal,
	ModalContent,
	ModalOverlay,
	Text
} from '@chakra-ui/react'

import { useFilters } from '@api/queries/filter.ts'

import { FilterSection } from '@components/Filter/FilterSection/FilterSection.tsx'

export const FilterModal = () => {
	const { t } = useTranslation('filter')
	const [isOpenModal, setIsOpenModal] = useState(true)
	const { data: filters } = useFilters()

	return (
		<Modal
			isOpen={isOpenModal}
			onClose={() => setIsOpenModal(false)}
			closeOnOverlayClick={true}
		>
			<ModalOverlay />
			<ModalContent
				borderRadius="1rem"
				maxWidth="80rem"
				display="flex"
				alignItems="center"
				py="2.5rem"
			>
				<CloseButton
					size="lg"
					position="absolute"
					right="2rem"
					top="3.5rem"
					onClick={() => setIsOpenModal(false)}
				/>
				<Text
					fontSize="4xl"
					color="gray.500"
					mb="1.5rem"
				>
					{t('filter')}
				</Text>
				<Divider borderWidth="2px" />
				<Box width="100%">
					{filters?.map(filter => (
						<FilterSection
							key={filter.id}
							filter={filter}
						/>
					))}
				</Box>
			</ModalContent>
		</Modal>
	)
}
