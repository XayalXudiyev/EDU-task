import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

import { Avatar, Button, Col, Layout, Menu, Typography, theme } from "antd";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

interface ILink {
	name: string;
	icon: JSX.Element;
	path: string;
}

const MainLayout: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const links: ILink[] = [
		{
			name: "Universities",
			icon: <FaUniversity size={18} />,
			path: "/universities",
		},
		{
			name: "Schools",
			icon: <FaSchool size={18} />,
			path: "/schools",
		},

		{
			name: "HighSchools",
			icon: <IoSchool size={18} />,
			path: "/high-schools",
		},
	];

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{ backgroundColor: "", height: "1200px" }}
			>
				<div
					style={{
						color: "white",
						fontSize: "20px",
						padding: "10px",
						marginTop: "10px",
					}}
				>
					LOGO
				</div>
				<Menu
					style={{ marginTop: "20px", backgroundColor: "transparent" }}
					mode="inline"
					theme="dark"
					items={links.map((link) => ({
						key: link.path,
						icon: link.icon,
						label: (
							<NavLink
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
								to={link.path}
							>
								{link.name}
							</NavLink>
						),
					}))}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: "white",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
							color: "black",
						}}
					/>
					<Col
						style={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							gap: "15px",
							marginRight: "30px",
						}}
					>
						<Avatar size={40} icon={<UserOutlined />} />
						<Col
							style={{
								display: "flex",
								flexDirection: "column",
								textAlign: "start",
							}}
						>
							<Text>USER</Text>
						</Col>
						<Button className="p-0 bg-transparent border-0 shadow-none outline-none">
							<AiOutlineLogout size={20} />
						</Button>
					</Col>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
