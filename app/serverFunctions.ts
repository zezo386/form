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

    // 1. Try to load existing headers from the sheet
    try {
      await sheet.loadHeaderRow();
    } catch (err) {
      // If the sheet is completely empty, loadHeaderRow throws.
      // We catch it and set the headers manually.
      await sheet.setHeaderRow(['name', 'email', 'nationalId']);
    }

    // 2. Now headerValues is populated (either from the sheet or from our setHeaderRow)
    if (sheet.headerValues.length === 0) {
      // Safety net: if headers exist but are empty strings, set them
      await sheet.setHeaderRow(['name', 'email', 'nationalId']);
    }

    // 3. Safely add the row using named keys
    await sheet.addRow({ name, email, nationalId });
  }

  return { addData };
}