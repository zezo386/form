import { GoogleSpreadsheet } from 'google-spreadsheet';

interface Dependencies {
  doc: GoogleSpreadsheet;
}

export function CreateServerFunctions({ doc }: Dependencies) {
  async function addData(data: FormData): Promise<void> {
    const sheet = doc.sheetsByIndex[0];

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const nationalId = data.get('nationalId') as string;

    if (name.includes('=') || email.includes('=') || nationalId.includes('=')) {
      throw new Error('Invalid input: "=" character is not allowed.');
    }

    try {
      await sheet.loadHeaderRow();
    } catch (err) {
      await sheet.setHeaderRow(['name', 'email', 'nationalId', 'timestamp']);
    }

    if (sheet.headerValues.length === 0) {
      await sheet.setHeaderRow(['name', 'email', 'nationalId', 'timestamp']);
    }

    await sheet.addRow({ name, email, nationalId, timestamp: new Date().toISOString() }, {raw: true});
  }

  return { addData };
}