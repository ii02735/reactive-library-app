require('dotenv').config();

const { CREDS, SPREADSHEET_ID } = process.env


const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/spreadsheets",
    credentials: JSON.parse(CREDS)
});


(async() => {
    const authClientObject = await auth.getClient()
    const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
    await googleSheetsInstance.spreadsheets.values.append({
        auth, //auth object
        spreadsheetId: SPREADSHEET_ID, //spreadsheet id
        range: "Books!A:B", //sheet name and range of cells
        valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
        resource: {
            values: [["Git followers tutorial", "Mia Roberts", "hello", "world","closeBy"]],
        },
    });

})();


