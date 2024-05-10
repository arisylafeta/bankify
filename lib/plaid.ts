import { Configuration, PlaidApi, PlaidEnvironments} from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
        'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID || 'your_client_id',
        'PLAID-SECRET': process.env.PLAID_SECRET || 'your_secret',
        },
    },
});

export const plaidClient = new PlaidApi(configuration);