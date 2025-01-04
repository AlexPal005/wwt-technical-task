import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Flex } from '@chakra-ui/react'

import { FilterModal } from '@components/Filter/FilterModal.tsx'

export const App = () => {
	const { t } = useTranslation('main')
	const [openModal, setOpenModal] = useState(false)
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Flex
				justify="center"
				align="center"
				minH="100dvh"
			>
				<Button
					colorScheme="brand"
					size="lg"
					onClick={() => setOpenModal(true)}
				>
					{t('openFilters')}
				</Button>
			</Flex>
			<FilterModal
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		</Box>
	)
}
