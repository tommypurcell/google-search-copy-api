# Google Search API

This is an API implementation for a React frontend Google Search copy. The API allows users to search for results that match their search term.

## Prerequisites

Before running the API, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install the dependencies:

4. Create a `.env` file in the root directory and add the following environment variable:

Replace `your-mongodb-connection-string` with the connection string for your MongoDB database.

## Usage

To start the API, run the following command:

The API will be available at `http://localhost:4000` or the port specified in the `PORT` environment variable.

## API Endpoints

### Welcome Message

- Endpoint: `/`
- Method: `GET`
- Description: Displays a welcome message.
- Response:

### Search Results

- Endpoint: `/results`
- Method: `GET`
- Query Parameters:
- `search` (required): The search term to match results against.
- Description: Retrieves the search results that match the provided search term.
- Response: An array of search results in JSON format.

## Example

To search for results matching a search term, make a GET request to the `/results` endpoint with the `search` query parameter.

Example request:

Example response:

```json
[
  {
    "title": "Example Result 1",
    "description": "This is an example result.",
    "url": "http://example.com"
  },
  {
    "title": "Example Result 2",
    "description": "Another example result.",
    "url": "http://example2.com"
  }
]
```
