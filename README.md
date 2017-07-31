<h1>Flight Search</h1>

<h3>Introduction</h3>
<p>Here, we want to implement Flight search functionality. You have a form, where user can input
and search for the flights. Then user will be able to see the search results, user can refine the
search using a slider for prices.</p>

<h3>Technical Info</h3>
<ul>
    <li>Used Angular framework for the development.</li>
    <li>Index.html is the landing page.</li>
    <li>Entire application is build by creating individual web component.</li>
    <li>Used Custom Directives to reuse the components. i.e. flightResultsDirective.js, datePicker.js, slider.js
    </li>
    <li>Used Custom filters </li>
    <li>Created Static data.json file to fetch the results</li>
    <li>No CSS framework is used except form Date picker and Slider component</li>
    <li>Contains some unit tests.</li>
</ul>

<h3>Search Criteria:</h3>
<h4>Two Way: Bangalore --> Hyderabad -->Bangalore: </h4>
<p>Departure Date: 08/05/2017</p>
<p>Return Date: 08/07/2017</p>

<h4>One Way: Bangalore  --> Hyderabad </h4>
<p>Departure Date: 08/05/2017</p>

<h4>One Way: Hyderabad --> Bangalore </h4>
<p>Departure Date: 08/07/2017</p>