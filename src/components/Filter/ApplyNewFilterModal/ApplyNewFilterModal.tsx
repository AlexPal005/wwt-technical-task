import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Flex, ModalHeader } from '@chakra-ui/react'

import { ModalProps } from '@components/Filter/FilterModal.tsx'
import { ModalBase } from '@components/ModalBase/ModalBase.tsx'
import { useFilterStore } from '@store'

export const ApplyNewFilterModal = ({
	openModal,
	setOpenModal
}: ModalProps) => {
	const { t } = useTranslation('filter')
	const filters = useFilterStore(state => state.filters)
	const setFilters = useFilterStore(state => state.setFilters)

	const applyFilters = useCallback(() => {
		localStorage.setItem('filters', JSON.stringify(filters)) // add in local storage
		setOpenModal(false)
	}, [filters, localStorage])

	const useOldFilters = useCallback(() => {
		const filtersFromStorage = JSON.parse(
			localStorage.getItem('filters') || '[]'
		)
		setFilters(filtersFromStorage)
		setOpenModal(false)
	}, [localStorage])

	const closeFilterModal = useCallback(() => {
		setOpenModal(false)
	}, [])

	return (
		<ModalBase
			isOpen={openModal}
			onClose={closeFilterModal}
		>
			<ModalHeader> {t('applyModalTitle')}</ModalHeader>
			<Flex
				gap="2rem"
				mt="7.5rem"
			>
				<Button
					variant="outline"
					size="lg"
					width="17.5rem"
					onClick={useOldFilters}
				>
					{t('useOld')}
				</Button>
				<Button
					colorScheme="brand"
					size="lg"
					width="17.5rem"
					onClick={applyFilters}
				>
					{t('applyNew')}
				</Button>
			</Flex>
		</ModalBase>
	)
}
