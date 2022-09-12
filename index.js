const app = require("./express_config.js");
const sequelize = require("./database/database/database");

async function main() {
    try {
        // await sequelize.sync({force: false});
        app.listen(process.env.PORT || 3500, () => {
            console.log("Server is running on port ", process.env.PORT || 3500);
        });
    } catch (error) {
        console.log("Unable to connect bro", error);

    }
}

main()