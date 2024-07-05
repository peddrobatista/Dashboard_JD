import { google } from "googleapis";

const getAuthSheets = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    const spreadsheetId = '1vjBkxAzTICJuJvY6GFGjEt7W_io4uFN25bqZ7efF9I8'; 

    return { auth, client, googleSheets, spreadsheetId };
}

export default getAuthSheets;