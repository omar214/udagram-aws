import * as dotenv from 'dotenv';
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
	username: `${process.env.POSTGRES_USERNAME}`,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	port: Number(process.env.PORT),
	dbPort: Number(process.env.DB_PORT),
	host: process.env.POSTGRES_HOST,
	dialect: 'postgres',
	aws_region: process.env.AWS_REGION,
	aws_profile: process.env.AWS_PROFILE,
	aws_media_bucket: process.env.AWS_BUCKET,
	url: process.env.URL, // the front end URL
	AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
};
