import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

interface ResetPasswordEmailProps {
	name?: string;
	resetLink?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const ResetPasswordEmail = ({
	name = "Usuário",
	resetLink = "",
}: ResetPasswordEmailProps) => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border bg-[#262626] border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Section className="mt-[32px] flex items-center justify-center">
							<Img
								src="https://drive.google.com/file/d/192IQXAkRLMuAFY1a7p2BH0UMC05iQotz/view?usp=sharing"
								width="320"
								height="60"
								alt="Notion's Logo"
							/>
						</Section>
						<Heading className="text-[#DDDDDD] text-[24px] font-normal text-center p-0 my-[24px] mx-0">
							<strong>Redefinir sua senha</strong>
						</Heading>
						<Text className="text-[#DDDDDD] text-[20px] leading-[24px] text-center">
							Olá, <strong>{name}</strong>
						</Text>
						<Text className="text-[#DDDDDD] text-[14px] leading-[24px] text-center">
							Você pode redefinir sua senha no{" "}
							<strong>Whisper Notes</strong> através desse link:
							<Link
								href={resetLink}
								className="block text-[#FFE700] no-underline"
							>
								Clique aqui para redefinir sua senha
							</Link>
						</Text>
						<Text className="text-[#737373] text-[14px] leading-[24px] text-center">
							Se você não deseja redefinir sua senha, pode ignorar
							esse e-mail.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ResetPasswordEmail;
