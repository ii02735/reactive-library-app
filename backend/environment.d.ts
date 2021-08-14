/**
 * Tells the expected types for environement variables
 */

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CREDS: string;
            SPREADSHEET_ID: string
        }
    }
}

export {}