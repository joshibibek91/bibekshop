import { json } from "@remix-run/node";
import fetch from "node-fetch";

// Use environment variables for sensitive information
const shop = "bibekshop"; // e.g., 'your-shop-name.myshopify.com'
const clientId = "eb09c2a874c7865acde280e665f62bde";
const clientSecret = "c5ffb3f5121c90aec9d013d8501d2c8f";

async function getAccessToken(clientId, clientSecret) {
    const shop = "bibekshop";
    const redirectUri = process.env.SHOPIFY_REDIRECT_URI; // Ensure this matches your app settings
    const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${clientId}&scope=read_products&redirect_uri=${redirectUri}`;

    // Simulate obtaining authorization code
    const authorizationCode = 'authorization-code-from-query-param'; // This should be dynamically obtained in a real app

    const tokenUrl = `https://${shop}/admin/oauth/access_token`;
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: authorizationCode
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to obtain access token ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

export async function loader() {
    try {
        const accessToken = await getAccessToken(clientId, clientSecret);

        if (!accessToken) {
            return json({ success: false, message: 'Failed to obtain access token' });
        }

        const apiVersion = '2023-04'; // Update to the current API version
        const url = `https://${shop}/admin/api/${apiVersion}/products.json?limit=5&order=best_selling`;

        const response = await fetch(url, {
            headers: {
                'X-Shopify-Access-Token': accessToken
            }
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok ${response.statusText}`);
        }

        const data = await response.json();
        const topProducts = data.products;
        return json({ success: true, products: topProducts });
    } catch (error) {
        return json({ success: false, message: error.message });
    }
}
