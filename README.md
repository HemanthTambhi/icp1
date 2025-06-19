# masterverses-icp-frontend

A decentralized event marketplace built on the Internet Computer Protocol (ICP).

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)
- [DFX](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (DFINITY Canister SDK)

## Project Structure

```
masterverses-icp-frontend/
├── dist/                  # Build output directory
├── masterverses-backend/  # Express.js backend for API endpoints
├── public/                # Static assets
├── src/                   # Frontend React source code
├── .dfx/                  # DFX local state (gitignored)
├── dfx.json               # DFX configuration
└── package.json           # Frontend dependencies
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/masterverses-icp-frontend.git
cd masterverses-icp-frontend
```

### Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The frontend will be available at http://localhost:3000/

### Backend Setup

1. Navigate to the backend directory:

```bash
cd masterverses-backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
node apiHandler.js
```

The backend API server will be available at http://localhost:3001

## ICP Local Development

1. Start the local ICP replica:

```bash
dfx start --background
```

2. Deploy the frontend canister:

```bash
dfx deploy frontend
```

Your frontend will be deployed to a local canister with ID `bkyz2-fmaaa-aaaaa-qaaaq-cai` and accessible at http://localhost:3000

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/listing-events` - Get a list of events
- `GET /api/four-pics-full-details` - Get detailed information for four pictures
- `GET /api/six-pics-names` - Get six pictures with names
- `GET /api/featured-events` - Get featured events
- `POST /api/add-picture` - Add a new picture

## Deployment to ICP Mainnet

1. Ensure you have ICP cycles and an identity set up:

```bash
dfx identity new my-identity
dfx identity use my-identity
```

2. Deploy to the mainnet:

```bash
dfx deploy --network ic
```

## Troubleshooting

- If you encounter connection issues with the local replica, ensure it's running with `dfx ping`
- For backend issues, check the console logs for error messages
- Make sure the canister ID in `apiHandler.js` matches your deployed canister ID

## License

[MIT](LICENSE)
# masterverses-icp-frontend
# icp1
