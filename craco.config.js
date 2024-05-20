module.exports = {
    mode: "development",
    devServer: {
        port: 8100,
    },
    babel: {
        plugins: [
            "jsx-display-if",
            "jsx-control-statements",
        ],
    },
};