var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> - This was source for weather data searched for by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
