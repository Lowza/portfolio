import "./contact.css";

function Contact() {
    return (
        <section id="contact">      
            <h2>Contact me</h2>
            <form action="https://formsubmit.co/jackrlomax@gmail.com" method="POST">
                <label>Name</label>
                <input placeholder="Name" type="text" name="name"/>

                <label>Email</label>
                <input placeholder="Email" type="email" name="email"/>

                <label>Message</label>
                <textarea placeholder="Message" type="textarea" name="message"/>

                <button type="submit">Submit</button>
                <input type="hidden" name="_next" value="https://lowza.github.io/portfolio/"></input>
            </form>
        </section>
    )
}

export default Contact;