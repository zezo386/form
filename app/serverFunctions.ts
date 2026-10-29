
import { GoogleSpreadsheet } from "google-spreadsheet";

interface Dependencies {
    doc: GoogleSpreadsheet
}

interface SentFormData {
    name: string,
    email: string,
    nationalId: string,
}

export function CreateServerFunctions({doc }: Dependencies) {
  
    async function add_data(data: SentFormData){
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({
            name: data.name,
            email: data.email,
            nationalId: data.nationalId
        });
    }

    return { add_data }
}

