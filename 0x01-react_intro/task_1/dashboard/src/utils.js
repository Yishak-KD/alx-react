module.exports = {
    getFullYear: () => new Date().getFullYear().toLocaleString(),
    getFooterCopy: (isIndex) => {
        if (isIndex === true) {
            return "Holberton School";
        } else {
            return "Holberton School main dashboard";
        }
    },
};
