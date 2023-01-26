const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
};

const getLatestNotification = () => {
    const data = "<strong>Urgent requirement</strong> - complete by EOD";

    return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export { getFullYear, getFooterCopy, getLatestNotification };
