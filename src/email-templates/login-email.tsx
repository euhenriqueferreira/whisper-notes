import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

interface LoginEmailProps {
	name?: string;
	magicLink?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const LoginEmail = ({
	name = "Usuário",
	magicLink = "",
}: LoginEmailProps) => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border bg-[#262626] border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Section className="mt-[32px] flex items-center justify-center">
							<Img
								src={`${baseUrl}/static/logo.svg`}
								width="320"
								height="60"
								alt="Notion's Logo"
							/>
						</Section>
						<Heading className="text-[#DDDDDD] text-[24px] font-normal text-center p-0 my-[24px] mx-0">
							<strong>Login com link</strong>
						</Heading>
						<Text className="text-[#DDDDDD] text-[20px] leading-[24px] text-center">
							Olá, <strong>{name}</strong>
						</Text>
						<Text className="text-[#DDDDDD] text-[14px] leading-[24px] text-center">
							Você pode fazer login no{" "}
							<strong>Whisper Notes</strong> através desse link:
							<Link
								href={magicLink}
								className="block text-[#FFE700] no-underline"
							>
								Clique aqui para fazer login no Whisper Notes
							</Link>
						</Text>
						<Text className="text-[#737373] text-[14px] leading-[24px] text-center">
							Se você não tentou fazer login, pode ignorar esse
							e-mail.
						</Text>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#737373] text-[12px] leading-[24px] text-center">
							<strong>Dica:</strong> você pode alterar o método de
							login e cadastrar uma senha alterando o método de
							login no seu perfil.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default LoginEmail;
