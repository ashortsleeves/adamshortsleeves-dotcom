import "../index.css";

export default function Section({children, ...props }) {
    return (
        <section {...props}>
            {children}
        </section>
    );
}