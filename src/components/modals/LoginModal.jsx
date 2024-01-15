'use client'
import React from 'react'
import { Box, Button, Checkbox, Flex, Group, Modal, PasswordInput, Stack, TextInput, } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

export default function LoginModal(props) {

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			remember: false,
		},

		validate: {
			email: isEmail(),
			password: isNotEmpty(),
		},
	});

	return (
		<Modal opened={props.state} onClose={() => { props.method.close() }} centered>
			<div className="login-modal">
				<Box>
					<form onSubmit={form.onSubmit((values) => console.log(values))}>
						<div className="title-wrapper">
							<h1>Welcome back!</h1>
							<p>Do not have an account yet? Create account</p>
						</div>
						<div className="input-wrapper">
							<Stack gap="sm">
								<TextInput
									withAsterisk
									label="Email"
									placeholder="Your@email.com"
									{...form.getInputProps('email')}
								/>
								<PasswordInput
									withAsterisk
									label="Password"
									placeholder="Your password"
									{...form.getInputProps('password')}
								/>

								<Flex justify={'space-between'} align={'center'}>
									<Checkbox
										mt="sm"
										label="Remember me"
										{...form.getInputProps('remember', { type: 'checkbox' })}
									/>
									<a href="#" className='forgot'>Forgot Password?</a>
								</Flex>

							</Stack>
						</div>
						<Group justify="flex-end" mt="md">
							<Button type="submit" className='primary-btn'>Submit</Button>
						</Group>
					</form>
				</Box>
			</div>
		</Modal>
	)
}
