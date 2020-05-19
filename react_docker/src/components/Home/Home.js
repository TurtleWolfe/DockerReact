import React, { Component } from 'react';
import './Home.css';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
        props.primary &&
        css`
      background: black;
      color: white;
    `};  
`;

const Container = styled.div`
  text-align: center;
`;

class Home extends Component {
    constructor() {
        // We need to define super() at the beginning of the 
        // constructor to have access to 'this'
        super();

        // Here we initialize our local state as an object
        this.state = {
            name: 'Jonathan'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'TurtleWolfe'
            });
        }, 1700);
    }

    render() {
        console.log('Name:', this.state.name);

        return (
            <div className="Home">

                {/* Here we render our state name */}
                <p>my name is {this.state.name}</p>
                <p>
                    watch me work live
                </p>
                <p>
                    <Button primary><a href="https://www.twitch.tv/turtlewolfe">twitch.tv/TurtleWolfe</a></Button>
                </p>
                <p>
                    For local development move from the root directory into docker_react
                    and build the story server
                </p>
                <p>
                    <code>
                        cd docker_react
                    </code>
                </p>
                <p>
                    <code>
                        docker-compose build -up
                    </code>
                </p>
                <p>
                    Edit <code>src/components/Home/Home.js</code> and save to reload.
                </p>
                <h2>
                    <a
                        className="App-link"
                        href="https://github.com/TurtleWolf/DockerReact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Docker StoryBook repo
                </a>
                </h2>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
                <Button primary>economies are just abstactions of our values</Button>
            </div>
        );
    }
}

export default Home;

