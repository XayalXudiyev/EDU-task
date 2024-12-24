import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useLoginMutation } from "../../store/services/authService";
import type { User } from "../../store/services/authService";

const loginSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z.string().min(4, "Password must be at least 6 characters"),
});
const Login = () => {
	const navigate = useNavigate();
	const { handleSubmit, control } = useForm({
		resolver: zodResolver(loginSchema),
	});

	const [login, { data, isLoading, isError, error }] = useLoginMutation();

	const onSubmit = async (data: User) => {
		try {
			await login(data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		if (data) {
			navigate("/universities");
		}
	}, [data, navigate]);

	return (
		<>
			<Form
				layout="vertical"
				onFinish={handleSubmit(onSubmit)}
				className="flex flex-col items-center justify-center w-full min-h-screen mx-auto"
			>
				<div className="w-1/3">
					<div className="flex flex-col w-full mb-12 text-center">
						<span className="text-5xl text-[#6667AB] mb-3">LOGO</span>
						<span className="text-lg text-[#979797]">
							Welcome Back. Please enter your details.
						</span>
					</div>

					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<Form.Item label="Email" name="email">
								<Input {...field} />
							</Form.Item>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<Form.Item label="Password" name="password">
								<Input.Password {...field} />
							</Form.Item>
						)}
					/>

					{isError && (
						<div style={{ color: "red" }}>
							{error?.message || "Invalid email or password. Please try again."}
						</div>
					)}

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							loading={isLoading}
							className="w-full rounded-2xl"
						>
							Submit
						</Button>
					</Form.Item>
				</div>
			</Form>
		</>
	);
};

export default Login;
