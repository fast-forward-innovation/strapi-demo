export default () => ({
    graphql: {
        config: {
            playgroundAlways: true,   // ✅ Force enable Playground
            defaultLimit: 100,
            maxLimit: 250,
            apolloServer: {
                introspection: true,    // ✅ Allow introspection in production
            },
        },
    },
});
