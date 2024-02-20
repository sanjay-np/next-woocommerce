import { ActionIcon, Button, Flex, Group, TextInput } from '@mantine/core'
import { ArrowRight, ArrowRightIcon, RefreshCwIcon } from 'lucide-react'
import React from 'react'

export default function Coupon() {
    return (
        <div>
            <Flex justify={'space-between'}>
                <Group>
                    <TextInput
                        placeholder="coupon code"
                    />
                    <ActionIcon
                        variant="gradient"
                        size="xl"
                        aria-label="Gradient action icon"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    >
                        <ArrowRightIcon />
                    </ActionIcon>
                </Group>
                <Button rightSection={<RefreshCwIcon size={14} />} variant="default">
                    Update cart
                </Button>
            </Flex>
        </div>
    )
}