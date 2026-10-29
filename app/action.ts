import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { CreateServerFunctions } from "./serverFunctions";


const serviceAccount = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SPREADSHEET_ID as string,
    serviceAccount
);

export const {add_data} = CreateServerFunctions({doc});
