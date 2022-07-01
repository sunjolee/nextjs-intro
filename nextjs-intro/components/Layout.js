import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children} 나는 Layout.js</div>
        </>
    );
}