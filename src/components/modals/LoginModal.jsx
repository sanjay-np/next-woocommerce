'use client'
import React, { useState } from 'react'
import { Box, Button, Checkbox, Flex, Group, Modal, PasswordInput, Stack, TextInput, } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { loginFunc } from '@/query/session';
import { XIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateCustomer } from '@/store/reducers/sessionSlice';

export default function LoginModal(props) {

	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

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

	const handleFormSubmit = async (values) => {
		try {
			setLoading(true)
			const res = await loginFunc(values, localStorage.getItem('woo-session'))
			if (res?.errors && res?.errors.length > 0) {
				const msg = res?.errors[0]?.message
				switch (msg) {
					case "incorrect_password":
						notifications.show({
							title: "Login failed.",
							message: 'Please check you credentials and try again.',
							withCloseButton: true,
							icon: <XIcon />,
							color: "red"
						});
						break;
					case "invalid_username":
						notifications.show({
							title: "Login failed.",
							message: 'User not found with provided email address.',
							withCloseButton: true,
							icon: <XIcon />,
							color: "red"
						});
						break;
					case "invalid_email":
						notifications.show({
							title: "Login failed.",
							message: 'Entered email address not found.',
							withCloseButton: true,
							icon: <XIcon />,
							color: "red"
						});
						break;
				}
			} else {
				if (res?.data?.login) {
					dispatch(updateCustomer(res?.data?.login?.customer))
					// props.method.close()
				}
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false)
		}
	}
	return (
		<Modal opened={props.state} onClose={() => { props.method.close() }} centered>
			<div className="login-modal">
				<Box>
					<form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
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
							<Button type="submit" className='primary-btn' loading={loading}>Submit</Button>
						</Group>
					</form>
				</Box>
			</div>
		</Modal>
	)
}
