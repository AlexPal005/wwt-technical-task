import { useTranslation } from 'react-i18next'

import {
	Button,
	CloseButton,
	Flex,
	Modal,
	ModalContent,
	ModalOverlay,
	Text
} from '@chakra-ui/react'

import { ModalProps } from '@components/Filter/FilterModal.tsx'
import { useFilterStore } from '@store'

export const ApplyNewFilterModal = ({
	openModal,
	setOpenModal
}: ModalProps) => {
	const { t } = useTranslation('filter')
	const filters = useFilterStore(state => state.filters)
	const setFilters = useFilterStore(state => state.setFilters)
	const applyFilters = () => {
		localStorage.setItem('filters', JSON.stringify(filters)) // add in local storage
		setOpenModal(false)
	}

	const useOldFilters = () => {
		const filtersFromStorage = JSON.parse(
			localStorage.getItem('filters') || '[]'
		)
		setFilters(filtersFromStorage)
		setOpenModal(false)
	}
	return (
		<Modal
			isOpen={openModal}
			closeOnOverlayClick={true}
			onClose={() => setOpenModal(false)}
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
				>
					{t('applyModalTitle')}
				</Text>
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
			</ModalContent>
		</Modal>
	)
}
