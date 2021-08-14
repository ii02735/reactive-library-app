import { GoogleAuth } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";

require('dotenv').config();

const { CREDS, SPREADSHEET_ID } = process.env

export class SpreadSheetManager {
    
    private static getCredentials(): GoogleAuth{
        return new GoogleAuth({
            scopes: "https://www.googleapis.com/auth/spreadsheets",
            credentials: JSON.parse(CREDS)
        });        
    }

    private static async initializeGSheetsInstance(): Promise<sheets_v4.Sheets> {
        return google.sheets({ version: "v4", auth: await SpreadSheetManager.getCredentials().getClient() })
    }

    public static async appendSheet(values: string[][], sheet_name: string): Promise<void> {

        const gSheetsInstance:sheets_v4.Sheets = await SpreadSheetManager.initializeGSheetsInstance();

        await gSheetsInstance.spreadsheets.values.append({
            auth: SpreadSheetManager.getCredentials(),
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheet_name}`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values
            }
        })
    }

    public static async getValuesFromSheet(sheet_name: string): Promise<sheets_v4.Schema$ValueRange> {

        const gSheetsInstance:sheets_v4.Sheets = await SpreadSheetManager.initializeGSheetsInstance();

        const readData = await gSheetsInstance.spreadsheets.values.get({
            auth: SpreadSheetManager.getCredentials(),
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheet_name}`
        })

        return readData.data
    }
}

