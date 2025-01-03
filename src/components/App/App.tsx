import { Box } from '@chakra-ui/react'

import { Filter } from '@components/Filter/Filter.tsx'

export const App = () => {
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Filter />
		</Box>
	)
}
