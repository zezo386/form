'use server';

import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { revalidatePath } from 'next/cache';
import { CreateServerFunctions } from './serverFunctions';

function buildDoc(): GoogleSpreadsheet {
  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return new GoogleSpreadsheet(
    process.env.GOOGLE_SPREADSHEET_ID as string,
    auth
  );
}

export async function addData(formData: FormData): Promise<void> {
  const doc = buildDoc();
  await doc.loadInfo();
  const { addData: add } = CreateServerFunctions({ doc });
  await add(formData);
  revalidatePath('/');
}