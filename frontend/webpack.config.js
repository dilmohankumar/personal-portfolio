const config = {
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify")// Use crypto-browserify for crypto
        },
    },
};

export default config;
