# Paxton.ai Front End Test

## Configuration

Create an .env file at the project root and place a `VITE_OPENAI_API_KEY="YOUR API KEY"` variable in the file. This is a demo app and it is extremely unsafe to use an API key directly here, and would instead be found on a server. Best practice would be to initiate a new OPENAI key for running this, then when finished delete the key to insure no one else can use it.

## Installation

`pnpm install`
`pnpm run dev`

## Testing

### Unit tests

`pnpm run test`

### E2E tests

`pnpm run test:e2e`
