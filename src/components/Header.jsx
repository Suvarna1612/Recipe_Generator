import logo from "../assets/chef.svg"

export default function Header(){
    return (
        <>
        <main>
        <div className="HeaderClass">
            <img src={logo} alt="Logo image" width="80px" />
            <h1>Recipe generator</h1>
        </div>
        </main>
        
        </>
    );
}