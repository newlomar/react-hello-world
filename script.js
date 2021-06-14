class App extends React.Component {

    state = {colors: {
        color: '#000',
        backgroundColor: '#FF0'
    }}
    
    //função baseada nesse artigo: http://alienryderflex.com/hsp.html
    isDarkColor(r, g ,b) {
        const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
        
        return (hsp < 127.5);
    }

    randomRGB() {
        const random = () => Math.floor(Math.random() * 256);
        const r = random();
        const g = random();
        const b = random();

        return {r, g, b, rgb: `rgb(${r}, ${g}, ${b})`};
    }

    changeColor() {
        const color = this.randomRGB();
        const isDark = this.isDarkColor(color.r, color.g, color.b);
        
        this.setState({colors: {
            color: (isDark) ? '#FFF' : '#000',
            backgroundColor: color.rgb,
        }});


        setTimeout(() => this.changeColor(), 500);
    }

    render() {
        return(
            <div>
                <h1 style={this.state.colors}>Hello World!</h1>
                <button type="button" onClick={() => this.changeColor()}>Start</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));