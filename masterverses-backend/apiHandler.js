const { Actor, HttpAgent } = require("@dfinity/agent");
const { IDL } = require("@dfinity/candid");
require('dotenv').config();
const express = require('express');
const path = require('path');

const { idlFactory } = require('./declarations.js');

// const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const canisterId = process.env.BACKEND_CANISTER_ID || "qegsm-uqaaa-aaaad-qg7ga-cai";
const host = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io";

// Helper function to convert Uint8Array to base64 string
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    return Buffer.from(bytes).toString('base64');
}

// Updated formatResponse function to include IPFS URL
function formatResponse(data) {
    if (Array.isArray(data)) {
        return data.map(item => {
            console.log('Raw item:', item); // Debug log

            // Get the raw image data as Uint8Array
            const imageArray = Object.values(item.image);
            const base64String = Buffer.from(imageArray).toString('base64');
            
            return {
                id: item.id,
                image: `data:image/jpeg;base64,${base64String}`,
                ipfsUrl: item.ipfsUrl?.[0] || null,  // Handle optional IPFS URL
                name: item.name || null,              // Include name field
                description: item.description?.[0] || null,
                date: item.date?.[0] || null,         // Handle date as text
                location: item.location?.[0] || null,
                price: item.price?.[0] || null
            };
        });
    }
    return data;
}

const agent = new HttpAgent({ host });
// agent.fetchRootKey().catch(err => {
//     console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
//     console.error(err);
// });

const app = express();
const port = 3001;

const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Updated endpoints to use the new formatter
app.get('/api/listing-events', async (req, res) => {
    try {
        const pics = await actor.getThreePicsWithDetails();
        const formattedPics = formatResponse(pics);
        res.json(formattedPics);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Failed to process request" });
    }
});

app.get('/api/four-pics-full-details', async (req, res) => {
    try {
        const pics = await actor.getFourPicsFullDetails();
        const formattedPics = formatResponse(pics);
        res.json(formattedPics);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/six-pics-names', async (req, res) => {
    try {
        const pics = await actor.getSixPicsWithNames();
        const formattedPics = formatResponse(pics);
        res.json(formattedPics);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/nearby-places', async (req, res) => {
    try {
        const places = await actor.getNearbyPlaces();
        const formattedPlaces = places.map(place => ({
            id: place.id,
            ipfsUrl: place.ipfsUrl?.[0] || null,
            name: place.name,
            description: place.description?.[0] || null,
            date: place.date?.[0] || null,
            location: place.location?.[0] || null,
            price: place.price?.[0] || null
        }));
        res.json(formattedPlaces);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/top-org', async (req, res) => {
    try {
        const orgs = await actor.getTopOrgs();
        const formattedOrgs = orgs.map(org => ({
            name: org.name,
            ipfsUrl: org.ipfsUrl?.[0] || null
        }));
        res.json(formattedOrgs);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/featured-events', async (req, res) => {
    try {
        const events = await actor.getFeaturedEvents();
        const formattedEvents = events.map(event => ({
            id: event.id,
            ipfsUrl: event.ipfsUrl?.[0] || null,
            name: event.name,
            date: event.date?.[0] || null,
            location: event.location?.[0] || null,
            description: event.description?.[0] || null
        }));
        res.json(formattedEvents);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Updated add picture endpoint to include IPFS URL
app.post('/api/add-picture', express.json(), async (req, res) => {
    try {
        const { name, image, ipfsUrl, description, location, price } = req.body;
        const newId = await actor.addPicture(
            name, 
            image, 
            ipfsUrl || null,  // Make IPFS URL optional
            description || null, 
            location || null, 
            price || null
        );
        res.json({ 
            id: newId,
            ipfsUrl: ipfsUrl || null
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});