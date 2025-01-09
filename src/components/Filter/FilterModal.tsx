import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Divider, ModalHeader } from '@chakra-ui/react'

import { useFilters } from '@api/queries/filter.ts'

import { ApplyNewFilterModal } from '@components/Filter/ApplyNewFilterModal/ApplyNewFilterModal.tsx'
import { FilterSection } from '@components/Filter/FilterSection/FilterSection.tsx'
import { ModalBase } from '@components/ModalBase/ModalBase'

export interface ModalProps {
	openModal: boolean
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal = ({ openModal, setOpenModal }: ModalProps) => {
	const { t } = useTranslation('filter')
	const { data: filters } = useFilters()
	const [isOpenApplyModal, setIsOpenApplyModal] = useState(false)

	const closeModal = useCallback(() => {
		setOpenModal(false)
	}, [])

	const openApplyModal = useCallback(() => {
		setIsOpenApplyModal(true)
	}, [])

	return (
		<ModalBase
			isOpen={openModal}
			onClose={closeModal}
		>
			<ModalHeader> {t('filter')}</ModalHeader>
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
				onClick={openApplyModal}
			>
				{t('apply')}
			</Button>
			<ApplyNewFilterModal
				openModal={isOpenApplyModal}
				setOpenModal={setIsOpenApplyModal}
			/>
		</ModalBase>
	)
}
