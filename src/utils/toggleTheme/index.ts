/**
 * Toggle theme between light and dark
 * save theme to local storage
 *
 * @exmaple
 *
 * <button onClick={toggleTheme}>Toggle theme</button>
 */
export const toggleTheme = () => {
    if (typeof window === "undefined") return;
    const body = document.body;
    let theme = body.dataset.theme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
};
