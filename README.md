# NCRM CMS

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:fast-forward-innovation/ncrm-content.git
cd ncrm-content
```

### 2. Check Node.js and npm Versions

Ensure you have Node.js (v22.14.0 or higher recommended) and npm installed:

```bash
node -v
npm -v
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Strapi Server

To launch the Strapi development server, run:

```bash
npm run develop
```

This will start Strapi in development mode. By default, the admin panel will be available at [http://localhost:1337/admin](http://localhost:1337/admin).

Follow the prompts to create your first admin user if you haven't already.

### 5. Sync Content with Strapi Cloud

You can pull from or push content to Strapi Cloud using transfer tokens.

#### a. Set Up a Transfer Token

1. In your Strapi Cloud dashboard, go to **Settings > Transfer Tokens**.
2. Create a new transfer token and copy the token value.

#### b. Pull Content from Strapi Cloud

```bash
STRAPI_TRANSFER_TOKEN=<your-transfer-token> \
npx strapi transfer --from=<cloud-url>
```

Replace `<your-transfer-token>` with your token and `<cloud-url>` with your Strapi Cloud project URL.

#### c. Push Content to Strapi Cloud

```bash
STRAPI_TRANSFER_TOKEN=<your-transfer-token> \
npx strapi transfer --to=<cloud-url>
```

Replace `<your-transfer-token>` with your token and `<cloud-url>` with your Strapi Cloud project URL.

> **Note:** Make sure your local and cloud Strapi versions are compatible before transferring data.