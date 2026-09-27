marked.setOptions({
    breaks: true
});

const defaultMarkdown = `# Markdown Previewer

## Welcome to my Markdown Previewer

This is a **Markdown Previewer** built with React.

You can visit [freeCodeCamp](https://www.freecodecamp.org/).

Here is some \`inline code\`.

Here is a code block:

\`\`\`javascript
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

Here is a list:

- Learn React
- Learn Markdown
- Build projects

> Markdown is a simple way to format text.

Here is an image:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg)

**Have fun coding!**
`;

class MarkdownPreviewer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markdown: defaultMarkdown
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        });
    }

    render() {
        return (
            <div className="app">

                <h1 className="title">
                    Markdown Previewer
                </h1>

                <div className="container">

                    <div className="panel">

                        <h2 className="panel-title">
                            Editor
                        </h2>

                        <textarea
                            id="editor"
                            value={this.state.markdown}
                            onChange={this.handleChange}
                        />

                    </div>

                    <div className="panel">

                        <h2 className="panel-title">
                            Preview
                        </h2>

                        <div
                            id="preview"
                            dangerouslySetInnerHTML={{
                                __html: marked.parse(this.state.markdown)
                            }}
                        />

                    </div>

                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownPreviewer />,
    document.getElementById("root")
);