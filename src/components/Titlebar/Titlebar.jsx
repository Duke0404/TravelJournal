import "./Titlebar.css"

const Titlebar = () =>
    <header id="titlebar-container">
        <img id="title-logo" src={`${process.env.PUBLIC_URL}/favicon.svg`} title ="Icon" alt="Icon" />
        <h1>My Travel Journal</h1>
    </header>

export default Titlebar