// import { render, screen } from '@testing-library/react';
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("Should return current year", () => {
    expect(getFullYear()).toBe(2023);
});

test("Should return the right value of the footer", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("Should ruturn the right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})