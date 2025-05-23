import ReactMarkdown from "react-markdown";
export default function Recipe(props){
    return (
        <section className="suggested-recipe-container">
            <h2>Suggested Recipe:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}