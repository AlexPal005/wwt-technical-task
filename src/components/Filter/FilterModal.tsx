import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Box,
	Button,
	CloseButton,
	Divider,
	Modal,
	ModalContent,
	ModalOverlay,
	Text
} from '@chakra-ui/react'

import { useFilters } from '@api/queries/filter.ts'

import { ApplyNewFilterModal } from '@components/Filter/ApplyNewFilterModal/ApplyNewFilterModal.tsx'
import { FilterSection } from '@components/Filter/FilterSection/FilterSection.tsx'

export interface ModalProps {
	openModal: boolean
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal = ({ openModal, setOpenModal }: ModalProps) => {
	const { t } = useTranslation('filter')
	const { data: filters } = useFilters()
	const [openApplyModal, setOpenApplyModal] = useState(false)

	return (
		<Modal
			isOpen={openModal}
			onClose={() => setOpenModal(false)}
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
					onClick={() => setOpenModal(false)}
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
				<Button
					colorScheme="brand"
					size="lg"
					mt="2rem"
					width="11.5rem"
					onClick={() => {
						setOpenApplyModal(true)
					}}
				>
					{t('apply')}
				</Button>
			</ModalContent>
			<ApplyNewFilterModal
				openModal={openApplyModal}
				setOpenModal={setOpenApplyModal}
			/>
		</Modal>
	)
}
