import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// Get all events
const getEventList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/listing-events`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching event list:', error);
        return null; // Handle errors gracefully
    }
};

// Get Featured events
const getFeaturedEvents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/featured-events`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching featured events:', error);
        return null; // Handle errors gracefully
    }
};

// Get Nearby places
const getNearbyPlaces = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/api/nearby-places`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching nearby places:', error);
        return null; // Handle errors gracefully
    }
};

// Get Top Organizations
const getTopOrganizations = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/top-org`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching top organizations:', error);
        return null; // Handle errors gracefully
    }
};


export { getEventList, getFeaturedEvents, getNearbyPlaces, getTopOrganizations };